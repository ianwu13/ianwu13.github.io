import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import "../styles/home.css";
import "../styles/cv_resume.css";
import { cv_intro, cv_icon, cv_pth } from '../content/cv_info.js';


const CvResume = () => {
  return (
    <div id="cv-res-div">
      <FadeIn
        durationInMilliseconds={500}
      >
        <h1 className="section-head">CV / Resume
          <a key={cv_pth} className="cvres_icons" href={cv_pth}>
            <i className={cv_icon}></i>
          </a>
        </h1>
      </FadeIn>
      <FadeIn
        from="bottom"
        positionOffset={50}
        durationInMilliseconds={500}
      >
        <div>
          {cv_intro}
        </div>
        <div id="cv-res-items-div">
          <object data={cv_pth} type="application/pdf" width="100%" height="100%">
            <embed src={cv_pth} type="application/pdf" />
          </object>
        </div>
      </FadeIn>
    </div>
  );
}

export default CvResume;