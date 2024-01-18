import './style.css';
import research from './tabs/research.js';
import planning from './tabs/planning.js';
import production from './tabs/production.js';
import testing from './tabs/testing.js';
import result from './tabs/result.js';

const tabs = [research, planning, production, testing, result];

tabs.forEach((tab)=>tab.createTabHead());

