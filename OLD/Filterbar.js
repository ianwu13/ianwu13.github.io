import React from 'react';
import "../styles/filterbar.css"
import "../styles/buttons.css"

import { FadeIn } from 'react-slide-fade-in';
// TODO: MAYBE ALSO IMPORT CSS FOR FILTERBAR??

class FilterBar extends React.Component {
  constructor(filter_section_id, tagset) {
    super();
    this.filter_section_id = filter_section_id
    this.tagset = tagset

    this.tag_btns = "TEST IAN" /*AUTOGEN FROM "tagset"*/
  }

  handle_tag_click() {
    /*TOGGLE PORTFIOLIO ITEM VISIBILITY"*/
  }
    
  main_btn_click(e) {
    if (e.textContent === "Clear Filters") {
      e.textContent = "Filter By Tag"
      /*TOGGLE DISPLAY OF TAGS*/
    }
    else {
      e.textContent = "Clear Filters"
      /*TOGGLE DISPLAY OF TAGS*/
    }
  }

  tst = () => {
      document.getElementById('tags-bar').classList.toggle('active');
  }

  render() {
    return (
      <div className='filterbar'>
        <div class="bttn-container">
          <button className="button-28" role="button" id="main_btn" onClick={(e) => this.main_btn_click(e.target)}>
            Filter By Tag
          </button>
        </div>
        <ul id="tags-bar" class="tag-set">
          <li>test</li>
          <li>TRAIN</li>
          <li>{this.tag_btns}</li>
        </ul>
      </div>
    );
  }
}

export default FilterBar;
