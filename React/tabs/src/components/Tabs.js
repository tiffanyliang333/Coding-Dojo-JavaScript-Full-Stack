import React, { useState } from 'react';

const Tabs = (props) => {
    const {allTabs, currentTab, setCurrentTab} = props;

    const TabSelect = (index) => {
        if (index === currentTab) {
            return "selectedTab";
        }else {
            return "notSelectedTab";
        }
    }

    const setSelectedTab = (index) => {
        setCurrentTab(index);
    }

    return (
        <div style ={{ margin:"auto", width: "75%", textAlign: "center"}}>
            {
                allTabs.map((item, index) => (
                    <div className = {'tab ${ tabSelect(index)}'} onClick={(e) => setSelectedTab(index)}>
                        {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;