import { Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" style={{ padding: "50px 0px 0px" }}>
          {props.children}
        </Container>
      </main>
    </>
  );
}
