import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const SubHeader1 = (props) => {
    const {manageStatusActive, setManageStatusActive} = props;

    const [manageListStyle, setManageListStyle] = useState({});
    const [manageAddPlayerStyle, setAddPlayerStyle] = useState({});
    const bold = {
        fontWeight: "800",
    };

    useEffect(() => {
        if (manageStatusActive) {
            setManageListStyle(bold);
            setAddPlayerStyle({});
        } else {
            setManageListStyle({});
            setAddPlayerStyle(bold);
        }
    }, [manageStatusActive]);

    return(
        <div>
            <span style={{...manageListStyle}}>
                <h1><Link to="/players">List </Link></h1>
            </span>
            <h1> | </h1>
            <span style={{...manageAddPlayerStyle}}>
                <h1><Link to="/player/new"> Add Player</Link></h1>
            </span>
        </div>
    );
};

export default SubHeader1;