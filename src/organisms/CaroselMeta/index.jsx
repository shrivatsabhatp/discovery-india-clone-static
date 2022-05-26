import React from "react";
import Badge from "../../atoms/Badge";
import PlayIcon from "../../atoms/PlayIcon";
import styles from "./CaroselMeta.module.scss";

const CaroselMeta = (props) => {
  return (
    <div className={styles.CaroselMeta}>
      <h1>{props.title || "Heading"}</h1>
      <p>{props.description || "description"}</p>
      <div className={styles.badge__container}>
        {((Array.isArray(props.badges) && [...props.badges]) || []).map(
          (label) => (
            <Badge key={label}>{label}</Badge>
          )
        )}
      </div>
      <PlayIcon label />
    </div>
  );
};

export default CaroselMeta;
