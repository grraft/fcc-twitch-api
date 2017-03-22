import React from 'react';
import ChannelLoading from './ChannelLoading.js';
import ChannelError from './ChannelError.js';
import ChannelOffline from './ChannelOffline.js';
import ChannelOnline from './ChannelOnline';

const ChannelCard = ({error, loading, online, channelName, ...props}) => {
	console.log('ChannelCard props', error, loading, online, props);
	const node = loading ? <ChannelLoading channelName={channelName} />
		: error ? <ChannelError channelName={channelName} />
		: online ? <ChannelOnline {...props} />
		: <ChannelOffline channelName={channelName} url={props.url} />;

	return (
		<div className='channel-card'>
			{node}
		</div>
	)
}

export default ChannelCard;