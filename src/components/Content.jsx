import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from './Elements';
import { v4 as uuidv4 } from 'uuid';

const initializeCards = (nCards) => {
    let initialCards = [];

    for (let i = 0; i < nCards; i++) {
        initialCards.push({
            color: '#fff',
            id: uuidv4(),
            chosen: false,
            src: '',
        });
    }

    return initialCards;
};

export default function Content(props) {
    const [cards, setCards] = useState(initializeCards(props.nCards));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const fetchAvatar = async () => {
                    return await fetch(
                        `https://avatars.dicebear.com/api/pixel-art/${uuidv4()}.svg`
                    );
                };

                const artificialWait = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log('working');
                        resolve('');
                    }, 1500);
                });

                const actions = [];

                for (let i = 0; i < props.nCards; i++) {
                    actions.push(fetchAvatar());
                }

                const avatars = await Promise.all([...actions, artificialWait]);

                console.log(avatars);
                const newCards = [...cards];
                newCards.forEach((card, idx) => {
                    newCards[idx].src = avatars[idx].url;
                });
                setCards(newCards);
                setLoaded(true);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const shuffle = () => {
        const newCards = [...cards];

        let currentIndex = newCards.length,
            randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [newCards[currentIndex], newCards[randomIndex]] = [
                newCards[randomIndex],
                newCards[currentIndex],
            ];
        }

        setCards([...newCards]);
    };

    const chooseCard = (id) => {
        cards.forEach((card, idx) => {
            if (card.id === id) {
                if (cards[idx].chosen) {
                    props.gameOver();
                } else {
                    props.incScore();
                    const newCards = [...cards];
                    newCards[idx].chosen = 1;
                    setCards(newCards);
                    shuffle();
                }
            }
        });
    };

    useEffect(() => {
        const allDone = cards.reduce((prev, cur) => prev && cur.chosen, true);
        if (allDone) props.finishLevel();
    }, [cards]);

    return (
        <Container>
            {loaded ? (
                cards.map(({ color, id, chosen, src }) => (
                    <Card
                        color={color}
                        id={id}
                        onClick={() => {
                            chooseCard(id);
                        }}
                        src={src}
                    />
                ))
            ) : (
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
    flex-wrap: wrap;
    row-gap: 2rem;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.background};
    display: flex;
    justify-content: center;
`;

const Card = styled.img`
    width: 20vw;
    height: 20vw;
    background-color: ${(props) => props.color};

    border: 6px solid white;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
`;
