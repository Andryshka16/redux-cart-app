import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { updateTotal } from '../features/cart/cartSlice';

export function Cart() {
	const { cartItems, total } = useSelector((store) => store.reducer);
	const dispatch = useDispatch();

	useEffect(() =>
		dispatch(updateTotal()),
		[cartItems]
	)

	return (
		<section className='cart'>
			
			{cartItems.length ?
				<>
					<h2>Your bag</h2>
					{ cartItems.map((item) => <CartItem key={item.id} {...item} />)}
				</>: 
				<h2>No items</h2>
			}
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						Total <span>{total}$</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => dispatch(clearCart())}
				>
					Clear cart
				</button>
			</footer>
		</section>
	);
}
