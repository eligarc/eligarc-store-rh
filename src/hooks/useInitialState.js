import React, { useEffect, useState } from 'react';
import initialState from '../../initialState';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=52';

const useInitialState = () => {
	const [state, setState] = useState(initialState);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const response = await axios(API);
			setProducts(response.data);
		}
		getProducts();
	}, [])
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
		products,
		state
	};
};

export default useInitialState;