import React from 'react';

const Filter = ({ updateFilter, filter }) => {
	return (
		<div>
			<button onClick={updateFilter} value='all'>All</button>
			<button onClick={updateFilter} value='online'>Online</button>
			<button onClick={updateFilter} value='offline'>Offline</button>
		</div>
	)
}

export default Filter;