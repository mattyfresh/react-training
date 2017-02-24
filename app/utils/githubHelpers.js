const axios = require('axios');

const githubID = '';
const githubClientSecret = '';
const params = `?client_id=${githubID}&client_secret=${githubClientSecret}`;

// facade to axios GET req
// @return Promise
const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}${params}`);
};

const getRepos = (username) => {
  // get repo data per username
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
};

const getTotalStars = (repos) => {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count;
  }, 0);
};

const getPlayersData = (player) => {
  // get repos, get stars, return as object
  return getRepos(player.login)
    .then(getTotalStars)
    .then(totalStars => {
      return {
        totalStars: totalStars,
        followers: player.followers,
      };
    });
};

const calculateScore = (players = []) => {
  if (!players.length) {
    console.error('no players mannn');
    return;
  }
  
  // return array with calculated scores
  return [
    (players[0].followers * 3) + players[0].totalStars,
    (players[1].followers * 3) + players[1].totalStars,
  ];
};

const helpers = {
  getPlayersInfo (players = []) {
    // fetch data from github with Axios
    if (players.length) {
      // map over players and get data we want
      return axios.all(players.map(username => getUserInfo(username)))
        .then(info => {
          return info.map(user => user.data);
        })
        .catch(error => console.warn(error));
    }
    else {
      console.error('One or more players were not found... womp');
    }
  },
  battle (players) {
    const playerOneDataPromise = getPlayersData(players[0]);
    const playerTwoDataPromise = getPlayersData(players[1]);

    return axios.all([playerOneDataPromise, playerTwoDataPromise])
      .then(calculateScore)
      .catch(error => console.warn(error));
  },
};


module.exports = helpers;
