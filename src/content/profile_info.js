// Imports here

// any css-accepted format
export const accent_color = "#990000";
export const accent_muted = "#995050";

export const name = "Ian Wu";
global.email = "ianwu@usc.edu";

export const profile_pic =  process.env.PUBLIC_URL + '/media/iw_headshot.png';

// TODO
export const introduction = 
<div>
    <p>
        I'm a second-year Master's student in Applied Data Science at <a href="https://www.usc.edu">USC</a>, with a
        strong passion for machine learning and deep learning. My recent focus has been on Natural Language Processing
        and Large Language Models, complementing my background in computer vision. This diverse expertise equips me to
        excel as an applied scientist or researcher in the industry.
    </p>

    <p>
        I earned my Bachelor's degree in computer science from <a href="https://www.csuohio.edu/">Cleveland State
        University</a>. During my undergraduate years, I successfully balanced the demands of being an NCAA Division
        1 athlete in fencing while excelling academically in the Jack, Joseph, and Morton Mandel Honors College. Originating
        from Oklahoma, I'm deeply passionate about outdoor activities and environmental conservation.
    </p>

    <p>
        I'm actively seeking professional opportunities and exciting collaborations. If you're interested in connecting or
        working together, please feel free to <a href={"mailto:"+global.email}>contact me</a>.
    </p>
</div>;

// icons from fontawesome 6.1.1 (free), or academicons (https://jpswalsh.github.io/academicons/)
export const icons = [
  {
    className: "fa-brands fa-github",
    link: "https://github.com/ianwu13"
  },
  {
    className: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/ianwu13/"
  },
  {
    className: "fas fa-paper-plane",
    link: "mailto:"+global.email
  },
  {
    className: "ai ai-cv",
    link: process.env.PUBLIC_URL + '/Ian_Wu_Curriculum_Vitae.pdf'
  }
  /*{
    className: "ai ai-semantic-scholar",
    link: "https://www.semanticscholar.org/"
  },
  {
    className: "fa-brands fa-google",
    link: "https://scholar.google.com/"
  },
  {
    className: "fa-brands fa-twitter",
    link: "https://twitter.com/"
  },*/
];