import { useState } from "react";

export default function FormInput({ label, ...inputProps }) {
  const [focused, setFocused] = useState(false);
  console.log(focused);
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        {...inputProps}
        focused={focused.toString()}
        onBlur={() => setFocused(true)}
      />
      <span className="input-form-error" style={{ color: "red" }}>
        Error
      </span>
    </div>
  );
}
