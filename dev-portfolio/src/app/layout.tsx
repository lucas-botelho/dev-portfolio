"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Navbar from "@/components/Navbar/Navbar";
import Layout from "@/components/Layout/Layout";
import { RecoilRoot } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            <Layout>{children}</Layout>
          </ChakraProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
