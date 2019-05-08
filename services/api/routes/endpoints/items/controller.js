import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { createItem, getAllItems, getItem } from "../../commands/items";
import { wrap } from "module";

export default class ItemController {
  constructor(router) {
    router.post("/:id", wrapAsyncFunc(this.createNewItem));
    router.get("/", wrapAsyncFunc(this.fetchItems));
    router.get("/:id", wrapAsyncFunc(this.fetchItem));
  }

  async createNewItem(req, res) {
    console.log("hello");
    const { item } = req.body;
    const { results } = await createItem(item);
    res.send({ results });
  }

  async fetchItems(req, res) {
    const items = await getAllItems();
    res.send({ items });
  }

  async fetchItem(req, res) {
    const item = await getItem(req.params.id);
    res.send({ item });
  }
}
