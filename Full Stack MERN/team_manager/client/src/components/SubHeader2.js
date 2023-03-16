import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const SubHeader2 = (props) => {
    const {gameId} = props;

    const [gameOneStyle, setGameOneStyle] = useState({});
    const [gameTwoStyle, setGameTwoStyle] = useState({});
    const [gameThreeStyle, setGameThreeStyle] = useState({});
    const bold = {
        fontWeight: "800",
    };

    useEffect(() => {
        if(gameId === "1") {
            setGameOneStyle(bold);
            setGameTwoStyle({});
            setGameThreeStyle({});
        } else if (gameId === "2") {
            setGameOneStyle({});
            setGameTwoStyle(bold);
            setGameThreeStyle({});
        } else {
            setGameOneStyle({});
            setGameTwoStyle({});
            setGameThreeStyle(bold);
        }
    }, [gameId]);

    return(
        <div>
            <span style={gameOneStyle}>
                <Link to="/status/game/1">Game 1 </Link>
            </span>
            <p> | </p>
            <span style={gameTwoStyle}>
                <Link to="/status/game/2"> Game 2 </Link>
            </span>
            <p> | </p>
            <span style={gameThreeStyle}>
                <Link to="/status/game/3"> Game 3</Link>
            </span>
        </div>
    );
};

export default SubHeader2;