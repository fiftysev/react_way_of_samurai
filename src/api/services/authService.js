import { $api } from "../api-instance";

export class AuthService {
  static aboutMe() {
    return $api.get("/auth/me").then((res) => res.data);
  }
}
