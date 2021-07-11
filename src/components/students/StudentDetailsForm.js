import React, { Component } from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { Avatar, Button, CssBaseline, TextField, Typography, Container, withStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { StudentDetailsFormStyles } from '../../styles/styles';

class studentDetailsForm extends Component {
    state = { openAlert: false }

    renderInput = ({ input, label, meta }) => {
        return (
            <TextField
                error={meta.error && meta.touched}
                {...input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name={label}
                label={label}
                type="text"
                id={label}
            />
        );
    }

    setOpenAlert = () => {
        this.setState({ openAlert: !this.state.openAlert })
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues, this.setOpenAlert)
    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar alt="student" />
                    <Typography component="h1" variant="h5">
                        New Student
                    </Typography>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Field name="name" component={this.renderInput} label="Enter name" />
                        <Field name="class" component={this.renderInput} label="Enter class" />
                        <Field name="course" component={this.renderInput} label="Enter course" />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Save
                        </Button>
                    </form>
                    <div >
                        {this.state.openAlert && <Alert onClose={() => { this.setState({ openAlert: false }) }} severity="success">Student Registered Successfully!</Alert>}
                    </div>
                </div>
            </Container>
        );
    };

}

const validate = formValues => {
    const error = {};
    if (!formValues.name) {
        error.name = 'You must enter a name';
    }
    if (!formValues.class) {
        error.class = 'You must enter a class';
    }
    if (!formValues.course) {
        error.course = 'You must enter a course';
    }
    return error;
}
const afterSubmit = (result, dispatch) => {
    dispatch(reset('studentDetailsForm'));
}
const styledComponent = withStyles(StudentDetailsFormStyles, { withTheme: true })(studentDetailsForm);
export default reduxForm({
    form: 'studentDetailsForm',
    onSubmitSuccess: afterSubmit,
    validate
})(styledComponent);
