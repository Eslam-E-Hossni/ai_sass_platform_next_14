const colors = require("./colors");
const layout = require("./layout");
const typography = require("./typography");
const animation = require("./animation");
const theme = {
  extend: {
    colors,
    fontFamily: typography.fontFamily,
    lineHeight: typography.lineHeight,
    container: layout.container,
    width: layout.width,
    backgroundImage: layout.backgroundImage,
    animation: animation.animation,
    keyframes: animation.keyframes,
    height: layout.height,
  },
};

module.exports = theme;
