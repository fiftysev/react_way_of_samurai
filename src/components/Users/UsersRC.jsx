import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./users.module.css";
import axios from "axios";
import Pagination from "../common/Pagination/Pagination";

class UsersRC extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((r) => {
        this.props.setUsers(r.data.items);
        this.props.setTotalCount(r.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  getUsers = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((r) => {
        this.props.setUsers(r.data.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <Pagination
          totalCount={this.props.totalCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          neighbors={4}
          onPageChange={this.getUsers}
        />
        {this.props.isFetching && <div className={s.loader} />}
        <div className={s.container}>
          {this.props.users.map((user) => {
            return (
              <UserCard
                user={user}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersRC;
