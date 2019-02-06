import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle} className="footer">
        <div className="m-3">
          <span className="text-muted">
            Made with{" "}
            <span role="img" aria-label="footer-heart-emoji">
              🖤
            </span>{" "}
            by <a href="https://twitter.com/sunstrous">Sunstro</a>.{" "}
          </span>
        </div>
      </footer>
    );
  }
}

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#F8F9FA",
  textAlign: "right"
};

export default Footer;
