// pages/home.server.js

import { Suspense } from "react";

import Main from "./main.client";
import Time from "../components/Time.server";

export default function Index() {
  return (
    <Suspense fallback={"Loading..."}>
      <Main />
      <Time />
    </Suspense>
  );
}
