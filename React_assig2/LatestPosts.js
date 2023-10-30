import React from "react";
import "./LatestPosts.css";

class LatestPosts extends React.Component {
  render() {
    return (
      <>
        <section id="main">
          <div className="latest">
            <div className="heading">
              <h1>Latest Posts</h1>
            </div>
            <div className="filter">
              <a href="#">
                <i className="fa fa-filter"></i>
              </a>
              <span>Filter by Category</span>
            </div>
          </div>
          <div className="categories">
            <button
              className="categorie-items active"
              id="1"
            >
              All
            </button>
            <button
              className="categorie-items"        
              id="2"
            >
              Artificial Intelligence
            </button>
            <button
              className="categorie-items"              
              id="3"
            >
              Cloud Computing
            </button>
            <button
              className="categorie-items" 
              id="4"
            >
              Devops
            </button>
            <button
              className="categorie-items"
              id="5"
            >
              Programming Languages
            </button>
            <button
              className="categorie-items"
              id="6"
            >
              Mobile Application Development
            </button>
            <button
              className="categorie-items"
              id="7"
            >
              Technology and Tools
            </button>
            <button
              className="categorie-items"
              id="8"
            >
              Get a Job in a Tech Company
            </button>
            <button
              className="categorie-items"
              id="9"
            >
              Others
            </button>
          </div>
        </section>
        <br />
        <section />
      </>
    );
  }
}

export default LatestPosts;
