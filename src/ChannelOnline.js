import React from 'react';

const ChannelOnline = ({ display_name, game, logo, status, url, viewers }) => {
	const inlineStyle = {
		backgroundImage: `url(${logo})`,
	}

	return (
		<div className='channel__online'>
			<div className='channel__online-image' style={inlineStyle}>
				<div className='channel__online-overlay'>
					<div className='channel__content'>
						<h1 className='channel__heading'>{display_name}</h1>
						<h4 className='channel__subheading'>{game}</h4>
						<hr className='channel__hr' />						
						<div className='channel__status-bar'>
							<div className='channel__status-bar--stat'>{viewers} viewers</div>
							<div className='channel__status-bar--stat'><a className='twitch-button' href={url} target='_blank'>Watch Live</a></div>
						</div>
						<hr className='channel__hr' />
						<p className='channel__description'>
							{status}
						</p>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChannelOnline;