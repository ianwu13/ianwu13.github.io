import React from 'react';
import { FadeIn } from 'react-slide-fade-in';

import "../styles/home.css";
import "../styles/news.css";

import { name, profile_pic, introduction, icons } from '../content/profile_info.js';
import { news_items } from '../content/news_items.js';

const makeNewsItem = (item) => {
  var date = "";
  if ("day" in item) {
    let ordinal = "";
    if (item.day > 3 && item.day < 21) { ordinal = 'th';
    } else if (item.day % 10 === 1) { ordinal = "st";
    } else if (item.day % 10 === 2) { ordinal = "nd";
    } else if (item.day % 10 === 3) { ordinal = "rd";
    } else { ordinal = "th"; }

    date = `${item.month} ${item.day}${ordinal}, ${item.year}`;
  } else if("month" in item) {
    date = `${item.month} ${item.year}`;
  } else {
    date = `${item.year}`;
  }
  return (
    <li>
      <strong>{date} - </strong>{item.description}
    </li>
  );
}

const makeIcon = (icon) => {
  return (
    <a key={icon.link} className={icon.className.includes("ai ai-") ? "icon ai-icon" : "icon"} href={icon.link}>
      <i className={icon.className}></i>
    </a>
  );
}

const Home = () => {
  return (
    <div id="home-div">
      <FadeIn
      durationInMilliseconds={500}
      >
        <h1 className="section-head">About</h1>
      </FadeIn>
      <FadeIn
      from="bottom"
      positionOffset={32}
      durationInMilliseconds={500}
      >
      <div id="intro-div">
        <div id="text-and-icons">
          {introduction}
          <div id="icons">
            {icons.map(makeIcon)}
          </div>
        </div>
        <img id="profile-pic" alt={name} src={profile_pic}/>
      </div>
      </FadeIn>
      <FadeIn
      from="left"
      positionOffset={50}
      durationInMilliseconds={500}
      >
      <h1 className="section-head">News</h1>
      <hr/>
      <ul id="news-list">
        {news_items.map(makeNewsItem)}
      </ul>
      </FadeIn>
      </div>
  );
}

export default Home;