import React, { useState, useEffect } from "react";
import { ReactComponent as BookmarkSVG } from "../images/bookmark.svg";
import "./../components/JobDetail/JobDetail.module.css";

const Bookmark = (id) => {
  const [BookmarkState, setBookmarkState] = useState(false);

  const BookmarkHandler = () => {
    setBookmarkState((BookmarkState) => !BookmarkState);
  };
  useEffect(() => {
    const data1 = localStorage.getItem("bookmark" + JSON.stringify(id));
    if (data1) setBookmarkState(JSON.parse(data1));
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "bookmark" + JSON.stringify(id),
      JSON.stringify(BookmarkState)
    );
  }, [BookmarkState]);

  return (
    <>
      {BookmarkState ? (
        <BookmarkSVG
          onClick={BookmarkHandler}
          fill="#70778B"
          className="cursor-pointer"
        />
      ) : (
        <BookmarkSVG
          onClick={BookmarkHandler}
          fill="white"
          className="cursor-pointer"
        />
      )}
    </>
  );
};
export default Bookmark;
