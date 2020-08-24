const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant, e }) {
    addVariant('only', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
            return `.${e(`only${separator}${className}`)}:only-child`;
        });
    });
});
