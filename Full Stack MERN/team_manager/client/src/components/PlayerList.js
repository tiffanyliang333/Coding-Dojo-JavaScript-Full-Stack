import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './Header';
import SubHeader1 from './SubHeader1';

const PlayerList = (props) => {
    const [player, setPlayer] = useState([]);
    const {
        listActive,
        setListActive,
        setPlayerStatusActive,
    } = props;

    useEffect(() => {
        setListActive(true);
        setPlayerStatusActive(false);
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => {
            console.log(res.data.player);
            setPlayer(res.data.player);
        })
        .catch(err => console.log(err));
    }, []);

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/player/${playerId}`)
            .then(res => {
                console.log(res.data.player);
                setPlayer(player.filter((player, index) => player._id !== playerId))
            })
            .catch(err => console.group(err))
    }

    return(
        <div>
            <Header 
                pageActive = {listActive}
                setListActive = {setListActive}/>
            <SubHeader1 
                pageActive = {listActive}
                setListActive = {setListActive}/>
            <h1>List of Players</h1>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Player name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((player, index) => {
                            return(
                                <tr key={index}>
                                    <td>{player.playerName}</td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button onClick={(e) => {deletePlayer(player._id)}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
        </div>
    );
};

export default PlayerList;