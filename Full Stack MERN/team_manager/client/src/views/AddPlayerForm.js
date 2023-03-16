import React, {useState} from 'react';
import Header from '../components/Header';
import SubHeader1 from '../components/SubHeader1';
import AddPlayer from '../components/AddPlayer';

const AddPlayerForm = (props) => {
    const [listActive, setListActive] = useState(true);
    const [player, setPlayer] = useState([]);

    return(
        <div>
            <Header listActive = {listActive} setListActive = {setListActive} />
            <SubHeader1 listActive = {listActive} setListActive = {setListActive} />
            <AddPlayer player = {player} setPlayer = {setPlayer} />
        </div>
    )
}

export default AddPlayer;