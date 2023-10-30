import React from "react";

function Topbar() {

    return (
      <>
        <header>
          <nav>
            <ul>
              <div id="header">
                <div className="logoandcategories">
                  <div className="logo">
                    <li>
                      <a href="#">EDYODA</a>
                    </li>
                    <p className="stories">
                      <i>stories</i>
                    </p>
                  </div>
                  <div className="explore">
                    <li>
                      Explore categories<i className="fa fa-chevron-down"></i>
                    </li>
                  </div>
                </div>
                <div className="buttonandtext">
                  <p className="head">
                    EdYoda is a learning and knowledge
                    <br />
                    sharing platform for techies
                  </p>
                  <button className="goto"> Go To Main Website </button>
                </div>
              </div>
            </ul>
          </nav>
        </header>
      </>
    );
  }


export default Topbar;
