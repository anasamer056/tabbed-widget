import Tab from "./main-class";
import contentImg from '../images/testing.jpg';

const svg = `<svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 512 512" xml:space="preserve">
<g>
<g>
   <path d="M0,23.6v464.8h512V23.6H0z M31.347,54.947h370.939v40.748H31.347V54.947z M480.653,457.054H31.347v-0.001V127.042h449.306
       V457.054z M480.653,95.695h-47.02V54.947h47.02V95.695z"/>
</g>
</g>
<g>
<g>
   <path d="M256,150.064L100.973,428.06h310.055L256,150.064z M256,214.426l101.654,182.288H154.345L256,214.426z"/>
</g>
</g>
<g>
<g>
   <rect x="240.327" y="268.194" width="31.347" height="71.074"/>
</g>
</g>
<g>
<g>
   <rect x="240.327" y="354.67" width="31.347" height="25.67"/>
</g>
</g>
</svg>`;

const title = 'Testing';
const contentTitle = 'Result & Optimization';
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus itaque nesciunt, magni quo dolor culpa doloribus. Quaerat iusto nostrum ipsa ratione ut delectus eligendi saepe cum accusantium, inventore adipisci porro.'

export default new Tab(title, svg, contentImg, contentTitle, content);
