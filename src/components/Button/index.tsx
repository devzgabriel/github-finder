import React from "react";

import { ButtonSubmit } from "./styles";

interface ButtonInterface {
  children: any;
}

export default function Button({ children }: ButtonInterface) {
  return <ButtonSubmit>{children}</ButtonSubmit>;
}
