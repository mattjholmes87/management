import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    const { name, type, prefix, placeholder } = this.props;

    return (
      <div className="formBox">
        <div style={{ padding: "5px" }}>
          <label
            htmlFor={name}
            style={{
              padding: "3px",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            {prefix}: &nbsp;&nbsp;{" "}
            <input
              placeholder={placeholder ? placeholder : ""}
              type={type ? type : "text"}
              name={name}
              style={{
                border: "solid 0px ",
                borderRadius: "3px",
                padding: "3px",
                color: "black",
                fontSize: "1.2rem",
                width: "60%",
              }}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Input;
