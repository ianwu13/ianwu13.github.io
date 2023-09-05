import "../styles/footer.css";

//import { ref_items } from '../content/reference_items.js';


/*
const makeRefItem = (item) => {
    return (
        <li class="menu-item"><a href={item.link}>{item.text}</a></li>
    )
}

const Resources = () => {
    return (
        <div class="menu-container">
            <button class="menu-button" tabindex="0">Other Resources</button>
            <ul class="dropdown-menu">
                {ref_items.map(makeRefItem)}
            </ul>
        </div>
    )
}
*/

const Footer = () => {
    return (
        <div class='footer'>
            <p class="copyright">
                &#169; 2023 <span class="r-rage-footer">Ian Wu</span> - <a href="https://github.com/amanirmk/academic-website">Template</a>
            </p>
        </div>
    )
}

export default Footer