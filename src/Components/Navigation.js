import { CartIcon } from '../icons';
import { useState } from 'react';


function Valuechanger() { 

	const values = ["euro", "dollar", "ruble", "pound"]
	const [state, setState] = useState({ value: values[0], choices: false })

	function showChoices(choices) { 
		setState((state) => ({ ...state, choices}));
	}
	

	return (
		<div onMouseLeave={()=>showChoices(false)}>

			<h3 onMouseOver={() => showChoices(true)}>{state.value}</h3>

			{state.choices && (
				<div
					className='choices'
					onMouseLeave={() => showChoices(false)}
				>
					{values.filter((elm) => elm !== state.value).map((elm) => (
						<h3
							className='choice'
							key={elm}
							onClick={() => { setState({ value: elm, choices: false }) }}
						>
								{elm}
							</h3>
						))}
				</div>
			)}
		</div>
	);
}


export function Navigation() {
	return (
		<nav>
			<div className='nav-center'>
				<h3>React toolkit</h3>
				<div className='nav-left'>
					<CartIcon />
					<Valuechanger/>
				</div>
			</div>
		</nav>
	);
}
