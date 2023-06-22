// Change the extension to CJS (Common JS) that allow us to export as a Node module 
// or change it to JSON 

/**
 * {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ]
        ]
    }
 */

module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { targets: { runtime: 'automatic' } } ]
    ],
};
