import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './Cart/CartItem';
import { clearCart, updateTotal } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { changeVisibility } from '../features/modal/modalSlice';

export function Cart() {
	const { cartItems, total } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => dispatch(updateTotal()), [cartItems]);

	return (
		<section className='cart'>
			{cartItems.length ? (
				<>
					<h2>Your bag</h2>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}
				</>
			) : (
				<h2>No items</h2>
			)}
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						Total <span>{total}$</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => dispatch(changeVisibility())}
				>
					Clear cart
				</button>
			</footer>
		</section>
	);
}
