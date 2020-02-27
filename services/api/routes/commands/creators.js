import {
  fetchCreatorsDetails,
  fetchCreatorInfo,
  reviseCreator
} from "../repositories/creators";

export async function getCreatorInfo(userHandle) {
  return fetchCreatorInfo(userHandle);
}

export async function getCreatorsList() {
  return fetchCreatorsDetails();
}

export async function getRevisedCreator(revisedName, userHandle) {
  console.log("COMMAND FUNC", revisedName, userHandle);
  return reviseCreator(revisedName, userHandle);
}
