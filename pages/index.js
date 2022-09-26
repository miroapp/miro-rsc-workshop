import { Suspense } from "react";

import Main from "./main.client";

export default function Index() {
  return (
    <Suspense fallback={"Loading..."}>
      <Main />
    </Suspense>
  );
}
