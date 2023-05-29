import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import "../styles/research.css";
import { pub_entries } from '../content/pub_entries.js';

const Publication = ({year, title, author_span, location, pdf, doi, code}) => {
  return (
    <div className="publication">
      <div>
        <p className="year">{year}</p>
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="authors">{author_span}</p>
        <p className="location">{location}</p>
        <span className="links">
          {pdf ? <a href={process.env.PUBLIC_URL + '/research/' + pdf}>PDF&emsp;</a> : ""}
          {doi ? <a href={doi}>DOI&emsp;</a> : ""}
          {code ? <a href={code}>CODE&emsp;</a> : ""}
        </span>
      </div>
    </div>
  );
}

const makePub = (pub) => {
  return (
    <Publication
      key={pub.title}
      year={pub.year}
      title={pub.title}
      author_span={pub.author_span}
      location={pub.location} 
      pdf={pub.pdf}
      doi={pub.doi}
      code={pub.code}
    />
  );
}

const makePubSection = (pub_section) => {
  return (
    <div key={pub_section[0]}>
      <h2>{pub_section[0]}</h2>
      {pub_section[1].map(makePub)}
    </div>
  );
}

const Research = () => {
  return (
    <div id="research-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">Research</h1>
        <p className="subtitle"><sup>&dagger;</sup>denotes equal authorship.</p>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <div>
        {pub_entries.map(makePubSection)}
      </div>
      </FadeIn>
    </div>
  );
}

export default Research;