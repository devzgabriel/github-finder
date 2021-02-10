import React from "react";

import { ButtonSubmit } from "./styles";

interface ButtonInterface {
  theme: string;
  children: any;
}

export default function Button({ theme, children }: ButtonInterface) {
  return <ButtonSubmit theme={theme}>{children}</ButtonSubmit>;
}
