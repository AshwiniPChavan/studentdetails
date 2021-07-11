import React, { Component } from 'react';
import { Dialog, Slide, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

class DeleteDailog extends Component {
    handleClose = () => {
        this.props.handleDeleteClose();
    }

    render() {
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        return (
            <div>
                <Dialog open={this.props.open} TransitionComponent={Transition}>
                    <DialogTitle id="alert-dialog-title">{"Delete Student Details"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this Student Detail?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleDeleteClick} color="primary">
                            Delete
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
}
export default DeleteDailog;