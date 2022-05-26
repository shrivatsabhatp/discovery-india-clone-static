import React, { useRef, useState } from "react";
import Railcard from "../../molecules/RailCard";
import styles from "./Rail.module.scss";
import Arrow from "../../atoms/Arrow";
import { cls } from "../../utils";
const Rail = (props) => {
  const styleRef = useRef(null);
  const [data] = useState(props.data || []);

  return (
    <div className={styles.rail__wrap}>
      <div className={styles.rail}>
        <div
          className={cls(styles.arrow, styles["arrow--left"])}
          onClick={() => {
            styleRef.current.style.transform = `translateX(0px)`;
          }}
        >
          <Arrow />
        </div>
        <div className={styles.rail__inner}>
          <div className={styles.rail__inner__items} ref={styleRef}>
            {data.map((item, i) => (
              <Railcard img={item.meta.img} {...item} />
            ))}
          </div>
        </div>
        <div
          className={cls(styles.arrow, styles["arrow--right"])}
          onClick={() => {
            styleRef.current.style.transform = `translateX(-880px)`;
          }}
        >
          <Arrow right />
        </div>
      </div>
    </div>
  );
};

export default Rail;
