import React from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./PlayIcon.module.scss";

const PlayIcon = (props) => {
  return (
    <div className={styles.playIcon}>
      <div className={styles.circle}>
        <FaPlay color="inherit" size={24} />
      </div>
      {props.label ? <h3>Play</h3> : ""}
    </div>
  );
};

export default PlayIcon;
