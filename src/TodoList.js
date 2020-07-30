import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import './BoxList.css';

/**
 * BoxList - Place your state that contains all of the boxes here. 
 * This component should render all of the Box components along with the NewBoxForm component
 */

const BoxList = () => {
	const initialState = [];
	const [ boxes, setBoxes ] = useState(initialState);

	const addBox = ({ width, height, backgroundColor }) => {
		setBoxes((boxes) => [ ...boxes, { width, height, backgroundColor, id: uuid() } ]);
	};

	const removeBox = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};

	return (
		<div className="BoxList">
			<h1 className="BoxList-Header">BOXES!!!!</h1>
			<NewBoxForm addBox={addBox} />
			<div className="BoxList-Container">
				{boxes.map((box) => (
					<Box
						width={box.width}
						height={box.height}
						backgroundColor={box.backgroundColor}
						key={box.id}
						id={box.id}
						removeBox={removeBox}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
