import React, { Component } from 'react';
import './App.css';
import superagent from 'superagent';
import ChannelCard from './ChannelCard.js';
import Filter from './Filter.js';

const twitchAPI = 'https://wind-bow.glitch.me/twitch-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'],
      data: {},
      filter: 'all',
    }
    this.fetchChannelStatus = this.fetchChannelStatus.bind(this);
    this.passFilter = this.passFilter.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    this.state.channels.forEach(c => {
      this.fetchChannelStatus(c);
    });
  }

  fetchChannelStatus(channelName) {
    const self = this; // to access this.setState inside superagent's callback
    let data;
    superagent
      .get(`${twitchAPI}/streams/${channelName}`)
      .end(function(err, res){
        data = Object.assign({}, self.state.data);
        if (err) {
          data[channelName] = {
            error: true,
            loading: false,
            channelName,
          };
          self.setState({ data });
        } else {
          data = Object.assign({}, self.state.data);
          if (res.body.stream) { // online
            data[channelName] = {
              error: false,
              loading: false,
              online: true,
              viewers: res.body.stream.viewers,
              game: res.body.stream.channel.game,
              display_name: res.body.stream.channel.display_name,
              logo: res.body.stream.channel.logo,
              url: res.body.stream.channel.url,
              status: res.body.stream.channel.status,
              channelName,
            }
          } else { // offline
            data[channelName] = {
              error: false,
              loading: false,
              online: false,
              url: res.body._links.channel,
              channelName,
            }
          }
          self.setState({ data });
        }
      });
  }

  passFilter(online) {
    const filter = this.state.filter;
    if (filter==='all' || (online && filter==='online') || (!online && filter==='offline')) {
      return true;
    } else {
      return false;
    }
  }

  updateFilter(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const data = this.state.data;
    const passFilter = this.passFilter;
    return (
      <div className='App'>
        <Filter updateFilter={this.updateFilter} filter={this.state.filter} />
        {
          Object.keys(data).filter(u => { return passFilter(data[u].online) }).map((c,i) => {
            return <ChannelCard key={i} {...data[c]} />
          })
        }
      </div>
    );
  }
}

export default App;
