const PRODUCTION_URI = 'https://blog.singun11.wtf';

export const notionPageID = 'c7166ffa5bc742f6b8c9da4aba8bb039';
export const subDomain = '/';

export const previewImagesEnabled = false;

export const port = process.env.PORT || 3000;

export const isProduction = process.env.NODE_ENV === "production"

export const rootDomain = isProduction ? PRODUCTION_URI : subDomain;

export const prefix = rootDomain;
