import {
  getCreatorInfo,
  getCreatorsList,
  getRevisedCreator
} from "../../commands/creators";
import { wrapAsyncFunc } from "../../../utils/wrap-async-route";

export default class AuthController {
  constructor(router) {
    router.get("/:id", wrapAsyncFunc(this.creatorSpotlight));
    router.get("/", wrapAsyncFunc(this.creatorsList));
    router.put("/:id", wrapAsyncFunc(this.updateCreator));
  }

  async updateCreator(req, res) {
    const { id } = req.params;
    const revisedName = req.body.creator.firstName;
    console.log(
      "I am responding to a put request on /creators/:id",
      req.body,
      id
    );
    const revisedCreator = await getRevisedCreator(revisedName, id);
    res.send({ revisedCreator });
  }

  async creatorSpotlight(req, res) {
    const { id } = req.params;
    console.log("ID", id, req.params);
    const creator = await getCreatorInfo(id);
    res.send({ creator });
  }

  async creatorsList(req, res) {
    const creators = await getCreatorsList();
    res.send({ creators });
  }
}
