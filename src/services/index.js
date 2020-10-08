import axios from 'axios';

import { LL_URL } from '../constants';

const getUpcomingLaunches = async () => {
  const response = await axios.get(`${LL_URL}/2.0.0/launch/upcoming`);

  return response.data.results;
};

const isToday = (someDate) => {
  // const today = new Date('2020-10-15T00:00:00Z');
  const today = new Date();
  const launchWindow = new Date(someDate);
  return (
    launchWindow.getDate() === today.getDate() &&
    launchWindow.getMonth() === today.getMonth() &&
    launchWindow.getFullYear() === today.getFullYear()
  );
};

export const launchesToday = async () => {
  const launches = await getUpcomingLaunches();
  const result = launches.filter((launch) => {
    return isToday(launch.window_start) === true;
  });

  return result.length;
};
