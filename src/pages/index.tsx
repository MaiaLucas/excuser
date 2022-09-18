import { Box } from "@mui/material";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";
import IExcuses from "../interfaces/Excuses";

const Home: NextPage = ({
  excuses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Box
      minHeight="100vh"
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Head>
        <title>Wanna some excuses?</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Body excuses={excuses} />
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${process.env.baseUrl}/excuse/1000`);
  const excuses: IExcuses[] = await res.json();

  if (!excuses) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { excuses },
    revalidate: 60,
  };
};

export default Home;
