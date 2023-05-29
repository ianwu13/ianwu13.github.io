// Imports here

// any css-accepted format
export const accent_color = "#990000";

export const name = "Ian Wu";

export const profile_pic =  process.env.PUBLIC_URL + '/media/johndoe_headshot.png';

export const introduction = <div>
  <p>CURRENTLY A WIP, COME BACK SOON FOR AN UPDATE</p>
  <p>Lorem ipsum dolor sit amet, <a href="some-link">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget mi proin sed libero enim sed faucibus turpis. Mauris ultrices eros in cursus turpis. Sed faucibus turpis in eu mi bibendum neque egestas.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="some-link">ut labore et dolore magna aliqua</a>. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Mattis molestie a iaculis at erat. <a href="some-link">Sit amet mauris commodo quis imperdiet</a>. Non diam phasellus vestibulum lorem.</p>
</div>;

// icons from fontawesome 6.1.1 (free), or academicons (https://jpswalsh.github.io/academicons/)
export const icons = [
  {
    className: "ai ai-cv",
    link: process.env.PUBLIC_URL + '/temp_cv.pdf'
  },
  {
    className: "ai ai-semantic-scholar",
    link: "https://www.semanticscholar.org/"
  },
  {
    className: "fa-brands fa-google",
    link: "https://scholar.google.com/"
  },
  {
    className: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/"
  },
  {
    className: "fa-brands fa-twitter",
    link: "https://twitter.com/"
  },
  {
    className: "fas fa-paper-plane",
    link: "mailto:johndoe@university.edu"
  }
];