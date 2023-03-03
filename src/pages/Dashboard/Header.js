import React from "react";
import { Image } from "react-bootstrap";

const Header = () => {
  return (
    <div id="header">
      <div className="header-nav">
        <div className="nav">
          <ul>
            <li className="nav-settings">
              <div className="font-icon">
                <i className="fa fa-bell-o"></i>
              </div>
            </li>
            <li className="nav-settings">
              <div className="font-icon">Upgrade Plan</div>
            </li>
            <li className="nav-profile">
              <div className="nav-profile-image">
                <Image src="/images/Rectangle 1899.png" alt="" />
                <div className="nav-profile-name">
                  AR Jakir <i className="fa fa-caret-down"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
