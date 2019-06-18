const HEX = "0123456789abcdef"

export default () => `#${Array.from({ length: 6 }, () => HEX[~~(Math.random() * HEX.length)]).join("")}`
