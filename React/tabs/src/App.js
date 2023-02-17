import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Info from './components/Info';

function App() {

  const tabArray = [
    {label: "Tab 1", content: "Tab 1 content is showing here."},
    {label: "Tab 2", content: "Tab 2 content is showing here."},
    {label: "Tab 3", content: "Tab 3 content is showing here."},
    {label: "Tab 4", content: "Tab 4 content is showing here."},
  ];

  const [allTabs, setAllTabs] = useState(tabArray);

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="App">
      <Tabs allTabs={ allTabs } currentTab={ currentTab } setCurrentTab={setCurrentTab} />
      <Info allTabs={ allTabs } currentTab={ currentTab } />
    </div>
  );
}

export default App;
