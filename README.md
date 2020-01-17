# example-ws-loopback

An example about integrate websocket for reactjs and loopback.
This is a simple product that similar with a blog, include: user, post, comment. Then the comment will be auto loading without reloading after a defined time.
It's just demonstrate how to using websocket for react and loopback API. So please don't pick holes in the code.

## Information

- Using websocket here: https://github.com/websockets/ws
- Apply websocket for loopback at server.
- Write a component websocket for reactjs and sample how to use it.
- Guide how to process all websocket requests base on exist API URLs of Loopback;

## detail & testing

## Sample code

Make a middleware `websocket.js` is the bridge between request server and process response client.

```js

```

Open websocket in the loopback server:

```js
const websocket = require('./middleware/websocket');

...

boot(app, __dirname, function (err)
{
    if (err)
    {
        throw err;
    }

    // start the server if `$ node server.js`
    if (require.main === module)
    {
        //app.start();
        websocket.wsListener(app.start(), app);
    }
});
```

## Authenticate for websocket

I'm not update code for this feature.