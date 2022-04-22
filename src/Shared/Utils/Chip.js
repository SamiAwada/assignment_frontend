import React from "react";
import Chip from "@mui/material/Chip";

export default function ArtistsChips(props) {
  return (
    <div className="d-flex flex-wrap">
      {props.searchtexthistory.map((searchText, i) => {
        return (
          <div className="ms-2 my-1" key={"searchText" + i}>
            <Chip label={"" + searchText} clickable />
          </div>
        );
      })}
    </div>
  );
}
