import React, { useState } from "react";
import Staticrail from "../../molecules/StaticRail";
import styles from "./DetailRail.module.scss";
const DetailRail = (props) => {
  const [data] = useState(props.data || []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__inner}>
        <div className={styles.header}>
          <h3>{props.heading || "Shows"}</h3>
          <p>View All</p>
        </div>
        <div className={styles.rail__container}>
          {data.map((show) => (
            <Staticrail
              key={show.title}
              {...show}
              portrait={props.portrait}
              detail={props.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailRail;
