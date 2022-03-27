import styled from 'styled-components';

export default function Header(props) {
    return (
        <Container>
            <Title>Memory-Game</Title>
            <Scores>
                Score: {props.score} | Best: {props.best}
            </Scores>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;

    /* border: 1px solid black; */
`;

const Title = styled.h1`
    font-family: 'Major Mono Display', monospace;
    font-size: 3rem;
`;

const Scores = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
`;
