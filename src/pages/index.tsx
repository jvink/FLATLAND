import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Modal from "../components/Modal/Modal";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>FLATLAND</title>
        <meta name="description" content="FOR TESTING PURPOSES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />

      <button onClick={() => setModalOpen(true)}>Open modal</button>

      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>First</td>
            <td className={styles.td}>First</td>
            <td className={styles.td}>First</td>
            <td className={styles.td}>First</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Second</td>
            <td className={styles.td}>Second</td>
            <td className={styles.td}>Second</td>
            <td className={styles.td}>Second</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Third</td>
            <td className={styles.td}>Third</td>
            <td className={styles.td}>Third</td>
            <td className={styles.td}>Third</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Fourth</td>
            <td className={styles.td}>Fourth</td>
            <td className={styles.td}>Fourth</td>
            <td className={styles.td}>Fourth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Fifth</td>
            <td className={styles.td}>Fifth</td>
            <td className={styles.td}>Fifth</td>
            <td className={styles.td}>Fifth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Sixth</td>
            <td className={styles.td}>Sixth</td>
            <td className={styles.td}>Sixth</td>
            <td className={styles.td}>Sixth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Seventh</td>
            <td className={styles.td}>Seventh</td>
            <td className={styles.td}>Seventh</td>
            <td className={styles.td}>Seventh</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Eighth</td>
            <td className={styles.td}>Eighth</td>
            <td className={styles.td}>Eighth</td>
            <td className={styles.td}>Eighth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Ninth</td>
            <td className={styles.td}>Ninth</td>
            <td className={styles.td}>Ninth</td>
            <td className={styles.td}>Ninth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
            <td className={styles.td}>Tenth</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
