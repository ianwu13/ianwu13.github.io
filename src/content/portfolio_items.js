// Imports here

export const portfolio_intro = <div>
<p>A non-exhaustive and non-chronologically ordered list of some of projects I've done which may be relevant to roles I'm interested in. If you're interested in my experience in a particular area or with a specific technology feel free to reach out through <a href={"mailto:"+global.email}>email</a> or checkout <a href="https://github.com/ianwu13">my github</a>!</p>
</div>;
// <p>I'm currently in the process of creating READMEs for any of the projects listed here that don't have them yet, so please forgive any repositories without good documentation.</p>
// <p>MAYBE ADD TAGS DROPDOWN OR SOMETHING TO LINKS SECTION?</p>

// export const portfolioitem_pic =  process.env.PUBLIC_URL + '/media/newsitem_pic.png';
export const portfolio_items = [
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "LLM Augmentation for Multi-Issue Negotiation",
    description: <span>We are researching methods to create end-to-end, multi-issue negotiator agents by utilizing reinforcement learning and models such as GRUs/LSTMs in tandem with LLMs. <br/>NOTE: This project is currently a work in progress, so agent code is not yet public but is available upon request.</span>,
    links: {
      "Agent code": "https://github.com/ianwu13", // /llm_nego_plan_exps/
      "RL code": "https://github.com/ianwu13/end-to-end-negotiator/tree/cocoa_imp",
    },
    tags: ["nlp", "deeplearning", "reinforcementlearning"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/pill.png",
    title: "Whole Slide Image (WSI) Cancer Classifier",
    description: "Researched, implemented and trained a novel network for cancer classification in WSIs using multiple instance learning and graph convolutional networks (GCNs). Models were created using PyTorch and Deep Graph Library (DGL), then trained on the USC High Performance Computing Cluster. The final model achieved an improvement of 10% in recall (0.86-0.96) and 4% in accuracy (0.91-0.95) when compared with state-of-the-art methods at the time.",
    links: {
      code: "https://github.com/ianwu13/EE-638-WSI-Project",
      paper: process.env.PUBLIC_URL + "wsi_classifier.pdf"
    },
    tags: ["computervision", "deeplearning"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Restaurant Recommender System",
    description: "Developed a recommendation model using the Yelp Dataset. This model was a hybrid model using feature combination. In this model, predictions from several sub-models, as well as user and resturaunt features, are used as inputs to an XGBoost model which predicts a given user's rating for a given restaurant. For the sub-models, I trained SVD, Co-clustering, KNN, and item-based collaborative filtering models using Apache Spark. I also implemented the item-based collaborative filtering model from scratch in PySpark.",
    links: {
      code: "https://github.com/ianwu13/Restaurant-Recommender",
    },
    tags: ["recomendersystems", "machinelearning"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Negotiation Agent with Custom Transformer Models",
    description: "Developed and trained a custom dual-encoder transformer model architecture using the Hugging Face Transformers library, achieving an F1 BERT-Score of 0.88 and a BLEU-2 Score of 0.21 in dialogue response prediction for the CaSiNo negotiation dataset",
    links: {
      code: "https://github.com/ianwu13/Dual-T5-Negotiator",
    },
    tags: ["nlp", "deeplearning"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Congressional Bill Sentiment Analysis System",
    description: "Created an automated system to gauge public sentiment on congressional bills using Twitter data. Collected and stored over 14 million relevant tweets from the Twitter API using Python and MariaDB. Utilized the Hugging Face library to train BERT model for sentiment analysis (classifying tweets as positive, negative, or neutral), achieving 62% accuracy; Leveraged distant supervision to improve results to 78%. Aggregated sentiment scores to generate quantitative metrics for public opinion on different congressional bills by population segment and other criteria (verified/unverified users, like-to-comment ratio, etc.)",
    links: {
      code: "https://github.com/ianwu13/SeniorDesign",
    },
    tags: ["nlp", "datascience", "dataengineering", "databases", "machinelearning"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/gh_icon.png",
    title: "GitHub Profile ReadMe Generator",
    description: <span>A repository that allows the user to quickly generate attractive custom README files for their GitHub profile (or any other use) based on a simple template. Check out mine on <a href="https://www.github.com/ianwu13" style={{color: "var(--accent_muted)"}}>my GitHub</a> profile!</span>,
    links: {
      code: "https://github.com/ianwu13/gh_readme_from_template",
    },
    tags: ["python"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/aicamp_icon.png",
    title: "Greenhouse Gas Emissions Data Science Study",
    description: "One of my earliest data science projects. I collected highly sparse historical data on greenhouse gas emissions and fossil fuel imports, exports, and production for 43 countries from the UNData API aggregated it into a single dataset. The goal of this project was to predict a country's greenhouse gas emissions using trade and production data for different fossil fuels. Linear regression, neural network, and random forest models were trained on the data, with the random forest regressor achieving the highest accuracy by a significant margin.",
    links: {
      code: "https://github.com/ianwu13/AI-Camp-DS-Crash-Course",
    },
    tags: ["datascience", "machinelearning", "dataengineering"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/recipe.png",
    title: "Reci-Pic Kitchen Assistant",
    description: "Collaborated on the creation of AI-driven kitchen assistant app using React Native. Trained YOLOv5 model with 73% accuracy to recognize 20 common kitchen ingredients. Identified ingredients were then used to identify and recommend recipes to the user.",
    links: {
      code: "https://github.com/ianwu13/Reci-Pic",
    },
    tags: ["computervision", "deeplearning", "datamanagement"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/comp_vis.png",
    title: "Cartoons vs. Real Life Image Classifier",
    description: "Collected an original dataset of over 16k cartoon and photographic images. Designed and implemented a novel deep learning model based on Feature Pyramid Networks with TensorFlow, achieving 91% classification accuracy",
    links: {
      code: "https://github.com/ianwu13/Deep-Learning-Final-Proj",
    },
    tags: ["computervision", "deeplearning", "webscraping"],
  },
  /*
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/bg_rep.png",
    title: "Image Background Replacement Tool",
    description: "57th Annual Conference on the Earths sdviuhesgvoaejnbvvva",
    links: {
      code: "https://github.com/ianwu13/image_bg_replacement",
    },
    tags: ["computervision"],
  },{
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "CIS454_Term_Project",
    description: "57th Annual Conference on the Earths sdviuhesgvoaejnbvvva",
    links: {
      doi: "https://www.doi.org/",
      code: "https://github.com/",
    },
    tags: ["nlp"],
  },*/

  /*
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "ALL BELOW ARE TESTING",
    description: "57th Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv Annual Conference on the Earth test et ssas this sod avoehf weiubdsvdsv",
    links: {
      pdf: "paper1.pdf",
      doi: "https://www.doi.org/",
      code: "https://github.com/",
    },
    tags: ["nlp", "test", "ml"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Paper title velit ut tortor pretium viverr suspendisse potenti nullam.",
    description: "57th Annual Conference on the Earthfacilisis gravida neque convallisfacilisis gravida neque convallis",
    links: {
      pdf: "paper1.pdf",
      code: "https://github.com/",
    },
    tags: ["ml"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Paper title tristique senectus et nets et malesuada fames ac.",
    description: "57th Annual Conference on asindgoihaeg g eie gn oiegseagseg eqg08hwegoin go ehgiohioseh the Earth",
    links: {
      pdf: "paper1.pdf",
    },
    tags: ["test", "ml"],
  },
  {
    img_pth: process.env.PUBLIC_URL + "/media/portfolio_imgs/portfolio_img.png",
    title: "Paper title interdum posuere lorem ipsum dolor sit amet.",
    description: "57th Annual Conference on the Earth",
    links: {
      pdf: "paper1.pdf",
      doi: "https://www.doi.org/",
      code: "https://github.com/",
    },
    tags: ["nlp", "test", "ml"],
  },*/
];

/* No need to touch; gets unique tags from portfolio items */
var tagset = []
portfolio_items.forEach(x => x.tags.forEach(y => {if (!tagset.includes(y)) { tagset = tagset.concat(y) }}))

export const tagSet = tagset
