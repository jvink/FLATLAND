import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FLATLAND - Contact</title>
        <meta name="description" content="FOR TESTING PURPOSES" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga
        libero temporibus cum, est aspernatur sapiente aliquid recusandae
        explicabo vitae! Totam vel eum saepe?
      </p>
    </div>
  );
};

export default Contact;
