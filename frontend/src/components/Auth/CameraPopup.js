import React from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import { Modal, Button } from 'react-bootstrap'
import { setImg } from '../../actions/user'
import { useDispatch } from 'react-redux'

function CameraPopup(props) {
    const dispatch = useDispatch()
    function handleTakePhoto(dataUri) {
        dispatch(setImg(dataUri))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Use Face Id to Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Camera
                    onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CameraPopup
