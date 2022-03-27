import styled from 'styled-components';
import { Button, Modal, ModalBackground } from '../Elements';

export default function GameOverModal(props) {
    return (
        <ModalBackground>
            <Modal>
                <StartOver onMouseUp={props.handleReset}>Start Over?</StartOver>
            </Modal>
        </ModalBackground>
    );
}

const StartOver = styled(Button)``;
