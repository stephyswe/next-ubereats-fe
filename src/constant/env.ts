export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;

export const GOOGLE_API = process.env.GOOGLE_API ? process.env.GOOGLE_API : '';
export const LOCAL_GRAPHQL = process.env.LOCAL_GRAPHQL;
export const HEROKU_GRAPHQL = process.env.HEROKU_GRAPHQL;
export const LOCALSTORAGE_TOKEN = process.env.LOCALSTORAGE_TOKEN;
