import { Container, Divider, Paper, styled, Typography } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  // textAlign: "center",
  color: theme.palette.text.primary,
  // height: 60,
  lineHeight: "60px",
  padding: 10,
  // margin: "30px 0",
}));

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" style={{ padding: 20 }}>
          {props.children}
        </Container>
      </main>
      <footer>
        <Item elevation={1}>
          <Typography variant="h6">Footer here</Typography>
        </Item>
      </footer>
    </>
  );
}
