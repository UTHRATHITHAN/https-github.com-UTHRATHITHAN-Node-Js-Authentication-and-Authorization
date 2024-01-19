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
import SignUp from "./SignUp";
import Login from "./Login";

export default function FormNext() {
  const [selected, setSelected] = React.useState("login");


  return (
    <div className="flex justify-center   h-screen  items-center  bg-black ">
    <div className="">

      <Card className="bg-neutral-800 text-white max-w-full w-[400px] h-[450px]">
       

        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              
              <Login handleSetSelected={setSelected} />
            </Tab>

            <Tab key="sign-up" title="Sign up">
              <SignUp handleSetSelected={setSelected} />
           
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
    </div>

  );
}
