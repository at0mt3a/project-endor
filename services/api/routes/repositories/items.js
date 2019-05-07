import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemId: row.item_id,
  itemName: row.item_name,
  price: row.price,
  category: row.category,
  seller: row.seller,
  releaseDate: row.release_date
});

export async function collectAllItems() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMapper);
}
