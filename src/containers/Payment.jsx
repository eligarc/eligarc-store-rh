import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import config from '../config';
import '../styles/components/Payment.css';

const Payments = () => {
	const {state: { cart }, buyer, addNewOrder } = useContext(AppContext);
	const navigate = useNavigate();
	const paypalOptions = {
		clientId: config.clientIdPaypal,
		intent: 'capture',
		currency: 'MXN'
	}

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	}

	const handleSumTotal = () => {
		return cart.reduce((prev, c) =>	prev + c.price, 0);
	}

	const handlePaymentSuccess = (data) => {
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer,
				product: cart,
				payment: data
			}
			addNewOrder(newOrder);
			navigate('/checkout/success')
		}
	}

	return (
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resumen del pedido:</h3>
				{cart.map((item) => (
					<div className="Payment-item" key={item.title}>
						<div className="Payment-element">
							<h4>{item.title}</h4>
							<span>
								$
								{' '}
								{item.price}
							</span>
						</div>
					</div>
				))}
				<div className="Payment-button">
				<PayPalButton
					paypalOptions={paypalOptions}
					buttonStyles={buttonStyles}
					amount={handleSumTotal()}
					onPaymentStart={() => console.log("Start payment")}
					onPaymentSuccess={(data) => handlePaymentSuccess(data)}
					onPaymentError={(msg) => console.log(msg)}
					onPaymentCancel={(OnCancelData) => console.log(OnCancelData)}
				/>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Payments;