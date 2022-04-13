import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
	const { state: { cart }, removeFromCart } = useContext(AppContext);

	const handleRemoveFromCart = product => () => {
		removeFromCart(product);
	};

	const handleSumTotal = () => {
		return cart.reduce((prev, c) =>  prev + c.price, 0);
	}

	return (
		<>
			<Helmet>
				<title>Lista de pedidos - eligarc store</title>
			</Helmet>
			<div className="Checkout">
				<div className="Checkout-content">
					{cart.length > 0
						? <h3>Lista de pedidos</h3>
						: <h3>Sin pedidos ...</h3>}
					{cart.map((p, i) =>
						<div className="Checkout-item" key={i}>
							<div className="Checkout-element">
								<h4>{p.title}</h4>
								<span>
									$
									{p.price}
								</span>
							</div>
							<button type="button" onClick={handleRemoveFromCart(p)}>
								<i className="fa-solid fa-trash-can" />
							</button>
					</div>
					)}
				</div>
				{cart.length > 0 && (
				<div className="Checkout-sidebar">
					<h3>{`Precio Total: $${handleSumTotal()}`}</h3>
					<Link to="/checkout/information">
						<button type="button">Continuar pedido</button>
					</Link>
				</div>
				)}
			</div>
		</>
	);
};

export default Checkout;