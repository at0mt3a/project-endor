import { 
  fetchCreatorsDetails,
  fetchCreatorInfo,
  fetchMessage
 } from '../repositories/daily'

export async function randomDailyMessage() {
  const randomNumber = 1 + Math.floor(Math.random() * Math.floor(7))
  return fetchMessage(randomNumber)
}

export async function getCreatorInfo(userHandle) {
  return fetchCreatorInfo(userHandle)
}

export async function getCreatorsList() {
  return fetchCreatorsDetails()
}
