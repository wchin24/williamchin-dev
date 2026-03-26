import * as amplitude from '@amplitude/analytics-browser';

const apiKey = import.meta.env.PUBLIC_AMPLITUDE_API_KEY as string;
const serverUrl = import.meta.env.PUBLIC_AMPLITUDE_SERVER_URL as string;

if (apiKey) {
  amplitude.init(apiKey, {
    serverUrl,
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
}

export { amplitude };
