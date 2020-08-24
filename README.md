# Tailwindcss only-child

Adds the only-child pseudo-class variant to Tailwindcss

## Installation

`npm install tailwindcss-only-child`

```js
// tailwind.config.js

module.exports = {
    variants: {
        height: ['responsive', 'only'],
    },
    plugins: [
        require('tailwindcss-only-child'),
    ],
};
```

## Usage

```html
<div>
    <div class="only:h-full">
        Take the full height when it is the only child
    </div>
</div>
```

## Author

Maxim Vanhove
Web developer at [Starring Jane](https://starringjane.com)

[![Twitter Follow](https://img.shields.io/twitter/follow/MrMaximVanhove.svg?style=social&logo=twitter&label=Follow)](https://twitter.com/MrMaximVanhove)
