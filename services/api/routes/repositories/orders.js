import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const orderMapper = row => ({
  orderId: row.order_id,
  itemId: row.item_id,
  quantity: row.quantity,
  price: row.price,
  itemName: row.item_name,
  orderDate: row.order_date
});

export async function fetchOrderHistory(parameter) {
  const query = sql`select order_id, item_id, quantity, price, item_name, order_date from orders join order_items using (order_id) join items using (item_id) where purchaser_id = ${parameter};`;
  const results = await PGWrapper.sqlAndMap(query, orderMapper);
  return results;
}
