import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const cartQuantityDTO = row => ({
  cartQuantity: row.total_item_num
});

const cartAddDTO = row => ({
  totalCartCount: row.count
});

const cartContentsMapper = row => {
  const results = {
    userId: row.user_id,
    items: []
  };

  results.items = row.items.map((key, index) => ({
    name: row.items[index],
    quantity: row.quantities[index]
  }));

  return results;
};

export async function fetchCartQuantity(parameter) {
  const query = sql`select user_id, sum(quantity) as total_item_num from carts 
    where user_id = ${parameter} and active = true group by user_id;`;
  const results = await PGWrapper.sqlAndMap(query, cartQuantityDTO);
  return results;
}

export async function fetchCartContents(parameter) {
  const query = sql`select user_id, array_agg(item_id) as items, 
    array_agg(quantity) as quantities from carts 
    where user_id = ${parameter} and active = true group by user_id;`;
  const results = await PGWrapper.sqlAndMap(query, cartContentsMapper);

  return results;
}

export async function postItemsToCart(userHandle, items) {
  const item = items[0];
  const statement = sql`INSERT into carts VALUES (
    ${userHandle},
    ${item.id},
    true,
    ${item.quantity}
    ) on conflict
  on constraint carts_pkey
    do update set quantity = ${item.quantity}, active = true;`;
  const results = await PGWrapper.sqlAndMap(statement, cartAddDTO);
  return results;
}

export async function placeOrderFromCart(parameter) {
  console.log("About to order", parameter);
  const placeOrder = sql`
      with new_order as (
        insert into orders (purchaser_id) values (${parameter}) returning *
      )
      insert into order_items (
        select new_order.order_id as order_id, c.item_id, c.quantity
        from carts c
        left join new_order on new_order.purchaser_id = c.user_id
        where c.user_id = ${parameter} and c.active = true
      );
    `;

  const emptyCart = sql`update carts set active = false 
    where user_id = ${parameter} and active = true;`;

  return await PGWrapper.sqlTransaction(placeOrder, emptyCart);
}

export async function deleteItemFromCart(userHandle, item) {
  console.log("about to delete", item, "from", userHandle, "'s cart");
  const statement = sql`delete from carts where item_id = ${item} and user_id = ${userHandle} and active = true returning item_id;`;
  return await PGWrapper.sqlTransaction(statement);
}
