import React from 'react';

const Product = ({product, handleAddToCart}) => {
console.log("🚀 ~ file: Product.jsx ~ line 4 ~ Product ~ product", product)
	return (
		<div className="Products-item">
			<img src={product.images[0]} alt={product.title} />
			<div className="Product-item-info">
				<p className="Product-desc"> {product.title} {" "}
					<span className="price"> ${product.price}MXN
					</span>
				</p>
				<p className="desc">{product.description}</p>
			</div>
			<button type='button' onClick={handleAddToCart(product)}>
				Comprar
			</button>
		</div>
	);
}

export default Product;