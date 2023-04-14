import React from "react";
import "./index.css";
import { Mentions } from "antd";
import { useState } from "react";
const MOCK_DATA = {
  "@": [
    "afc163",
    "zombiej",
    "yesmeck",
    "aaaaa",
    "bbbb",
    "dddddd",
    "qwqwqwq",
    "ddfdsfsd",
    "dasasd",
    "asdasdasd",
    "adasda",
    "asasa",
    "aSAsaA"
  ],
  "#": ["1.0", "2.0", "3.0"]
};
const App = () => {
  const [prefix, setPrefix] = useState("@");
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: "100%"
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={["@", "#"]}
      onSearch={onSearch}
      options={(MOCK_DATA[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value
      }))}
    />
  );
};
export default App;
