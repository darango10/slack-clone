import React from 'react';
import '../styles/message.css'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


const Message = ({message, timestamp, user, image, userImage}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="message">
            <img src={userImage} alt={user}/>
            <div className="message__info">
                <h4>
                    {user}
                    <span className="message__timestamp">{new Date(timestamp?.toDate()).toLocaleString('es-CO')}</span>
                </h4>
                <p>{message}</p>
                {image &&
                <img src={image} alt={user} onClick={handleClickOpen}/>
                }
                <React.Fragment>
                    <Dialog
                        fullWidth={true}
                        maxWidth={1000}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="max-width-dialog-title"
                    >
                        <DialogContent>
                            <img src={image} alt={user} onClick={handleClickOpen}
                                 style={{display: 'flex', height: '500px', width: '100%', objectFit: 'content'}}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            </div>
        </div>
    );
};

export default Message;
