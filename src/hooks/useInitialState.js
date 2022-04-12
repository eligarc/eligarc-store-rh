import React, { useState } from 'react';
import initialState from '../../initialState';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = product => {
		setState({
			...state,
			cart: [
				...state.cart,
				product
			]
		})
	}

	const removeFromCart = product => {
		setState({
			...state,
			cart: state.cart.filter((p) => p.id !== product.id)
		});
	}

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [
				...state.buyer,
				payload
			]
		})
	}

	const addNewOrder = payload => {
		setState({
			...state,
			orders: [...state.orders, payload]
		})
	}

	return {
		addToCart,
		removeFromCart,
		addToBuyer,
		addNewOrder,
		state
	};
};

export default useInitialState;