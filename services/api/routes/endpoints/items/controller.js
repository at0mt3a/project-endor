import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { createItem, getAllItems } from "../../commands/items";

export default class ItemController {
  constructor(router) {
    router.post("/:id", wrapAsyncFunc(this.createNewItem));
    router.get("/", wrapAsyncFunc(this.fetchItems));
  }

  async createNewItem(req, res) {
    console.log("hello");
    const { item } = req.body;
    //call BL for response
    const { results } = await createItem(item);
    res.send({ results });
  }

  async fetchItems(req, res) {
    const items = await getAllItems();
    res.send({ items });
  }
}
