import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";

const itemDTOMapper = row => ({
  itemId: row.item_id,
  itemName: row.item_name,
  price: row.price,
  category: row.category,
  description: row.item_description,
  seller: row.seller,
  releaseDate: row.release_date,
  images: row.images
});

export async function collectAllItems() {
  const query = sql`select * from items;`;
  return await PGWrapper.sqlAndMap(query, itemDTOMapper);
}

export async function collectItem(parameter) {
  const query = sql`select i.item_id, i.item_name, i.price, i.category, i.item_description, i.seller, array_agg(ii.img_url) as images 
  from items as i left join item_images as ii on i.item_id = ii.item_id where i.item_id = ${parameter} group by i.item_id`;

  const results = await PGWrapper.sqlAndMap(query, itemDTOMapper);
  return results[0];
}
