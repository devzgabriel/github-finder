import React from "react";

import { TextInput } from "./styles";

interface InputInterface {
  placeholder: string;
  theme: string;
  value: string;
  onChange: any;
}

export default function Input({
  placeholder,
  theme,
  value,
  onChange,
}: InputInterface) {
  return (
    <TextInput
      placeholder={placeholder}
      theme={theme}
      value={value}
      onChange={onChange}
    />
  );
}
