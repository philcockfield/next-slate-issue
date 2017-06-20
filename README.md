# next-slate-issue
Sample repo to reproduce build issue with Next.js when referencing Slate.js.

- https://github.com/zeit/next.js/
- https://github.com/ianstormtaylor/slate


## Running
Running the next.js project locally in dev mode works:

    yarn dev

![Screenshot](https://user-images.githubusercontent.com/185555/27351768-8b0e7f8c-5652-11e7-86cd-6e96cbe7aa22.png)


Attempting to build the project fails:

    yarn build:next


## Error

        > Failed to build on /var/folders/7m/16s07l214sn5s_69qxsr77p80000gp/T/5335ff43-9124-44ea-ad41-9f21d5a4730b
        { Error: ./~/slate/lib/serializers/html.js
        Module not found: Error: Can't resolve 'react-dom/server' in '/code/next-slate-issue/node_modules/slate/lib/serializers'
        resolve 'react-dom/server' in '/code/next-slate-issue/node_modules/slate/lib/serializers'
        Parsed request is a module
        using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)
            Field 'browser' doesn't contain a valid alias configuration
            aliased with mapping 'react-dom': '/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js' to '/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server'
            using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)
                Field 'browser' doesn't contain a valid alias configuration
            after using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)
                using description file: /code/next-slate-issue/node_modules/react-dom/package.json (relative path: ./dist/react-dom.min.js/server)
                as directory
                    /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server doesn't exist
                no extension
                    Field 'browser' doesn't contain a valid alias configuration
                    /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server doesn't exist
                .js
                    Field 'browser' doesn't contain a valid alias configuration
                    /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.js doesn't exist
                .json
                    Field 'browser' doesn't contain a valid alias configuration
                    /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.json doesn't exist
        [/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server]
        [/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server]
        [/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.js]
        [/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.json]
        @ ./~/slate/lib/serializers/html.js 17:14-41
        @ ./~/slate/lib/index.js
        @ ./lib/pages?entry
        @ multi ./pages?entry
            at /code/next-slate-issue/node_modules/next/dist/server/build/index.js:182:21
            at /code/next-slate-issue/node_modules/webpack/lib/Compiler.js:272:15
            at Compiler.emitRecords (/code/next-slate-issue/node_modules/webpack/lib/Compiler.js:367:37)
            at /code/next-slate-issue/node_modules/webpack/lib/Compiler.js:265:12
            at /code/next-slate-issue/node_modules/webpack/lib/Compiler.js:360:11
            at next (/code/next-slate-issue/node_modules/tapable/lib/Tapable.js:154:11)
            at Compiler.compiler.plugin (/code/next-slate-issue/node_modules/webpack/lib/performance/SizeLimitsPlugin.js:99:4)
            at Compiler.applyPluginsAsyncSeries1 (/code/next-slate-issue/node_modules/tapable/lib/Tapable.js:158:13)
            at Compiler.afterEmit (/code/next-slate-issue/node_modules/webpack/lib/Compiler.js:357:8)
            at Compiler.<anonymous> (/code/next-slate-issue/node_modules/webpack/lib/Compiler.js:352:14)
        errors: [ './~/slate/lib/serializers/html.js\nModule not found: Error: Can\'t resolve \'react-dom/server\' in \'/code/next-slate-issue/node_modules/slate/lib/serializers\'\nresolve \'react-dom/server\' in \'/code/next-slate-issue/node_modules/slate/lib/serializers\'\n  Parsed request is a module\n  using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)\n    Field \'browser\' doesn\'t contain a valid alias configuration\n    aliased with mapping \'react-dom\': \'/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js\' to \'/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server\'\n      using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)\n        Field \'browser\' doesn\'t contain a valid alias configuration\n      after using description file: /code/next-slate-issue/node_modules/slate/package.json (relative path: ./lib/serializers)\n        using description file: /code/next-slate-issue/node_modules/react-dom/package.json (relative path: ./dist/react-dom.min.js/server)\n          as directory\n            /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server doesn\'t exist\n          no extension\n            Field \'browser\' doesn\'t contain a valid alias configuration\n            /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server doesn\'t exist\n          .js\n            Field \'browser\' doesn\'t contain a valid alias configuration\n            /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.js doesn\'t exist\n          .json\n            Field \'browser\' doesn\'t contain a valid alias configuration\n            /code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.json doesn\'t exist\n[/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server]\n[/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server]\n[/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.js]\n[/code/next-slate-issue/node_modules/react-dom/dist/react-dom.min.js/server.json]\n @ ./~/slate/lib/serializers/html.js 17:14-41\n @ ./~/slate/lib/index.js\n @ ./lib/pages?entry\n @ multi ./pages?entry' ],
        warnings: [] }



