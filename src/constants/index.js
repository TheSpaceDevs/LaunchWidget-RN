let LL_URL;

if (process.env.NODE_ENV === 'development') {
  LL_URL = 'https://lldev.thespacedevs.com';
} else {
  LL_URL = 'https://ll.thespacedevs.com';
}

export { LL_URL };

export const lightTheme = {
  mainBg: '#FFFFFF',
  fontColor: '#292b2c',
};

export const darkTheme = {
  mainBg: '#121212',
  fontColor: '#E2E2E2',
};
