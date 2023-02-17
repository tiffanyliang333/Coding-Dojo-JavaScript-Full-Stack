import React from 'react';

const ColorDisplay = (props) => {
    
    const { boxColorArray } = props;

    return (
        <div>
            {
                boxColorArray.map((color, index) => (
                    <div key={index} style ={{
                        display: "inline-block",
                        margin:"15px",
                        height:"40px",
                        width:"40px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
};

export default ColorDisplay;