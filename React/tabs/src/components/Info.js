import React from 'react';

const Info = (props) => {
    const {allTabs, currentTab} = props;

    return (
        <div className="info">
            { allTabs[currentTab].content }
        </div>
    )
}

export default Info