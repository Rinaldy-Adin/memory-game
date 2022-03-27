import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import GameOverModal from './components/modals/GameOverModal';
import NextLevelModal from './components/modals/NextLevelModal';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import StartGameModal from './components/modals/StartGameModal';

const App = () => {
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    const [gameId, setGameId] = useState(uuidv4());

    const [isGameOver, setIsGameOver] = useState(false);
    const [isLevelFinished, setIsLevelFinished] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const [nCards, setNCards] = useState(3);

    const incScore = () => {
        setScore(score + 1);
    };

    const handleStartGame = () => {
        setIsGameStarted(true);
    };

    const gameOver = () => {
        setIsGameOver(true);
        console.log('working');
    };

    const finishLevel = () => {
        setIsLevelFinished(true);
    };

    const handleNextLevel = () => {
        setNCards(nCards + 3);
        setIsLevelFinished(false);
        setGameId(uuidv4());
    };

    const handleReset = () => {
        setScore(0);
        setNCards(3);
        setIsGameOver(false);
        setGameId(uuidv4());
    };

    useEffect(() => {
        setBest(score > best ? score : best);
    }, [score]);

    return (
        <Container>
            <Header score={score} best={best} />
            {isGameOver ? <GameOverModal handleReset={handleReset} /> : <></>}
            {isLevelFinished ? (
                <NextLevelModal
                    handleNextLevel={handleNextLevel}
                    score={score}
                    best={best}
                />
            ) : (
                <></>
            )}
            {isGameStarted ? (
                <Content
                    incScore={incScore}
                    gameOver={gameOver}
                    nCards={nCards}
                    finishLevel={finishLevel}
                    key={gameId}
                />
            ) : (
                <StartGameModal handleStartGame={handleStartGame} />
            )}
        </Container>
    );
};

const Container = styled.div``;

export default App;
