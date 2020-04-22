import React from "react";
import { Spring } from "react-spring/renderprops.cjs";

export default function MainPage(props) {
  const { login } = props.auth;
  return (
    <>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 3000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={animationStyle}>
              EXEPERIENCE YOUR MUSIC
              <br />
              ANYWHERE. ANYTIME.
              <br />
              <button onClick={login}>START NOW</button>
            </div>
          </div>
        )}
      </Spring>
    </>
  );
}

const animationStyle = {
  fontSize: "300%",
  textAlign: "center",
  color: "#ffffff",
  padding: "0.25vh 0",
  height: "30vh",
  top: "30vh",
  position: "relative",
};
