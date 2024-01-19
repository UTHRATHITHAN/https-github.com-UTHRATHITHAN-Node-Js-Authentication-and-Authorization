import React from "react";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

function Login({ handleSetSelected }) {
  const [loginLoader, setLoginLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successToaster, setSuccessToaster] = useState(true);
  const [emailerr, setEmailErr] = useState(false);
  const [passworderr, setPasswordErr] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleError = (e) => {
    e.preventDefault();

    if (email.length > 10 && email.includes("@") && email.includes(".com")) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }

    if (password.length < 20 && password.length > 8) {
      setPasswordErr(false);
      handleClick();
    } else {
      setPasswordErr(true);
    }
  };

  async function handleClick() {
    try {
      setLoginLoader(!loginLoader);
      const postData = {
        email,
        password,
      };
      console.log(postData);
      const response = await fetch("http://localhost:5000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
        credentials : 'include'
      });

 
      if (response.ok) {
        setSuccessToaster(true);
        toast("Logined Successfully");
      }

      const data = await response.json();
      if (!response.ok) {
        setSuccessToaster(true);

        toast("Enter the correct Credentials");
      }
    } finally {
      setLoginLoader(false);
    }
  }

  return (
    <div>
      {successToaster && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
      <form className="flex flex-col gap-4 mt-2  text-black">
        <Input
          className={emailerr ? "border-3 border-rose-500 rounded-2xl	" : ""}
          onChange={handleEmail}
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        {emailerr && (
          <span className="text-xs text-red-500	">
            Enter the email correctly
          </span>
        )}
        <Input
          className={passworderr ? "border-3 border-rose-500 rounded-2xl	" : ""}
          onChange={handlePassword}
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        {passworderr && (
          <span className="text-xs text-red-500	">
            Enter the Password correctly
          </span>
        )}
        {loginLoader ? (
          <Spinner size="sm" className="mt-5" />
        ) : (
          <div className="flex gap-2 justify-end">
            <Button fullWidth color="primary" onClick={handleError}>
              Login
            </Button>
          </div>
        )}

        <p className="text-center text-small mt-4 text-white">
          Need to create an account?{" "}
          <Link size="sm" onPress={() => handleSetSelected("sign-up")}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
