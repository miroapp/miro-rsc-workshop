import axios from "axios";
import { board_id } from "../../constants";

export default function handler(req, res) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${req.cookies.miro_access_token}`,
  };

  const data = {
    data: { content: "Hello", shape: "square" },
    style: {
      fillColor: "light_yellow",
      textAlign: "center",
      textAlignVertical: "top",
    },
    position: { origin: "center", x: 0, y: 0 },
  };

  axios
    .post(`https://api.miro.com/v2/boards/${board_id}/sticky_notes`, data, {
      headers: headers,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
