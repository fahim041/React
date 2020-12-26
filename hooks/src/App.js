import React, {useState} from 'react';
import Accordion from './components/Accordion.js';
import Search from "./components/Search.js";
import Dropdown from "./components/dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from './Header';

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
];

const options = [
  {
    label : '',
    value : ''
  },
  {
    label : 'The Color Red',
    value : 'red'
  }, {
    label : 'The color green',
    value : 'green'
  },{
    label : 'The shade of value',
    value : 'blue'
  }
]

const showAccordion = () => {
  if(window.location.pathname === "/search"){
    return <Search />
  }
}

const App = () => {
  const [select, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        name = "Choose a color"
        options={options}
        selected={select}
        onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
};

export default App;
