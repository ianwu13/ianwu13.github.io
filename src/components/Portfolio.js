import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import "../styles/home.css";
import "../styles/portfolio.css";
import { FilterBar } from "./Filterbar.js"
import { portfolio_intro, portfolio_items, tagSet } from '../content/portfolio_items.js';

const tags_li = (tag) => {
  return <li key={tag}>{tag}</li>;
}

const linksMaker = (links) => {
  if (links[1].startsWith('https://')) {
    return <a href={links[1]}>[{links[0]}]&emsp;</a>;
  } 
  else {
    return <a href={process.env.PUBLIC_URL + '/portfolio/' + links[1]}>[{links[0]}]&emsp;</a>;
  }
}

const PortfolioItem = ({img_pth, title, description, links, tags}) => {
  return (
    <div className="portfolio">
      <div>
        <p className="pf-img-container"><img className="pf-item-img" src={img_pth} alt="Portfolio Item Image"/></p>
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <span className="pf-links">
          {Object.entries(links).map(linksMaker)}
        </span>
        <ol className="tags">{tags.map(tags_li)}</ol>
      </div>
    </div>
  );
}

const makePortfolioItem = (port) => {
  return (
    <PortfolioItem
      key={port.title}
      img_pth={port.img_pth}
      title={port.title}
      description={port.description} 
      links={port.links}
      tags={port.tags}
    />
  );
}

const Portfolio = () => {
  return (
    <div id="portfolio-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">Portfolio</h1>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={50}
      durationInMilliseconds={500}
      >
        <div className='pfolio_intro'>
          {portfolio_intro}
        </div>
        <FilterBar
          filter_section_id={"portfolio-items-div"}
          tagset={tagSet}
        />
        <hr/>
        <div id="portfolio-items-div">
          {portfolio_items.map(makePortfolioItem)}
        </div>
      </FadeIn>
    </div>
  );
}

export default Portfolio;