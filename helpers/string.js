export const appendEllipses = (name, length = 30) => {
  const isNameShortAlready = name.length < length;

  const isEllipsesActive = isNameShortAlready !== true;
  return name.substring(0, length).concat(isEllipsesActive ? `...` : "");
};
