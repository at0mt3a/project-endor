import { ErrorWithSatus } from "../../utils/errors.js";
import { dummyFunction } from "../repositories/items";

export async function createItem(item) {
  console.log("trying to create New Item", item);
  if (!item) {
    throw new ErrorWithSatus({ msg: "Please Provide an item", status: 400 });
  }
  //call the repo
}

export async function getAllItems() {
  console.log("fetching items from database");
  const repoResults = await dummyFunction();
  console.log("Here are the repo results:", repoResults);
  return repoResults;
}
