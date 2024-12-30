import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import photo from '../assets/images/photo.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
      		<img src={photo} alt="" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mtd8899" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/mikedenum" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mike Denum</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mtd8899" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mikedenum/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;