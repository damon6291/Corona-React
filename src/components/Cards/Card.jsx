import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Card.module.css";
import cx from "classnames";

const Scard = ({ status, value, date, sentence }) => {
  const s = `${status}`;

  const findStyle = () => {
    if (s === "Infected") return styles.infected;
    if (s === "Recovered") return styles.recovered;
    if (s === "Deaths") return styles.deaths;
  };

  return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, findStyle())}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {status}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
        <Typography variant="body2">{sentence}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Scard;
