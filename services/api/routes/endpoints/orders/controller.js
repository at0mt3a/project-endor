import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { getOrderHistory } from "../../commands/orders";
import { wrap } from "module";

export default class OrderController {
  constructor(router) {
    router.get("/:id", wrapAsyncFunc(this.fetchOrderHistory));
  }

  async fetchOrderHistory(req, res) {
    const orderHistory = await getOrderHistory(req.params.id);
    res.send({ orderHistory });
  }
}
