import React from "react";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";
import profilePicture from "../../images/ProfilePicture.png";
import "./Header.css";
interface HeaderProps {
  setOpenModal: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setOpenModal }) => {
  return (
    <>
      <div className="header-container-small">
        <div className="upper-div">
          <div className="logo-cover">
            <img src={logo} alt="Logo" />
            <span className="logo-text">Chirpz</span>
          </div>
          <div className="profile-cover">
            <img
              src={profilePicture}
              alt="profilePicture"
              className="profile-img"
            />
            <span className="username">John Doe</span>
            <img src={hamburger} alt="hamburger" />
          </div>
        </div>
        <div className="lower-div">
          <div className="d-1"></div>
          <div className="d-2">Home</div>
          <div className="d-3">
            <button className="btn-create" onClick={() => setOpenModal(true)}>
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="header-container">
        <div className="logo-cover">
          <img src={logo} alt="Logo" />
          <span className="logo-text">Chirpz</span>
        </div>
        <div className="lower-div">
          <div className="d-1"></div>
          <div className="d-2">Home</div>
          <div className="d-3">
            <button className="btn-create" onClick={() => setOpenModal(true)}>
              Create
            </button>
          </div>
        </div>
        <div className="profile-cover">
          <img
            src={profilePicture}
            alt="profilePicture"
            className="profile-img"
          />
          <span className="username">John Doe</span>
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
    </>
  );
};

export default Header;
