import React, { useEffect, useState } from "react";
import DataTable from "../../../shared/AdminPanel/DataTable/DataTable";
import swal from "sweetalert";
import { DeleteUserURL, UsersURL } from "../../../api/apiRoutes";
import axios from "axios";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
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
    console.log(userID);
    const localStorageData = JSON.parse(localStorage.getItem("user"));
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
                  <button type="button" class="btn btn-primary edit-btn">
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
                  <button type="button" class="btn btn-danger delete-btn">
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
