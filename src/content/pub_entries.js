const preparation = [
  {
    title: "Paper title pellentesque habitant morbi tristique senectus et netus et.",
    author_span: <span>Author, <b>John Doe</b>, Author, Author, and Author</span>,
  },
  {
    title: "Paper title tincidunt vitae semper quis lectus nulla at volutpat.",
    author_span: <span>Author<sup>&dagger;</sup>, <b>John Doe<sup>&dagger;</sup></b>, Author, Author, Author, and Author</span>
  },
];

const publications = [
  {
    year: 2023,
    title: "Paper title bibendum enim facilisis gravida neque convallis a cras.",
    author_span: <span>Author, <b>John Doe</b>, Author, Author and Author</span>,
    location: "57th Annual Conference on the Earth",
    pdf: "paper1.pdf",
    doi: "https://www.doi.org/",
    code: "https://github.com/",
  },
  {
    year: 2022,
    title: "Paper title velit ut tortor pretium viverra suspendisse potenti nullam.",
    author_span: <span><b>John Doe</b>, Author, Author, Author, and Author</span>,
    location: "2022 IEEE Conference on Computers and More",
    pdf: "paper2.pdf",
    doi: "https://www.doi.org/",
  },
  {
    year: 2021,
    title: "Paper title tristique senectus et netus et malesuada fames ac.",
    author_span: <span><b>John Doe</b>, Author, Author, and Author</span>,
    location: "2021 IEEE Congress on Fancy Computation",
    doi: "https://www.doi.org/",
    code: "https://github.com/",
  },
  {
    year: 2020,
    title: "Paper title faucibus interdum posuere lorem ipsum dolor sit amet.",
    author_span: <span>Author<sup>&dagger;</sup>, <b>John Doe<sup>&dagger;</sup></b>, Author, Author, and Author</span>,
    location: "13th International Conference on a Very Cool Topic",
    doi: "https://www.doi.org/",
  },
];

// add sections to your research here
export const pub_entries = [
  ["Publications", publications], 
  ["In Preparation", preparation],
];