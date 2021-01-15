export const appendEllipses = (name, length = 30) => {
  const isNameShortAlready = name.length < length;

  const isEllipsesActive = isNameShortAlready !== true;
  return name.substring(0, length).concat(isEllipsesActive ? `...` : "");
};
export const appendPlural = (word) => {
  if (!word) {
    return `s`;
  } else {
    return word + `s`;
  }
};
