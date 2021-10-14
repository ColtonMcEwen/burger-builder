import React, { useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from '../../../store/actions/index';

const logout = (props) => {
    const dispatch = useDispatch();

    const onLogout = useCallback(() => dispatch(actions.logout()), []);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Redirect to="/" />;
};

export default logout;
