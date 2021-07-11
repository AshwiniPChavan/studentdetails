import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudent, fetchstudentsDetails } from '../../actions';
import { Box, List, withStyles, Grid, Typography } from '@material-ui/core';
import Pagination from "@material-ui/lab/Pagination";
import SearchBar from "material-ui-search-bar";
import ListComponent from './ListComponent';
import DeleteDailog from './DeleteDailog';
import { StudentStyles } from '../../styles/styles';


const itemsPerPage = 5;
class ListStudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 1, noOfPages: 1, searched: "", data: [], delete: false, deleteId: null };
    }
    componentDidMount() {
        this.fetchData()
    }
    componentDidUpdate(prevProps) {
        if (this.props.refresh !== prevProps.refresh && this.props.refresh) {
            this.fetchData();
            this.props.setRefresh(false)
        }

    }
    fetchData = (del) => {
        this.props.fetchstudentsDetails()
            .then(res => {
                if (del) {
                    if (Math.ceil(this.props.students.length / itemsPerPage) < this.state.noOfPages) {
                        this.setState((state) => ({ page: state.page - 1 }))
                    }
                }
                this.setState({ noOfPages: Math.ceil(this.props.students.length / itemsPerPage), data: this.props.students })

            })
    }
    handleChange = (event, value) => {
        this.setState({ page: value });
    };
    requestSearch = (searchedVal) => {
        const filteredItems = this.props.students.filter((item) => {
            return item.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        this.setState({ noOfPages: Math.ceil(filteredItems.length / itemsPerPage), data: filteredItems })
    };

    cancelSearch = () => {
        this.setState({ searched: "" })
        this.requestSearch(this.state.searched);
    };
    handleDeleteOpen = (e) => {
        this.setState({ delete: true, deleteId: e.currentTarget.id })
    }
    handleDeleteClick = () => {
        if (this.state.deleteId) {
            this.props.deleteStudent(this.state.deleteId)
                .then(() => {
                    this.fetchData("del")
                    this.handleDeleteClose()
                })
        }
    }
    handleDeleteClose = () => {
        this.setState({ delete: false })
    }
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid item xs={12} sm={6} className={classes.serachGrid}>
                    <SearchBar
                        className={classes.search} value={this.state.searched}
                        onChange={(searchVal) => this.requestSearch(searchVal)}
                        onCancelSearch={() => this.cancelSearch()}
                        placeholder="filter by name"
                    />
                </Grid>
                <Grid item xs={12} className={classes.ulGrid}>
                    <List > <ListComponent handleDeleteOpen={this.handleDeleteOpen} data={this.state.data} classes={classes} page={this.state.page} itemsPerPage={itemsPerPage} />  </List>
                    <Box component="span">
                        {(this.state.data.length >= 1) ? <Pagination
                            count={this.state.noOfPages}
                            page={this.state.page}
                            onChange={this.handleChange}
                            defaultPage={1}
                            color="primary"
                            size="large"
                            classes={{ ul: classes.paginator }}
                        /> :
                            <Typography variant='h2'>No Data Found!</Typography>
                        }

                    </Box>
                </Grid>
                {this.state.delete && <DeleteDailog open={this.state.delete} handleDeleteClick={this.handleDeleteClick} handleDeleteClose={this.handleDeleteClose} setRefresh={this.props.setRefresh} />}
            </>
        )
    }

};
const mapStateToProps = state => {
    return {
        students: Object.values(state.students)
    }
}
const styledComponent = withStyles(StudentStyles, { withTheme: true })(ListStudentDetails);
export default connect(mapStateToProps, { fetchstudentsDetails, deleteStudent })(styledComponent);