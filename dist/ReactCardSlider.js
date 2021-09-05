"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

require("./Slider.css");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactCardSlider = props => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "main-slider-container"
  }, /*#__PURE__*/_react.default.createElement(_md.MdChevronLeft, {
    size: 40,
    className: "slider-icon left",
    onClick: slideLeft
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "slider"
  }, props.slides.map((slide, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "slider-card",
      key: index,
      onClick: () => slide.clickEvent()
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "slider-card-image",
      style: {
        backgroundImage: "url(".concat(slide.image, ")"),
        backgroundSize: 'cover'
      }
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "slider-card-title"
    }, slide.title), /*#__PURE__*/_react.default.createElement("p", {
      className: "slider-card-description"
    }, slide.description));
  })), /*#__PURE__*/_react.default.createElement(_md.MdChevronRight, {
    size: 40,
    className: "slider-icon right",
    onClick: slideRight
  }));
};

var _default = ReactCardSlider;
exports.default = _default;