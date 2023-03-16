import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Header = (props) => {
    const {manageStatusActive, setManageStatusActive} = props;

    const [managePlayerStyle, setManagePlayerStyle] = useState({});
    const [managePlayerStatusStyle, SetManagePlayerStatusStyle] = useState({});
    const bold = {
        fontWeight: "800",
    };

    useEffect(() => {
        if (manageStatusActive) {
            setManagePlayerStyle(bold);
            SetManagePlayerStatusStyle({});
        } else {
            setManagePlayerStyle({});
            SetManagePlayerStatusStyle(bold);
        }
    }, [manageStatusActive]);

    return(
        <div>
            <span style={managePlayerStyle}>
                <h3><Link to="/players">Manage Players </Link></h3>
            </span>
            <h3> | </h3>
            <span style={managePlayerStatusStyle}>
                <h3><Link to="/status/game/1">Manage Player Status</Link></h3>
            </span>
        </div>
    );
};

export default Header;