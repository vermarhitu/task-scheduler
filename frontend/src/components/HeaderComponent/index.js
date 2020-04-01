import React from "react";

const HeaderComponent = () => (
  <header className="main-header clearfix" data-sticky_header="true">
    <div className="top-bar clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <p>Welcome to new generation scheduler app</p>
          </div>
          <div className="col-md-4col-sm-12">
            <div className="top-bar-social">
              <a href="/"><i className="fa fa-facebook" /></a>
              <a href="/"><i className="fa fa-twitter" /></a>
              <a href="/"><i className="fa fa-google-plus" /></a>
              <a href="/"><i className="fa fa-instagram" /></a>
              <a href="/"><i className="fa fa-youtube" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrapper">
      <section className="header-wrapper navgiation-wrapper">
        <div className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="logo" href="/">
                <img alt="" src="images/logo.png" />
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/" >Add task</a></li>
                <li><a href="/list" >Tasks List</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
);

export default HeaderComponent;
