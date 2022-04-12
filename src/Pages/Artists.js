import React from 'react'
import styles from "../Assets/scss/ArtistsPage/ArtistsPage.module.scss";
import searchIcon from "../Assets/images/svg/searchIcon.svg";
import Pagination from "@mui/material/Pagination";

export default function Artists() {
  return (
    <div className="container mt-3">
      <div className={"d-flex flex-column " + styles.artistsMainBody}>
        <div className={"d-flex justify-content-start " + styles.searchBox}>
          <div className={styles.searchDiv}>
            <span>
              <img src={searchIcon} />
            </span>
            <input
              className={styles.searchInput}
              type={"text"}
              placeholder={"Search For Artists "}
            />
          </div>
        </div>
        <div className={"d-flex " + styles.artistsBox}>
          <div className="align-self-end mx-auto mb-3">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
