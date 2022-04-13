import React from "react";

export default function Footer() {
  return (
    <div className=" container-fluid">
      <footer className="bg-dark text-center text-white">
        <div className=" container-fluid p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-google"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1 border-0"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
// btn btn-primary btn-floating