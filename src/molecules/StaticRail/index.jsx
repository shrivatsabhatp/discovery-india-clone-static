import React from "react";
import Card from "../../atoms/Card";
import PlayIcon from "../../atoms/PlayIcon";
import { cls } from "../../utils";
import styles from "./StaticRail.module.scss";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Staticrail = (props) => {
  return (
    <div
      className={cls(
        styles.staticCard,
        props.portrait && styles.portrait,
        props.detail && styles.withMeta
      )}
    >
      <Card
        src={props.img}
        isNewEpisode={props.isNewEpisode}
        isPremium={props.isPremium}
        className={cls(styles.card, props.portrait && styles.portrait)}
      ></Card>
      {!props.detail && (
        <div className={styles.detail}>
          <div className={styles.PlayIcon}>
            <PlayIcon />
          </div>
          <div className={styles.meta}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          {props.isFav ? (
            <BsHeartFill className={styles.heart} />
          ) : (
            <BsHeart className={styles.heart} />
          )}
        </div>
      )}
      {props.detail ? (
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Staticrail;
