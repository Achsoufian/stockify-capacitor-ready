import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.soufian.stockify',
  appName: 'Stockify soufian',
  webDir: 'dist',
  server: {
    url: 'https://stockifysoufiane.netlify.app',
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
