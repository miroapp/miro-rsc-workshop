import { useState } from "react";
import Input from "./Input";

const MiroItem = ({ type, item_id, item_type, created_at }) => {
  const [content, setContent] = useState("");

  const handleUpdateContent = () => {
    fetch("/api/authenticate")
      .then(() => {
        fetch("/api/updateContent", {
          method: "PUT",
          body: JSON.stringify({
            item_id: item_id,
            item_type: item_type,
            content: content,
          }),
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="miro-item-container">
      <h3>{type}</h3>
      <div id="miro-item-controls-container">
        <div id="miro-item-input-container">
          <Input
            label={"Content"}
            placeholder={"Type new value"}
            onChange={(value) => setContent(value)}
          />
        </div>
        <button className="button button-primary" onClick={handleUpdateContent}>
          Update Content
        </button>
      </div>
    </div>
  );
};

export default MiroItem;
