import styled from 'styled-components';
import {
    ModalBackground,
    Modal,
    Button,
    ModalTitle,
    ModalDescription,
} from '../Elements';

export default function StartGameModal(props) {
    return (
        <ModalBackground>
            <Modal>
                <ModalTitle>Memory-Game</ModalTitle>
                <ModalDescription>
                    The aim of memory game is to click on every picture exactly
                    once. Score as many points as you can.
                </ModalDescription>
                <Button onClick={props.handleStartGame}>Start Game</Button>
            </Modal>
        </ModalBackground>
    );
}
