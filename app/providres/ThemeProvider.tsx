"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as Provider } from "next-themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default ThemeProvider;
