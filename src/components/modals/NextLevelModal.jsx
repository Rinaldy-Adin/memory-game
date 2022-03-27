import styled from 'styled-components';
import {
    Button,
    Modal,
    ModalBackground,
    ModalTitle,
    ModalDescription,
} from '../Elements';

export default function NextLevelModal(props) {
    return (
        <ModalBackground>
            <Modal>
                <ModalTitle>Memory-Game</ModalTitle>
                <ModalDescription>
                    <p>Score: {props.score}</p>
                    <p>Best: {props.best}</p>
                </ModalDescription>
                <NextLevel onMouseUp={props.handleNextLevel}>
                    Next Level
                </NextLevel>
            </Modal>
        </ModalBackground>
    );
}

const NextLevel = styled(Button)``;
