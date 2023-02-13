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

    let [player] = usePlayer();
    let [stage, setStage] = useStage(player);

    return (
        <StyledTetrisWrapper>
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
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;