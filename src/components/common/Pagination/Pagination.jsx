import React from "react";
import s from "./pagination.module.css";
import _ from "lodash";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { v4 } from "uuid";

const pagesRange = (current, last, neighbors = 2) => {
  let range = [];

  for (let i = 0; i <= neighbors; i++) {
    if (current + i >= last - neighbors + 1) {
      break;
    }
    range.push(current + i);
  }

  for (let i = last - neighbors; i <= last; i++) {
    range.push(i);
  }

  return _.uniq(range);
};

const Pagination = (props) => {
  const countOfPages = Math.ceil(props.totalCount / props.pageSize);

  const decreasePage = () => {
    props.onPageChange(Math.max(1, props.currentPage - 1));
  };

  const increasePage = () => {
    props.onPageChange(Math.min(countOfPages, props.currentPage + 1));
  };

  const pageButtons = pagesRange(
    props.currentPage,
    countOfPages,
    props.neighbors
  ).map((v) => {
    return (
      <button
        className={`${s.button} ${props.currentPage === v && s.active}`}
        onClick={() => props.onPageChange(v)}>
        key={v4()}
        {v}
      </button>
    );
  });

  return (
    <div className={s.container}>
      <button
        className={s.button}
        onClick={() => {
          props.onPageChange(1);
        }}>
        First
      </button>
      <button className={s.button} onClick={decreasePage}>
        <AiOutlineArrowLeft />
      </button>
      {pageButtons}
      <button className={s.button} onClick={increasePage}>
        <AiOutlineArrowRight />
      </button>
      <button
        className={s.button}
        onClick={() => {
          props.onPageChange(countOfPages);
        }}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
