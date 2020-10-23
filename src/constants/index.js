let LL_URL;

if (process.env.NODE_ENV === 'development') {
  LL_URL = 'https://lldev.thespacedevs.com';
} else {
  LL_URL = 'https://ll.thespacedevs.com';
}

export { LL_URL };

export const colors = {
  lightBg: '#ffffff',
  darkBg: '#6e6e6e',
  fontLight: '#ffffff',
  fontDark: 'black',
};
