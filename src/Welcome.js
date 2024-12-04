import React from "react";
import "./css/Welcome.css";
function Welcome() {
  return (
    <div className="welcome-container">
      <h2>Hello, welcome to Maynooth Parking Service!</h2>
      <div>
      <a href="/map">🚗Map Mode🔄️</a>
      </div>
    </div>
  );
}

export default Welcome;
