import React, { useEffect, useState } from "react";
import DataTable from "../../../shared/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import { BanUserURL, DeleteUserURL, UsersURL } from "../../../api/apiRoutes";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    axios
      .get(UsersURL, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
  }

  const removeUser = (userID) => {
    swal({
      title: "آیا از حذف مطمعنی؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        axios
          .delete(DeleteUserURL(userID), {
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          })
          .then((res) => {
            swal({
              title: "کاربر با موفقیت حذف شد",
              icon: "success",
              buttons: "اوکی",
            }).then(() => {
              getAllUsers();
            });
          });
      }
    });
  };

  function editUser() {
    console.log("edit user");
  }

  function banUser(id) {
    swal({
      title: "آیا از بن مطمعنی؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      axios
        .put(BanUserURL(id), {
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        })
        .then((res) => {
          swal({
            title: "کاربر با موفقیت بن شد",
            icon: "success",
            buttons: "اوکی",
          });
        });
    });
  }
  return (
    <>
      <DataTable title="کاربران">
        <table class="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>ویرایش</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                {/* <td>09123443243</td> */}
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary edit-btn"
                    onClick={() => editUser(user._id)}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger delete-btn"
                    onClick={() => removeUser(user._id)}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger delete-btn"
                    onClick={() => banUser(user._id)}
                  >
                    بن
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
    </>
  );
}
