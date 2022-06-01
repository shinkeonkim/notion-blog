export const notionPageID = 'c7166ffa5bc742f6b8c9da4aba8bb039';

export const previewImagesEnabled = false;

export const port = process.env.PORT || 3000

export const prefix =
  process.env.NODE_ENV === "production"
    ? "https://www.singun11.wtf/notion-blog"
    : "";
