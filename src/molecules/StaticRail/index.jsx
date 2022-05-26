import React from "react";
import Card from "../../atoms/Card";
import { cls } from "../../utils";
import styles from "./StaticRail.module.scss";

const Staticrail = (props) => {
  return (
    <>
      <Card
        src={props.img}
        isNewEpisode={props.isNewEpisode}
        isPremium={props.isPremium}
        className={cls(styles.card, props.portrait && styles.portrait)}
      >
        <p className={styles.title}>{props.title}title</p>
      </Card>
    </>
  );
};

export default Staticrail;
