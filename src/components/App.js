import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from "react";
import Website from './Website.js';
import "../styles/sidebar.css";
import { accent_color } from '../content/profile_info.js';

const GlobalStyles = createGlobalStyle`
  :root {
    --accent: ${accent_color};
  }
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Website />
    </Router>
  )
};

export default App;
