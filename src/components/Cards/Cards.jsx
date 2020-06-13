import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading';
  }
  let recoverdCase = recovered.value;
  let totalConfirmedCase = confirmed.value;
  let totaldeath = deaths.value;
  const avgRecoveredCase = () => {
    let avgRecover = Math.round((recoverdCase / totalConfirmedCase) * 100);
    return avgRecover;
  };
  const avgDeathCase = () => {
    let avgDeath = Math.round((totaldeath / totalConfirmedCase) * 100);
    return avgDeath;
  };
  const LastUpdateCase = () => {
    let updateCase = new Date(lastUpdate).toDateString();
    return updateCase;
  };
  
  return (
    <div className={styles.container}>
      <Grid
        container
        className={styles.updateGrid}
        spacing={3}
        justify='center'
      >
        <Typography className={styles.updateTime}>
          {`Last Update:${LastUpdateCase()}`}
        </Typography>
      </Grid>

      <br />
      <br />
      <br />

      <Grid container>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography className={styles.confirmedCase} gutterBottom>
              Confirmed Cases
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator={','}
              />
            </Typography>

            <Typography variant='body2'>
              Number of <b>active cases</b> of COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography className={styles.recoverdCase} gutterBottom>
              Recovers
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator={','}
              />
            </Typography>

            <Typography variant='body2'>
              Number of <b>recovery cases</b> from COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography className={styles.deathCase} gutterBottom>
              Death
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator={','}
              />
            </Typography>

            <Typography variant='body2'>
              Number of <b>average death cases</b> due to COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography className={styles.recoverdCase} gutterBottom>
              Average Recovered Rate
            </Typography>
            <Typography variant='h5'>{`${avgRecoveredCase()}%`}</Typography>

            <Typography variant='body2'>
              Number of <b>average recovered cases</b> from COVID 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography className={styles.deathCase} gutterBottom>
              Average Death Rate
            </Typography>
            <Typography variant='h5'>{`${avgDeathCase()}%`}</Typography>

            <Typography variant='body2'>
              Number of <b>average death cases</b> due to COVID 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};


export default Cards;
