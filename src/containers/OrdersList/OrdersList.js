import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const ordersList = (props) => {
    const dispatch = useDispatch();

    const orders = useSelector((state) => state.order.orders);
    const loading = useSelector((state) => state.order.loading);
    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.userId);

    const onFetchOrders = useCallback(
        (token, userId) => dispatch(actions.fetchOrders(token, userId)),
        []
    );

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders]);

    let loadOrders = <Spinner />;
    if (!loading) {
        loadOrders = orders.map((order) => (
            <Order
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
            />
        ));
    }
    return <div>{loadOrders}</div>;
};

export default withErrorHandler(ordersList, axios);
