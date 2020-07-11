import React from 'react';
import { PanZoom } from 'react-easy-panzoom';
import './App.css';

import Grid from './components/Grid/Grid';

function App() {
	return (
		<div className="App">
			<PanZoom
				minZoom={1}
				maxZoom={1}
				boundaryRatioVertical={0.6}
				boundaryRatioHorizontal={0.6}
				enableBoundingBox
			>
				<Grid />
			</PanZoom>
		</div>
	);
}

export default App;
