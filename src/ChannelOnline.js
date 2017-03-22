import React from 'react';

const ChannelOnline = ({ display_name, game, logo, status, url, viewers }) => {
	return (
		<div>
			Channel online: {display_name} with {viewers} viewers. 
			<a href={url} target='_blank'>Watch now</a>
		</div>
	)
}

export default ChannelOnline;