export const getInitials = (name) => {
  if (!name) return "U";
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  return initials;
};
