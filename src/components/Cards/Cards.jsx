import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Scard from "./Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Scard
          status="Infected"
          value={confirmed.value}
          date={lastUpdate}
          sentence="Number of active cases of COVID-19."
        />
        <Scard
          status="Recovered"
          value={recovered.value}
          date={lastUpdate}
          sentence="Number of recoveries from COVID-19."
        />
        <Scard
          status="Deaths"
          value={deaths.value}
          date={lastUpdate}
          sentence="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;
