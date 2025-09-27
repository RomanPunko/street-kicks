"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

const store = setupStore();

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}