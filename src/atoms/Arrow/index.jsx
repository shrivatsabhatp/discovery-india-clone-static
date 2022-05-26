import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cls } from "../../utils";
import styles from "./Arrow.module.scss";

const Arrow = (props) => {
  return (
    <>
      {props.right ? (
        <IoIosArrowForward
          className={cls(styles["arrow"], props.className)}
          color="inherit"
        />
      ) : (
        <IoIosArrowBack
          className={cls(styles["arrow"], props.className)}
          color="inherit"
        />
      )}
    </>
  );
};

export default Arrow;
