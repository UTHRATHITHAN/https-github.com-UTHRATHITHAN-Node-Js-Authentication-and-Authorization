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

function SignUp({ handleSetSelected }) {
 
  const [loginLoader, setLoginLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successToaster, setSuccessToaster] = useState(true);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleError = (e) => {
    e.preventDefault();
    if (name !== Number) {
      setNameErr(false);
    }

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
        name,
        email,
        password,
      };
      const response = await fetch("http://localhost:5000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });


      if (response.ok) {
        setSuccessToaster(true);
        toast("Registered Successfully");
        handleSetSelected('login')
       
      }
      const data = await response.json();
      if (!response.ok) {
        setSuccessToaster(true);
        toast("User already exists");
      }
    } finally {
      setLoginLoader(false);
    }
  }

  return (
    <form className="flex flex-col gap-4 h-[300px] text-black mt-2">
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
      <Input
        className={nameErr ? "border-3 border-rose-500 rounded-2xl	" : ""}
        onChange={handleName}
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text"
      />
      <Input
        className={emailErr ? "border-3 border-rose-500 rounded-2xl	" : ""}
        onChange={handleEmail}
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
      <Input
        className={passwordErr ? "border-3 border-rose-500 rounded-2xl	" : ""}
        onChange={handlePassword}
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      {loginLoader ? (
        <Spinner size="sm" className="mt-5" />
      ) : (
        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary" onClick={handleError}>
            Sign up
          </Button>
        </div>
      )}
      <p className="text-center text-small text-white mt-4">
        Already have an account?{" "}
        <Link size="sm" onPress={() => handleSetSelected("login")}>
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignUp;
