var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var index_exports = {};
__export(index_exports, {
  createMunroFont: () => createMunroFont
});
module.exports = __toCommonJS(index_exports);
var import_core = require("@hanzogui/core");
const createMunroFont = (font = {}) => {
  return (0, import_core.createFont)({
    family: import_core.isWeb ? 'Munro, Munro-fallback, "Fira Code", Monaco, Consolas, "Ubuntu Mono", monospace' : "Munro",
    size,
    lineHeight: Object.fromEntries(Object.entries(font.size || size).map(([k, v]) => [k, typeof v === "number" ? Math.round(v * 1.2 + 6) : v])),
    weight: {
      4: "400"
    },
    ...font
  });
};
const size = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 16,
  7: 18,
  8: 21,
  9: 28,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};