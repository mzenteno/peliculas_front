import React from "react";
import MostSeen from "@components/home/MostSeen";
import Premiere from "@components/home/Premiere";
import ExpectedPremiere from "@components/home/ExpectedPremiere";
import styles from "@components/home/Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <MostSeen />
        <Premiere />
        <ExpectedPremiere />
      </section>
    </>
  );
};

export default Home;
