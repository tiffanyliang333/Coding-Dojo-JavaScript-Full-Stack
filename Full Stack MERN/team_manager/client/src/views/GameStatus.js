import React, {useState} from 'react';
import Header from '../components/Header';
import SubHeader2 from '../components/SubHeader2';
import PlayerStatus from '../components/PlayerStatus';

const GameStatus = (props) => {
    const [listActive, setListActive] = useState(true);
    const [player, setPlayer] = useState([]);

    return(
        <div>
            <Header listActive = {listActive} setListActive = {setListActive} />
            <SubHeader2 listActive = {listActive} setListActive = {setListActive} />
            <PlayerStatus player = {player} setPlayer = {setPlayer} />
        </div>
    )
}

export default GameStatus;