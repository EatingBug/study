import { useState } from "react";

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import { createStage } from '../gameHelpers';

function Tetris() {

    let [dropTime, setDropTime] = useState(null);
    let [gameOver, setGameOver] = useState(false);

    let [player, updatePlayerPos, resetPlayer] = usePlayer();
    let [stage, setStage] = useStage(player);

    console.log('re-render');

    let movePlayer = (dir) => {
        updatePlayerPos({x: dir, y: 0})
    }

    let startGame = () => {
        console.log('test')
        setStage(createStage());
        resetPlayer();
    }

    let drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false})
    }

    let dropPlayer = () => {
        drop();
    }

    let move = ({keyCode}) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
    }


    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {
                        gameOver ? (<Display gameOver={gameOver} text="Game Over" />)
                            : (
                                <div>
                                    <Display text="Score" />
                                    <Display text="Rows" />
                                    <Display text="Level" />
                                </div>
                            )
                    }
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;