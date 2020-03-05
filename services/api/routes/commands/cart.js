import { StatusError } from "../../utils/errors.js";
import { fetchCartContents } from "../repositories/cart";
import { fetchCartQuantity } from "../repositories/cart";
import { postItemsToCart } from "../repositories/cart";
import { placeOrderFromCart } from "../repositories/cart";
import { deleteItemFromCart } from "../repositories/cart";

let loggedIn = true;

export async function getCartContents(parameter) {
  console.log("fetching cart contents from database");
  if (loggedIn) {
    try {
      const results = await fetchCartContents(parameter);
      console.log("Here are the cart CONTENT results:", results);
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}

export async function getCartQuantity(parameter) {
  console.log("fetching cart quantity from database");
  if (loggedIn) {
    try {
      const results = await fetchCartQuantity(parameter);
      console.log("Here are the cart QUANTITY results:", results);
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}

export async function addItemsToCart(userHandle, items) {
  const results = await postItemsToCart(userHandle, items);
  console.log(`attempting BL for cart addition u - ${userHandle} i - ${items}`);
  return results;
}

export async function addOrderFromCart(parameter) {
  if (loggedIn) {
    try {
      const results = await placeOrderFromCart(parameter);
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}

export async function deleteCartItem(userHandle, item) {
  const results = await deleteItemFromCart(userHandle, item);
  console.log("COMMAND FUNC: deleting ", item, " from ", userHandle, "'s cart");
  return results;
}
