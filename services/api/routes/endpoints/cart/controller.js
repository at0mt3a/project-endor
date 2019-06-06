import { wrapAsyncFunc } from "../../../utils/wrap-async-route";
import { getCartContents } from "../../commands/cart";
import { getCartQuantity } from "../../commands/cart";
import { addItemsToCart } from "../../commands/cart";
import { addOrderFromCart } from "../../commands/cart";
import { wrap } from "module";

//import business logic for endpoint

//REFACTOR .GET URIs!!!!!!

export default class CartController {
  constructor(router) {
    router.get("/quantity/:id", wrapAsyncFunc(this.fetchCartQuantity));
    router.get("/contents/:id", wrapAsyncFunc(this.fetchCartContents));
    router.post("/add", wrapAsyncFunc(this.addToCart));
    router.post("/place-order", wrapAsyncFunc(this.addOrderFromCart));
  }

  async fetchCartQuantity(req, res) {
    const cartQuantity = await getCartQuantity(req.params.id);
    res.send({ cartQuantity });
  }

  async fetchCartContents(req, res) {
    const cartContents = await getCartContents(req.params.id);
    res.send({ cartContents });
  }

  async addToCart(req, res) {
    console.log(`we're gonna add some stuff to ${req.user.userHandle}'s cart`);
    const { userHandle } = req.user;
    const { items } = req.body;

    const results = await addItemsToCart(userHandle, items);
    res.send({ cart: results });
  }

  async placeOrder(req, res) {
    console.log(
      `we're gonna place an order from ${req.user.userHandle}'s cart`
    );
    const { userHandle } = req.user;

    const results = await addOrderFromCart(userHandle);
    res.send({ results });
  }
}
