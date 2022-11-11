import styles from "./JobDetail.module.css";
import ArrowButton from "./../../images/left-arrow-button.svg";
import { Link } from "react-router-dom";

export const ReturnButton = (
  <button className={styles.return_button}>
    <Link to="/jobs">
      <img src={ArrowButton} />
      <h6 className={styles.return_button__text}>RETURN TO JOB BOARD</h6>
    </Link>
  </button>
);
