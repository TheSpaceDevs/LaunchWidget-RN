import axios from 'axios';

import { LL_URL } from '../constants';

const getUpcomingLaunches = async () => {
  try {
    const response = await axios.get(`${LL_URL}/2.0.0/launch/upcoming`, {
      timeout: 5000,
    });
    return response.data.results;
  } catch (e) {
    alert('Error contacting the LL2 API');
  }
};

const isToday = (someDate) => {
  const today = new Date('2020-10-30T00:00:00Z');
  // const today = new Date();
  const launchWindow = new Date(someDate);
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
