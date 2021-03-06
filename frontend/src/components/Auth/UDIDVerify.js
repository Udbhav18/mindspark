import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { setUdidStatus } from '../../actions/user'
import { useDispatch } from 'react-redux'

function UDIDVerify(props) {
    const dispatch = useDispatch()
    function verifyId(e) {
        e.preventDefault()
        dispatch(setUdidStatus(true))
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
                    Verify UDID
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="formd my-3" onSubmit={verifyId}>
                    <div className="form-group">
                        <div className="styled">
                            <i className="fas fa-credit-card"></i>
                            <input type="text" placeholder="UDID Number" name="udid" required />
                        </div>
                    </div>

                    <input type="submit" value="verify" className="btn btn-primary my-1" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UDIDVerify
