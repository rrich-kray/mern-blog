import decode from "jwt-decode";

class Auth {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  login(token) {
    localStorage.setItem("token", token);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("token");
    window.location.assign("/");
  }
}

export default new Auth();
