import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {useContext, useState, useEffect} from 'react';
import EditForm1 from './EditForm1'
import {GuestContext} from '../contexts/GuestContext';




const Guest = ({guest}) => {

    const {deleteGuest} = useContext(GuestContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [guest])

    return (
        <>
            <td>{guest.firstname}{" "}{guest.lastname}</td>
            {/* <td>{guest.lastname}</td> */}
            <td>{guest.contactno}</td>
            <td>{guest.vehicleno}</td>
            {/* <td>{guest.slotno}</td> */}
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xeff1;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteGuest(guest.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xe0e9;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Payment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm1 theGuest={guest} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Guest;