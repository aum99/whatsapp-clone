import React, { Fragment } from "react";
import { Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignInForm = () => {
  return (
    <Fragment>
      <Input label="Email" icon="mail" iconSize={24} iconPack={Feather} />
      <Input label="Password" icon="lock" iconSize={24} iconPack={Feather} />
      <SubmitButton
        title="Sign in"
        onPress={() => console.log("Pressed sign in")}
        style={{ marginTop: 20 }}
      />
    </Fragment>
  );
};

export default SignInForm;
