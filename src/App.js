import { CartIcon } from './icons';
import { Cart } from './Cart/Cart';

function App() {
	return (
		<>
			<nav>
				<div className='nav-center'>
					<h3>React toolkit</h3>
					<CartIcon />
				</div>
			</nav>
			<Cart />
		</>
	);
}
export default App;
