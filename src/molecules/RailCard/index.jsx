import React from "react";
import Card from "../../atoms/Card";
import styles from "./Railcard.module.scss";

const Railcard = (props) => {
  return (
    <>
      <Card
        src={props.img}
        isNewEpisode={props.isNewEpisode}
        isPremium={props.isPremium}
        className={styles.railCard}
      >
        <p className={styles.title}>{props.title}</p>
      </Card>
    </>
  );
};

export default Railcard;
