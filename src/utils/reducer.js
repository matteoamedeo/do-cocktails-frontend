const reducer = (state, action) => {

    switch (action.type) {
        case 'auth/doLogin': {
            return {
                isLogged: state.isLogged ? false : true,
            };
        }
        case 'auth/doLogout': {
            return {
                isLogged: state.isLogged ? false : true,
            };
        }
    }

    throw Error('Unknown action: ' + action.type);
}

export default reducer