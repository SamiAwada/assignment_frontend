import React, { useState } from "react";
import styles from "../Assets/scss/ArtistsPage/ArtistsPage.module.scss";
import searchIcon from "../Assets/images/svg/searchIcon.svg";
import Pagination from "@mui/material/Pagination";
import { useDebouncedCallback } from "use-debounce";
import Divider from "../Shared/Utils/Divider";
import Cards from "../Shared/components/Cards/Cards";

const demoData = [
  {
    userName: "Ahmad Hamdan",
    Talent: "paino",
    phoneNumber: "+961 71542313",
  },
  {
    userName: "Khalil Tadara",
    Talent: "Guitarist",
    phoneNumber: "+961 71542313",
  },
  {
    userName: "Jackson Berten",
    Talent: "Singer",
    phoneNumber: "+961 71542313",
  },
];

export default function Artists() {
  const [artistsList, setartistsList] = useState(null);

  const handleSearch = useDebouncedCallback(
    // function
    (value) => {
      console.log(value);
      if (!value) {
        setartistsList(null);
      } else {
        setartistsList(demoData);
      }
    },
    // delay in ms
    500
  );
  return (
    <div className="container mt-3">
      <div className={"d-flex flex-column " + styles.artistsMainBody}>
        <div className={"d-flex justify-content-start " + styles.searchBox}>
          <div className={styles.searchDiv}>
            <span>
              <img src={searchIcon} alt="searchbar Icon" />
            </span>
            <input
              className={styles.searchInput}
              type={"text"}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={"Search For Artists "}
            />
          </div>
        </div>
        <div className={"d-flex flex-column  " + styles.artistsBox}>
          <div className={"" + styles.artistHeadBox}>
            <div className="ms-4 my-2">
              <h4>Artists Details</h4>
            </div>
            <Divider />
          </div>
          <div className={"d-flex flex-column flex-grow-1 mt-3"}>
            {artistsList ? (
              <div className={"" + styles.cardsContainer}>
                <Cards cardsList={artistsList} />
              </div>
            ) : (
              <div className={"" + styles.noCardsContainer}>
                <h5>Just Search For an Artist</h5>
              </div>
            )}
          </div>
          <div className="justify-self-end mx-auto mb-3">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
