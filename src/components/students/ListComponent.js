import React from "react";
import { Divider, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Typography } from '@material-ui/core';

const ListComponent = (props) => {
    const renderList = () => {
        const { classes } = props;
        return props.data.slice((props.page - 1) * props.itemsPerPage, props.page * props.itemsPerPage).map(student => {
            return (
                <React.Fragment key={student.id}>
                    <ListItem alignItems="flex-start" key={student.id} style={{ padding: '0' }}>
                        <ListItemAvatar>
                            <Avatar alt={student.name} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={student.name}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                        ID: {student.id}
                                        <br />
                                        Class: {student.class}
                                        <br />
                                        Course: {student.course}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <Button variant="contained" size="small" className={classes.deleteButton}
                            color="primary" id={student.id} onClick={props.handleDeleteOpen}>
                            Delete
                        </Button>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            )
        })
    }

    return (
        renderList()
    )
}

export default ListComponent;