import { useUser } from "@auth0/nextjs-auth0";
import { Box, CircularProgress, Container, Fade, Typography } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { isLoading } = useUser();
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg" style={{ padding: "50px 0px 0px" }}>
          {isLoading ? <LoadingIndicator /> : props.children}
        </Container>
      </main>
    </>
  );
}

const LoadingIndicator = () => {
  return (
    <Box sx={{ height: 40, textAlign: "center", marginTop: "20%" }}>
      <Typography style={{ marginBottom: 30 }}>Please wait...</Typography>
      <Fade
        in={true}
        style={{
          transitionDelay: "0ms",
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    </Box>
  );
};
