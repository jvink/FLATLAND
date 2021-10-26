import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal/Modal";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <span>ho</span>
      <Head>
        <title>FLATLAND</title>
        <meta name="description" content="FOR TESTING PURPOSES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to</h1>
      <h1 className={styles["title--highlight"]}>Flatland</h1>
      <button onClick={() => setModalOpen(true)}>Open modal</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Home;
