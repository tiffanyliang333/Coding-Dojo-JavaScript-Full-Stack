import React, {useState} from 'react';
import axios from 'axios';

const AddPlayer = (props) => {
    const {player, setPlayer} = props;
    const [playerName, setPlayerName] = useState("");
    const [position, setPosition] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/player`, {
            playerName, position
        })
        .then ((res) => {
            console.log(res);
            console.log(res.data);
            setPlayerName("");
            setPosition("");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <div>
            <h4>Add Player</h4>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>Player Name: </label>
                    <input type = "text" value = {playerName} onChange = {(e) => {
                        setPlayerName(e.target.value);
                    }} />
                </div>
                <div>
                    <label>Preferred Position: </label>
                    <input type = "text" value = {position} onChange = {(e) => {
                        setPosition(e.target.value);
                    }} />
                </div>
                <div>
                    <input type = "submit" value = "Add" />
                </div>
            </form>
        </div>
    )
}

export default AddPlayer;