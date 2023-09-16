import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import "../styles/home.css";
import "../styles/cv_resume.css";
import { cv_intro, cv_icon, cv_pth, cropped_cv_pth } from '../content/cv_info.js';

import { pdfjs, Document, Page } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = process.env.PUBLIC_URL + '/pdf.worker.min.js';
/* // Developement version
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
*/


const PDFRender = ({ div_id, width_px }) => {
  return (
    <div id={div_id}>
      <Document file={cropped_cv_pth}>
        <Page pageNumber={1} width={width_px} />
        <Page pageNumber={2} width={width_px}/>
      </Document>
    </div>
  );
}


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
        <div id='cv-res-items-div'>
          <PDFRender div_id="cv_full" width_px="720"/>
          <PDFRender div_id="cv_medium" width_px="528"/>
          <PDFRender div_id="cv_sm_med" width_px="400"/>
          <PDFRender div_id="cv_small" width_px="320"/>
        </div>
      </FadeIn>
    </div>
  );
}

export default CvResume;