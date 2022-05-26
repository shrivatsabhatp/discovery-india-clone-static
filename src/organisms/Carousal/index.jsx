import React, { useEffect, useRef, useState } from "react";
import Card from "../../atoms/Card";
import CaroselMeta from "../CaroselMeta";
import styles from "./Carousal.module.scss";
import { cls } from "../../utils";
import { useEffectOnce } from "../../utils/useEffectOnce";
import Arrow from "../../atoms/Arrow";

const Carousal = (props) => {
  const styleRef = useRef(null);
  const [data] = useState(() => {
    if (!Array.isArray(props.data)) return [];
    return props.data;
  });
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (styleRef.current) {
      styleRef.current.style.transform = `translateX(${activeIdx * 100}%)`;
      styleRef.current.style.transition = `transform 400ms ease`;
    }
  }, [activeIdx]);

  const prevClick = () => {
    setActiveIdx((prev) => {
      const newIdx = (prev - data.length + 1) % data.length;
      return newIdx;
    });
  };

  const nextClick = () => {
    setActiveIdx((prev) => {
      const newIdx = (prev - 1) % data.length;
      return newIdx;
    });
  };

  useEffectOnce(() => {
    setInterval(nextClick, 5000);
  }, []);

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel__wrap}>
        <button
          className={cls(styles.carousel__btn, styles["carousel__btn--left"])}
          onClick={prevClick}
        >
          <Arrow left />
        </button>
        <div className={styles.carousel__container}>
          <ul className={styles.carousel__slide} ref={styleRef}>
            {data.map((item, idx) => (
              <CarouselSlideItem
                data={data}
                pos={item}
                activeIdx={idx}
                {...item}
                key={item.id}
              />
            ))}
          </ul>
        </div>
        <button
          className={cls(styles.carousel__btn, styles["carousel__btn--right"])}
          onClick={nextClick}
        >
          <Arrow right />
        </button>
        <div className={styles.indicator}>
          {data.map((_, i) => (
            <div
              className={cls(
                styles.position,
                Math.abs(activeIdx) === i && styles.active
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CarouselSlideItem = ({ data, pos, idx, activeIdx, ...props }) => {
  return (
    <li className={styles.slider}>
      <div className={styles["slider--meta"]}>
        <CaroselMeta badges={props.meta.badge} {...props} />
      </div>
      <div className={styles["slider--image"]}>
        <Card
          src={props.meta.img}
          isPremium={props.isPremium}
          isNewEpisode={props.isNewEpisode}
        />
      </div>
    </li>
  );
};

export default Carousal;
