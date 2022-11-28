import { useState, useEffect } from "react";
import Head from "next/head";
import MiroItem from "../components/MiroItem";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [miroItems, setMiroItems] = useState([]);

  // On page load
  useEffect(() => {
    fetch("api/authenticate")
      .then(() => {
        fetch("/api/getItems")
          .then((response) => response.json())
          .then((result) => {
            setMiroItems([...result.data]);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => setAuthenticated(result.authenticated));
  }, []);

  const handleClick = () => {
    fetch("/api/authenticate")
      .then(() => {
        fetch("/api/createStickyNote")
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={"container"}>
      <Head>
        <title>We Are Developers Workshop</title>
        <meta name="description" content="Miro Full Stack Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? (
        <>
          <button
            className="button button-primary"
            type="button"
            onClick={handleClick}
          >
            Create Sticky Note
          </button>
          <h1>Board Items</h1>
          {miroItems.length > 0 ? (
            miroItems.map((miroItem, index) => {
              return (
                <MiroItem
                  type={miroItem.type}
                  item_id={miroItem.id}
                  item_type={miroItem.type}
                  created_at={miroItem.createdAt}
                  key={index}
                />
              );
            })
          ) : (
            <p>No items found</p>
          )}
        </>
      ) : (
        <a href="/api/signin">Sign In</a>
      )}
    </div>
  );
}
