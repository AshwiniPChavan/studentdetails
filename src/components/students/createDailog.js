import React, { Component } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Slide, withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { connect } from 'react-redux';
import { createStudentDetails } from '../../actions';
import StudentDetailsForm from './StudentDetailsForm';
import { CreateDailogStyles } from '../../styles/styles';

class CreateStudentDetails extends Component {

    handleClose = () => {
        this.props.handleClose();
        this.props.setRefresh(true)
    }
    onSubmit = (formValues, setOpenAlert) => {
        this.props.createStudentDetails(formValues)
            .then(() => setOpenAlert())
    };
    render() {
        const { classes } = this.props;
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        return (
            <div>
                <Dialog open={this.props.open} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                New Student
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <StudentDetailsForm onSubmit={this.onSubmit} />
                </Dialog>
            </div>
        );
    };
}
const styledComponent = withStyles(CreateDailogStyles, { withTheme: true })(CreateStudentDetails);
export default connect(null, { createStudentDetails })(styledComponent);