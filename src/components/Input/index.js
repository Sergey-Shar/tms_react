import React, { memo, useCallback, useState } from "react";
import "./index.css";

const Input = () => {
  const [text, setText] = useState("");

  const onChangeText = useCallback((event) => {
    setText(event.target.value);
  });

  const onClear = useCallback(() => {
    setText("");
  });

  return (
    <div className="wrapper">
      <h3>{`Your text: ${text}`}</h3>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default memo(Input);
