"use client";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState();

  const formData = new FormData();
  formData.append("LoginForm[username]", "superadmin");
  formData.append("LoginForm[password]", "Fabinho@#321!");
  formData.append(
    "_csrf",
    "wjbWznY95QNmDKejWi-KS_Lrya3KwCPmvLVlILjaayPyWYeHAw6jZ0s_ltYsXb4nh4Of7JO6R4vW2xJI3OpcZw=="
  );

  const signIn = () => {
    fetch(
      "http://localhost/scm_upgrade/basic/web/index.php?r=user-management%2Fauth%2Flogin",
      {
        method: "POST",
        body: formData,
      }
    );
  };
  const python = () => {
    fetch("/api/square/6")
      .then((res) => res.text())
      .then((data) => console.log(data));
  };
  const fetchAutomationJobsIndex = () => {
    fetch(
      "http://localhost/scm_upgrade/basic/web/index.php?r=automation%2Fautomation-config%2Fview-job-log&job_name=MasterVulExpJob",
      {}
    )
      .then((res) => res.text())
      .then((data) => (document.querySelector("#render").innerHTML = data));
  };

  return (
    <div className="container px-20 mt-3">
      <button
        onClick={python}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Python Fetch
      </button>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={signIn}
      >
        Login
      </button>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={fetchAutomationJobsIndex}
      >
        fetchAutomationJobsIndex
      </button>
      <div id="render" className="mt-10"></div>
    </div>
  );
};

export default Login;
