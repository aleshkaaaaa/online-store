import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/esm/Form";

const CreateDevice = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название устройства"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice;