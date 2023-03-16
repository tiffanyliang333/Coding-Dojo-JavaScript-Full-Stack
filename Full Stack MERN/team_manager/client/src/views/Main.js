import React, {useState} from 'react';
import Header from '../components/Header';
import SubHeader1 from '../components/SubHeader1';
import PlayerList from '../components/PlayerList';

const Main = (props) => {
    const [listActive, setListActive] = useState(true);
    const [player, setPlayer] = useState([]);

    return(
        <div>
            <Header listActive = {listActive} setListActive = {setListActive} />
            <SubHeader1 listActive = {listActive} setListActive = {setListActive} />
            <PlayerList player = {player} setPlayer = {setPlayer} />
        </div>
    )
}

export default Main;