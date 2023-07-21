"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider defaultTheme="system">{children}</ThemeProvider>;
};

export default AppThemeProvider;
