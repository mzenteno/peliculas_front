import React from "react";
import MostSeen from "@components/home/MostSeen";
import styles from "@components/home/Home.module.css";

const Movies = () => {
  return (
    <>
      <section className={styles.home}>
        <MostSeen />
        {/*         <Premiere />
        <ExpectedPremiere /> */}
      </section>
    </>
  );
};

export default Movies;
