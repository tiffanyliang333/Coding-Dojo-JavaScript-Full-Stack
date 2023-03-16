import axios from 'axios';
import {useEffect, useState} from 'react';

const PlayerStatus = (props) => {
    const {setStatusTabActive, gameId} = props;
    const [player, setPlayer] = useState([]);
    const [getAll, setGetAll] = useState(false);

    useEffect(() => {
        setStatusTabActive(true)
    }, []);

    useEffect(() => {
        axios.get(`http://localhhost:8000/api/player`)
            .then((res) => {
                console.log(res.data);
                setPlayer(res.data);
            })
            .catch((err) => console.log(err.res));
    }, [getAll]);

    const handleStatus = (playerId, newStatus) => {
        let putData = {};
        if(gameId === "1"){
            putData.gameOneStatus = newStatus;
        } else if (gameId === "2"){
            putData.gameTwoStatus = newStatus;
        } else {
            putData.gameThreeStatus = newStatus;
        }
        axios.put(`http:///localhost:8000/api/player/${playerId}`, putData)
            .then((res) => {
                console.log(res);
                setGetAll(!getAll);
            })
            .catch((err) => console.log(err.res));
    };

    return(
        <div>
            <h2>Player Status - Game {props.gameId}</h2>
            <table>
                <thead>
                    <tr>Player Name</tr>
                    <tr>Actions</tr>
                </thead>
                <tbody>
                    {gameId === "1" ? (
                        player.map((p, index) => {
                            return(
                                <tr key = {p._id}>
                                    <td>{p.playerName}</td>
                                    <td>
                                        <button className = {`${p.gameOneStatus === "Playing" ? "green-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Playing")}>Playing</button>
                                        <button className = {`${p.gameOneStatus === "Not Playing" ? "red-not-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Not Playing")}>Not Playing</button>
                                        <button className = {`${p.gameOneStatus === "Undecided" ? "yellow-undecided-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Undecided")}>Undecided</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                    {gameId === "2" ? (
                        player.map((p, index) => {
                            return(
                                <tr key = {p._id}>
                                    <td>{p.playerName}</td>
                                    <td>
                                        <button className = {`${p.gameOneStatus === "Playing" ? "green-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Playing")}>Playing</button>
                                        <button className = {`${p.gameOneStatus === "Not Playing" ? "red-not-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Not Playing")}>Not Playing</button>
                                        <button className = {`${p.gameOneStatus === "Undecided" ? "yellow-undecided-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Undecided")}>Undecided</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                    {gameId === "3" ? (
                        player.map((p, index) => {
                            return(
                                <tr key = {p._id}>
                                    <td>{p.playerName}</td>
                                    <td>
                                        <button className = {`${p.gameOneStatus === "Playing" ? "green-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Playing")}>Playing</button>
                                        <button className = {`${p.gameOneStatus === "Not Playing" ? "red-not-playing-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Not Playing")}>Not Playing</button>
                                        <button className = {`${p.gameOneStatus === "Undecided" ? "yellow-undecided-btn" : ""}`}
                                            onClick = {() => handleStatus(p._id, "Undecided")}>Undecided</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerStatus;