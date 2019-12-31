import Head from "next/head";
import { ReactNode } from "react";
import Layout from "~/components/Layout";

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Page(props: PageProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {props.children}
    </>
  );
}
