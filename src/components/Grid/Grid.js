import React from 'react';
import classes from './Grid.module.css';

const Grid = () => {
	return (
		<div className={classes.GridContainer}>
			<div className={classes.Odd}>col 1</div>
			<div>col 2</div>
			<div className={classes.Odd}>col 3</div>
			<div>col 4</div>
			<div className={classes.Odd}>col 5</div>
			<div>col 6</div>
			<div className={classes.Odd}>col 7</div>
			<div>col 8</div>
			<div className={classes.Odd}>col 9</div>
			<div>col 10</div>
			<div className={classes.Odd}>col 11</div>
			<div>col 12</div>
		</div>
	);
};

export default Grid;
