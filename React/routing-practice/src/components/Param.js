import React from 'react';
import { useParams } from 'react-router-dom';

const Param = (props) => {
    const { word, color, bgColor } = useParams();

    return (
        <div>
            {
                isNaN(word)?
                <p style ={color?{color: color, backgroundColor: bgColor} :null}>This is a word: {word}</p>
                :
                <p>This is a number: {word}</p>
            }
        </div>
    )
}

export default Param;