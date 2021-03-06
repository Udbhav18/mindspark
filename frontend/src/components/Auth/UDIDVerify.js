import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { setUdidStatus } from '../../actions/user'
import { useDispatch } from 'react-redux'

function UDIDVerify(props) {
    const [aadhar, setAadhar] = useState('')
    const [indianState, setIndianState] = useState('')
    const [district, setDistrict] = useState('')

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
                            <input type="text" placeholder="Aadhar Number" name="udid" value={aadhar} onChange={(e) => setAadhar(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <div className="styled">
                                <i className="fa fa-map-marker"></i>
                                <select name="state" id="state" class="form-control" value={indianState} onChange={(e) => setIndianState(e.target.value)}>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>
                        </div>
                        <div className="styled">
                            <i className="fa fa-map-marker"></i>
                            <input type="text" placeholder="District" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} required />
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
