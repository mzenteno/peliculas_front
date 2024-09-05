import React, { useState, useEffect } from "react";
import MostSeen from "@components/home/MostSeen";
import Premiere from "@components/home/Premiere";
import ExpectedPremiere from "@components/home/ExpectedPremiere";
import Loading from "@components/utils/Loading";
import styles from "@components/home/Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mostSeenLoaded, setMostSeenLoaded] = useState(false);
  const [premiereLoaded, setPremiereLoaded] = useState(false);
  const [expectedPremiereLoaded, setExpectedPremiereLoaded] = useState(false);

  useEffect(() => {
    if (mostSeenLoaded && premiereLoaded && expectedPremiereLoaded) {
      setLoading(false);
      console.log(loading);
    }
  }, [mostSeenLoaded, premiereLoaded, expectedPremiereLoaded]);

  return (
    <>
      {loading && <Loading />}
      <section className={styles.home}>
        <MostSeen setLoaded={setMostSeenLoaded} />
        <Premiere setLoaded={setPremiereLoaded} />
        <ExpectedPremiere setLoaded={setExpectedPremiereLoaded} />
      </section>
    </>
  );
};

export default Home;
