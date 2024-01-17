import './style.css';
import research from './tabs/research.js';
import planning from './tabs/planning.js';

const tabs = [research, planning];

tabs.forEach((tab)=>tab.createTabHead());

