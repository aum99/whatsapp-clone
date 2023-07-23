import React, { Fragment } from "react";
import { Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  return (
    <Fragment>
      <Input label="First name" icon="user" iconSize={24} iconPack={Feather} />
      <Input label="Last name" icon="user" iconSize={24} iconPack={Feather} />
      <Input label="Email" icon="mail" iconSize={24} iconPack={Feather} />
      <Input label="Password" icon="lock" iconSize={24} iconPack={Feather} />
      <SubmitButton
        title="Sign up"
        onPress={() => console.log("Pressed sign up")}
        style={{ marginTop: 20 }}
      />
    </Fragment>
  );
};

export default SignUpForm;
