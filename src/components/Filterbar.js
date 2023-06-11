import React from 'react';
import "../styles/buttons.css"

import { FadeIn } from 'react-slide-fade-in';
// TODO: MAYBE ALSO IMPORT CSS FOR FILTERBAR??

export class FilterBar extends React.Component {
  constructor(filter_section_id, tagset) {
    super();
    this.filter_section_id = filter_section_id
    this.tagset = tagset

    
  }
    
  main_btn_click(e) {
    if (e.textContent === "Clear Filters") {
      e.textContent = "Filter By Tag"
    }
    else {
      e.textContent = "Clear Filters"
    }
    console.log(this.filter_section_id)
  }

  render() {
    return (
      <div>
        <button className="button-28" role="button" id="main_btn" onClick={(e) => this.main_btn_click(e.target)}>
          Filter By Tag
        </button>
      </div>
    );
  }
}
