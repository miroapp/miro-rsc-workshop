import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => setAuthenticated(result.authenticated));
  }, []);

  return (
    <section>
      <Head>
        <title>Miro Workshop</title>
        <meta name="description" content="Miro Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? (
        <></>
      ) : (
        <Link href="/api/signin">
          <a>Sign In</a>
        </Link>
      )}
    </section>
  );
}
