import axios from 'axios';
import Config from 'react-native-config';

import { LL_URL } from '../constants';

// const today = new Date('2020-10-30T00:00:00Z');
const today = new Date();

const getUpcomingLaunches = async () => {
  try {
    const response = await axios.get(
      `${LL_URL}/2.1.0/launch/upcoming?hide_recent_previous=true`,
      {
        timeout: 5000,
        headers: {
          Authorization: `Token ${Config.LL_TOKEN}`,
          'User-Agent': 'Is There A Launch Today?',
        },
      },
    );
    return response.data.results;
  } catch (e) {
    if (e.response) {
      if (e.response.status === 429) {
        // eslint-disable-next-line no-alert
        alert('Too many requests from this IP');
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Error contacting the LL2 API');
      console.log(e);
    }

    return [];
  }
};

const isToday = (date) => {
  const launchWindow = new Date(date);
  return (
    launchWindow.getDate() === today.getDate() &&
    launchWindow.getMonth() === today.getMonth() &&
    launchWindow.getFullYear() === today.getFullYear()
  );
};

export const launchesToday = async () => {
  const launches = await getUpcomingLaunches();
  return launches.filter((launch) => {
    return isToday(launch.window_start) === true;
  });
};

export const launches = async () => {
  return getUpcomingLaunches();
};

export const getRemainingTime = (time) => {
  const difference = +new Date(time) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
