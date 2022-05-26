import React from "react";
import { cls } from "../../utils";
import styles from "./Badge.module.scss";

const Badge = (props) => {
  return (
    <div
      className={cls(
        styles.badge,
        props.isNewEpisode ? styles.badge__episode : ""
      )}
    >
      {props.isNewEpisode ? "New Episodes" : props.children}
    </div>
  );
};

export default Badge;
