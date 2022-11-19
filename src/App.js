import { useSelector } from 'react-redux';
import { Cart } from './Components/Cart';
import Modal from './Components/Modal';
import { Navigation } from './Components/Navigation';

function App() {

	const { show } = useSelector((store) => store.modal)

	return (
		<>
			<Navigation />
			<Cart />
			{show && <Modal />}
		</>
	);
}
export default App;
