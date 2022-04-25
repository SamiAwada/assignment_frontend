import React, { useState, useEffect } from "react";
import styles from "../Assets/scss/HistoryPage/HistoryPage.module.scss";
import searchIcon from "../Assets/images/svg/searchIcon.svg";
import musicIcon from "../Assets/images/svg/musicSpin.svg";
import Pagination from "@mui/material/Pagination";
import Divider from "../Shared/Utils/Divider";
import Cards from "../Shared/components/Cards/Cards";
import ArtistsChips from "../Shared/Utils/Chip";
import { useDebounce } from "use-debounce";
import axios from "../axios-instance";

export default function History() {
  const [artistsList, setartistsList] = useState(null);
  const [pageValue, setPageValue] = useState(1);
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useDebounce(text, 600);
  const [searchTextHistory, setSearchTextHistory] = useState(null);
  const [recentSearches, setRecentSearches] = useState(null);

  useEffect(
    () => {
      const pageV = pageValue - 1;
      if (!searchText) {
        setartistsList(null);
        setSearchTextHistory(null);
      } else {
        axios
          .get(
            "/artists/uniquesearches?searchText=" +
              searchText +
              "&pagevalue=" +
              pageV
          )
          .then((res) => {
            if (res.data[0].searches) {
              setSearchTextHistory(res.data[0].searches);
              setartistsList(res.data[0].artists);
              setCount(Math.floor(res.data[0].artistsnb / 5));
            } else {
              alert("Something Went Wrong! \n " + res.data);
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText, pageValue]
  );
  useEffect(() => {
    axios
      .get("/artists/searches")
      .then((res) => {
        if (res.data.error_msg) {
          alert(res.data.error_msg);
        } else setRecentSearches(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const handleResetSearches = () => {
    setSearchTextHistory(recentSearches);
  };
  const handleClickedChip = (e) => {
    setText(e);
  };
  return (
    <div className="container mt-3">
      <div className={"d-flex flex-column " + styles.artistsMainBody}>
        <div className="d-flex justify-content-between  ">
          <div className={"d-flex justify-content-start " + styles.searchBox}>
            <div className={styles.searchDiv}>
              <span>
                <img src={searchIcon} alt="searchbar Icon" />
              </span>
              <input
                className={styles.searchInput}
                type={"text"}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={"Search For Artists "}
              />
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary b1"
              onClick={handleResetSearches}
            >
              Reset Searches
            </button>
          </div>
        </div>
        <div className={"d-flex flex-column  " + styles.artistsBox}>
          <div className={"" + styles.artistHeadBox}>
            <div className="ms-4 my-2">
              <h4>Search History</h4>
            </div>
            <Divider />
          </div>
          <div className="mt-2 ms-3">
            {searchTextHistory ? (
              <ArtistsChips
                searchtexthistory={searchTextHistory}
                clickedchip={handleClickedChip}
              />
            ) : null}
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
              onChange={(event, newPage) => setPageValue(newPage)}
              disabled={count === 1 ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
