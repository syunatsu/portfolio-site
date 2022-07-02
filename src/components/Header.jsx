import React from 'react';
import CoverImage from '../images/background.jpg';
import ProfileImage from '../images/profile.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
            <h1 className="title-text">大平　裕貴</h1>
            <h3 className="title-text">転職活動中</h3>
            <ul className="social-icons">
              <li className="icon-link">
                <a href="https://google.co.jp">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                <a href="https://google.co.jp">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};