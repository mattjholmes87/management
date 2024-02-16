import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    const { name, type, prefix, placeholder } = this.props;

    return (
      <div className="formBox">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ padding: "5px" }}>
            <label
              htmlFor={name}
              style={{
                padding: "3px",
                fontSize: "1.2rem",
              }}
            >
              {prefix}: &nbsp;&nbsp;{" "}
              <input
                placeholder={placeholder ? placeholder : ""}
                type={type ? type : "text"}
                id={name}
                name={name}
                style={{
                  border: "solid 1px ",
                  borderRadius: "2px",
                  padding: "3px",
                  color: "black",
                  fontSize: "1.2rem",
                  width: "60%",
                }}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
