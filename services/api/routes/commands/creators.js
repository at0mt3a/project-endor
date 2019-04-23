import { 
  fetchCreatorsDetails,
  fetchCreatorInfo
 } from '../repositories/creators'

export async function getCreatorInfo(userHandle) {
  return fetchCreatorInfo(userHandle)
}

export async function getCreatorsList() {
  return fetchCreatorsDetails()
}
