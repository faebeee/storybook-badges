'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var addons = require('@storybook/addons');
var api = require('@storybook/api');
var components = require('@storybook/components');
var React = _interopDefault(require('react'));

var ADDON_ID = 'badges_addon';
var PARAM_KEY = 'badges';
var PANEL_ID = "".concat(ADDON_ID, "/panel");

var MyPanel = function MyPanel() {
  /** @type {BadgeConfig | null} */
  var value = api.useParameter(PARAM_KEY, null);

  if (!value) {
    return null;
  }

  var available_badges = value.icons;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Badges"), value.badges && value.badges.map(function (badge, index) {
    return /*#__PURE__*/React.createElement("img", {
      key: badge,
      width: value.icon_size,
      height: value.icon_size,
      alt: available_badges[badge].text,
      title: available_badges[badge].text,
      src: available_badges[badge].icon
    });
  }));
};

addons.addons.register(ADDON_ID, function (api) {
  var render = function render(_ref) {
    var active = _ref.active,
        key = _ref.key;
    return /*#__PURE__*/React.createElement(components.AddonPanel, {
      active: active,
      key: key
    }, /*#__PURE__*/React.createElement(MyPanel, null));
  };

  var title = 'Badges';
  addons.addons.add(PANEL_ID, {
    type: addons.types.PANEL,
    title: title,
    render: render,
    paramKey: PARAM_KEY
  });
});
