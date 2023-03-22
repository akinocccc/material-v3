export default function getLightColor(color: string, level: number) {
  const hexReg = /^#[0-9a-fA-F]{6}$/g;
  const rgbReg = /^rgb\([0-255],\s*[0-255],\s*[0-255]\)$/gi;
  if (!hexReg.test(color) && !rgbReg.test(color)) {
    return ["#1d77ff", "#1d77ff"];
  }
  const rgb: number[] = [];
  if (color[0] === "#") {
    color = color.replace("#", "");
    const temp = color.match(/../g) || [];
    temp.forEach((el: string) => {
      rgb.push(parseInt(el, 16));
    });
  } else {
    color = color.replace(/^rgb.*\(/gi, "").replace(/\)/gi, "");
    const temp = color.split(",");
    for (let i = 0; i < 3; i++) {
      rgb[i] = parseInt(temp[i], 10);
    }
  }
  const newRgb: number[] = [];
  for (let i = 0; i < 3; i++) {
    newRgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  }
  return [`rgb(${rgb.join(",")})`, `rgb(${newRgb.join(",")})`];
}
