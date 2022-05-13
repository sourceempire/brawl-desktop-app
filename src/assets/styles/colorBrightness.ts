const lightenDarkenColor = (hexColor: string, amount: number) => {
  let usePound = false;

  if (hexColor[0] == '#') {
    hexColor = hexColor.slice(1);
    usePound = true;
  }

  const num = parseInt(hexColor, 16);

  let red = (num >> 16) + amount;

  if (red > 255) red = 255;
  else if (red < 0) red = 0;

  let blue = ((num >> 8) & 0x00ff) + amount;

  if (blue > 255) blue = 255;
  else if (blue < 0) blue = 0;

  let green = (num & 0x0000ff) + amount;

  if (green > 255) green = 255;
  else if (green < 0) green = 0;

  return (usePound ? '#' : '') + (green | (blue << 8) | (red << 16)).toString(16);
};

export const lightenColor = (hexColor: string, amount: number) => {
  return lightenDarkenColor(hexColor, amount);
};

export const darkenColor = (hexColor: string, amount: number) => {
  return lightenDarkenColor(hexColor, -amount);
};
