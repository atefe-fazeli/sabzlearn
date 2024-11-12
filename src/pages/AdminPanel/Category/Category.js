import React, { useEffect, useState } from "react";
import DataTable from "../../../shared/AdminPanel/DataTable/DataTable";
import { AllCategoryURL } from "../../../api/apiRoutes";
import axios from "axios";

export default function AdminCategory() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
  }, []);

  function getAllCategories() {
    axios.get(AllCategoryURL)
      .then((res) => {
        setCategories(res.data);
      });
  }

  return (
    <>
      <DataTable title="دسته‌بندی‌ها">
        <table class="table">
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.title}</td>
                <td>
                  <button type="button" class="btn btn-primary edit-btn">
                    ویرایش
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger delete-btn">
                    حذف
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
