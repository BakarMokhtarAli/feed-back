import React, { useState, useEffect } from "react";
import "../styles/SideBar.css";

export const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        const arrowParent = e.target.parentElement.parentElement; // Selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", (e) => {
          const arrowParent = e.target.parentElement.parentElement; // Selecting main parent of arrow
          arrowParent.classList.toggle("showMenu");
        });
      });
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "" : "close"}`}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">CodingLab</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="bx bx-grid-alt"></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className="bx bx-collection"></i>
                <span className="link_name">Category</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">PHP & MySQL</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className="bx bx-book-alt"></i>
                <span className="link_name">Posts</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Posts
                </a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="link_name">Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-line-chart"></i>
              <span className="link_name">Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i className="bx bx-plug"></i>
                <span className="link_name">Plugins</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#">UI Face</a>
              </li>
              <li>
                <a href="#">Pigments</a>
              </li>
              <li>
                <a href="#">Box Icons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-compass"></i>
              <span className="link_name">Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-history"></i>
              <span className="link_name">History</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="link_name">Setting</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Setting
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <!--<img src="image/profile.jpg" alt="profileImg">--> */}
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={toggleSidebar}></i>
          {/* <span className="text">Drop Down Sidebar</span> */}
        </div>
      </section>

      <div className="one"></div>
    </div>
  );
};
