import { StatusError } from "../../utils/errors.js";
import { fetchOrderHistory } from "../repositories/orders";

let loggedIn = true;

export async function getOrderHistory(parameter) {
  console.log("fetching order history from database");
  if (loggedIn) {
    try {
      const results = await fetchOrderHistory(parameter);
      console.log("Here are the order-history results:", results);
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}
