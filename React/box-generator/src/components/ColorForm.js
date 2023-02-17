import React, { useState } from 'react';

const ColorForm = (props) => {
    const {newColor, setNewColor} = props;
    const [enterColor, setEnterColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const inputColor = {newColor};
        // console.log("welcome", inputColor);
        setNewColor([...newColor, enterColor])
        setEnterColor("");
    };


    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Color</label>
                <input type="text" value={enterColor} onChange={ (e) => setEnterColor(e.target.value) }/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default ColorForm;