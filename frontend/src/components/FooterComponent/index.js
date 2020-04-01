import React from "react";

const FooterComponent = () => (
  <footer>
    <section className="footer-contents">
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-6 col-sm-12">
            <p className="copyright-text">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-right">
            <div className="footer-nav">
              <nav>
                <ul>
                  <li><a href="/">@vermarhitu</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default FooterComponent;
