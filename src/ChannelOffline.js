import React from 'react';

const ChannelOffline = ({ channelName, url }) => {
	const inlineStyle = {
		backgroundImage: `url("https://images.unsplash.com/photo-1467196271131-42c8c8499d72?dpr=1&auto=compress,format&fit=crop&w=300&h=300&q=80&cs=tinysrgb&crop=)`,
	}
	return (
		<div className='channel__offline'>
			<div className='channel__online-image' style={inlineStyle}>
				<div className='channel__offline-overlay'>
					<div className='channel__content'>
						<h1 className='channel__heading'>{channelName}</h1>
						<h4 className='channel__subheading'>Offline
							{' '}
							<small><a className='channel__link' href={url} target='_blank'>Visit Channel</a></small>
						</h4>
					</div>
			</div>
			</div>
		</div>
	)
}

export default ChannelOffline;