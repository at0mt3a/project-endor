import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const orderMapper = row => {
  const results = {
    orderId: row.order_id,
    orderDate: row.order_date,
    items: []
  };

  results.items = row.items.map((id, index) => ({
    name: row.names[index],
    quantity: row.quantities[index]
  }));

  return results;
};

export async function fetchOrderHistory(parameter) {
  const query = sql`select oi.order_id, array_agg(oi.item_id) as items, array_agg(oi.quantity) as quantities, 
  array_agg(i.item_name) as names, array_agg(i.price) as prices, array_agg(o.order_date) as order_date from order_items as oi 
  join orders as o on oi.order_id = o.order_id join items as i on oi.item_id = i.item_id where o.purchaser_id = ${parameter} group by oi.order_id, o.order_date`;
  const results = await PGWrapper.sqlAndMap(query, orderMapper);
  return results;
}
