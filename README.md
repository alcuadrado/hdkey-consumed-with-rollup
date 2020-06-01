# `hdkey` bundled using Rollup

This project is an example of how Rollup doesn't work well with `create-stream`, 
which may be used in `hdkey`.

To see it in action, just run `npm i && npm test`. An error will be printed.

## Possible solution

Instead of using `create-stream` use `hash.js`, at least in the browser.