import React from "react";
import { cls } from "../../utils";
import Badge from "../Badge";
import Crown from "../Crown";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={cls(styles.card, props.className)}>
      {props.isPremium ? (
        <div className={styles.crown}>
          <Crown />
        </div>
      ) : null}
      <img src={props.src} />
      {props.isNewEpisode ? (
        <div className={styles.badge}>
          <Badge isNewEpisode />
        </div>
      ) : null}
      {props.children}
    </div>
  );
};

export default Card;
