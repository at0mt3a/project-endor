import { 
  getCreatorInfo,
  getCreatorsList,
  randomDailyMessage
} from "../../commands/daily";
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class AuthController {
  constructor(router) {
    router.get("/message", wrapAsyncFunc(this.getMessage));
    router.get("/creators/:id", wrapAsyncFunc(this.creatorSpotlight));
    router.get("/creators", wrapAsyncFunc(this.creatorsList));
  }

  async getMessage(req, res) {
    const message = await randomDailyMessage();
    res.send({ message });
  }

  async creatorSpotlight(req, res) {
    const { id } = req
    const creator = await getCreatorInfo(id);
    res.send({ creator });
  }

  async creatorsList(req, res) {
    const creators = await getCreatorsList();
    res.send({ creators });
  }
}
