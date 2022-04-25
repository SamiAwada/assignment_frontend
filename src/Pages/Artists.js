import React, { useEffect, useState } from "react";
import styles from "../Assets/scss/ArtistsPage/ArtistsPage.module.scss";
import searchIcon from "../Assets/images/svg/searchIcon.svg";
import Pagination from "@mui/material/Pagination";
import { useDebounce } from "use-debounce";
import Divider from "../Shared/Utils/Divider";
import Cards from "../Shared/components/Cards/Cards";
import axios from "../axios-instance";
import musicIcon from "../Assets/images/svg/musicSpin.svg";

export default function Artists() {
  const [artistsList, setartistsList] = useState(null);
  const [pageValue, setPageValue] = useState(1);
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [searchText] = useDebounce(text, 600);

  useEffect(
    () => {
      const pageV = pageValue === 1 ? 0 : pageValue;
      if (!searchText) {
        setartistsList(null);
      } else {
        axios
          .get("/artists?searchText=" + searchText + "&PageValue=" + pageV)
          .then((res) => {
            if (res.data.artists) {
              setartistsList(res.data.artists);
              setCount(Math.floor(res.data.total / 5));
            } else {
              const err = res.data;
              if (err.error.code)
                alert(
                  err.error_msg + `\n` + err.error.code + `\n` + err.error.input
                );
              else alert(err.error_msg + `\n` + err.error);
            }
          })
          .catch((err) => {
            alert("Something Went Wrong! \n can't get artists");
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText, pageValue]
  );

  const handlePageChange = (event, newPage) => {
    setPageValue(newPage);
  };
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
              onChange={(e) => setText(e.target.value)}
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
                <div className={"" + styles.imgCont}>
                  <img
                    src={musicIcon}
                    className={styles.waitlogo}
                    alt="musicIcon"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="justify-self-end mx-auto mb-3">
            <Pagination
              count={count}
              defaultPage={1}
              page={pageValue}
              onChange={handlePageChange}
              disabled={count === 1 ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
