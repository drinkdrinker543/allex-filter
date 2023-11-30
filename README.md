# allex-filter
This is a tool for writing Path of Exile filters. Currently a very rough early version, roadmap to be decided. 

## Contact me on discord if you want to contribute: allex_
Don't contact me if you want help. If this is too difficult for you to setup then you probably can't use it (yet).

# How to write a filter:
Look at `src/filters/my-filter.ts` for an example. Good luck.

# How to compile a filter:
First install dependencies
```
npm install
```

Add a command in package.json to compile your filter. In the example I've called it myfilter and I've provided the path to the filter `./src/filters/my-filter.ts`
```
"scripts": {
  "myfilter": "ts-node ./src/filters/my-filter.ts",
}
```

Use this to run it.
```
npm run myfilter
```