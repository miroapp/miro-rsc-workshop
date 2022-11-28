import axios from "axios";
import { board_id } from "../../constants";

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const item_id = body.item_id;
  const content = body.content;
  const item_type = body.item_type

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${req.cookies.miro_access_token}`,
  };

  axios
    .patch(
      `https://api.miro.com/v2/boards/${board_id}/${item_type}s/${item_id}`,
      {
        data: { content: content },
      },
      {
        headers: headers,
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
