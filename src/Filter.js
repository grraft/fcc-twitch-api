import React from 'react';

const Filter = ({ updateFilter, filter }) => {
	return (
		<div>
			<button className={filter==='all' ? 'twitch-button twitch-button--active' : 'twitch-button'}  onClick={updateFilter} value='all'>All</button>
			<button className={filter==='online' ? 'twitch-button twitch-button--active' : 'twitch-button'} onClick={updateFilter} value='online'>Online</button>
			<button className={filter==='offline' ? 'twitch-button twitch-button--active' : 'twitch-button'}  onClick={updateFilter} value='offline'>Offline</button>
		</div>
	)
}

export default Filter;