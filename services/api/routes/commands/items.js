import { StatusError } from "../../utils/errors.js";
import { collectAllItems, collectItem } from "../repositories/items";

let loggedIn = true;

export async function createItem(item) {
  console.log("trying to create New Item", item);
  if (!item) {
    throw new StatusError({ msg: "Please Provide an item", status: 400 });
  }
  //call the repo
}

export async function getAllItems() {
  console.log("fetching items from database");
  if (loggedIn) {
    try {
      const results = await collectAllItems();
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}

export async function getItem(parameter) {
  console.log("fetching item from database");
  if (loggedIn) {
    try {
      const results = await collectItem(parameter);
      console.log("Here are the repo results:", results);
      return results;
    } catch (err) {
      throw new StatusError({ msg: "DB error", status: 500 });
    }
  } else {
    throw new StatusError({ msg: "User not logged in", status: 400 });
  }
}
