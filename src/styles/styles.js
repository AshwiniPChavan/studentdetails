export const AppStyles = {
    root: { margin: '0 !important' },
    headerGrid: { justifyContent: 'center', display: 'flex', marginTop: '1rem' },
    header: { letterSpacing: '0.5em', fontSize: '2rem', textAlign: 'center' },
    buttonGrid: { justifyContent: 'center', display: 'flex' },
    button: { height: '2.5rem' }
}


export const CreateDailogStyles = theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
});

export const StudentStyles = theme => ({
    inline: {
        display: 'inline',
    },
    paginator: {
        justifyContent: "center",
        padding: "10px"
    },
    serachGrid: {
        justifyContent: 'center', display: 'flex'
    },
    search: {
        height: '2.5rem'
    },
    deleteButton: {
        alignSelf: 'center',
        marginRight: '2rem',
        height: '2.5rem'
    },
    ulGrid: {
        padding: '0.5rem 18rem !important',
        '@media (max-width: 950px)': {
            padding: '0.5rem 1rem !important',
        },
        boxSizing: 'border-box'
    }
});

export const StudentDetailsFormStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});