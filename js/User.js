// file ini digunakan untuk mengurus business logic
// file ini digunakan untuk mengolah data seperti CRUD

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    // return window.location.href = '../signin.html';

    return {
      success: true,
    };
  }

  //proses pengembalian data user yang sudah disimpan ke signin.js
  signInUser(usernameByInput) {
    // pengecekan apakah username yang dimasukkan ada di localStorage
    const userExist = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase(),
    );

    if (userExist) {
      return {
        success: true,
        message: "User found",
        username,
      };
    } else {
      return {
        success: false,
        message: "User not found",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
