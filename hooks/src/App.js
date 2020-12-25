import React from 'react';
import Accordion from './components/Accordion.js';
import Search from "./components/Search.js";

const items = [
  {
    title : "What is Angular?",
    content : "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations."
  },{
    title : "What is React?",
    content : "React is an open-source, front end, JavaScript library for building user interfaces or UI components"
  },{
    title : "What is Vue?",
    content : "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications."
  }
]


const App = () => {
  return <div>
    <Search />
  </div>
};

export default App;
