// utils/slugify.js
export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-"); // Replace spaces with dashes
