import { $api } from "../api-instance";
import axios from "axios";

export class UserService {
  static getUsers(currentPage = 1, pageSize = 12) {
    return $api
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  }

  static follow(userId = 1) {
    return $api.post(`/follow/${userId}`).then((res) => res.data);
  }

  static unfollow(userId = 1) {
    return $api.delete(`/follow/${userId}`).then((res) => res.data);
  }

  static getProfile(userId) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  }
}
