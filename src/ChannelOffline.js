import React from 'react';

const ChannelOffline = ({ channelName, url }) => {
	return (
		<div className='channel-offline'>
			Channel offline: {channelName} / <a href={url} target='_blank'>link</a>
		</div>
	)
}

export default ChannelOffline;