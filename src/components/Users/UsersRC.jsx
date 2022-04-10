import React from "react";
import UserCard from "./UserCard/UserCard";
import s from "./users.module.css";
import Pagination from "../common/Pagination/Pagination";
import { v4 } from "uuid";

class UsersRC extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  getUsers = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
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
                key={v4()}
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
