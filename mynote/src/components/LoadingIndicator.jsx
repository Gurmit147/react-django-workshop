import React from "react";
import "../styles/LoadingIndicator.css";

const LoadingIndicator = () => {
    return React.createElement(
        "div",
        { className: "loading-container" },
        React.createElement("div", { className: "loader" })
    );
};

export default LoadingIndicator;