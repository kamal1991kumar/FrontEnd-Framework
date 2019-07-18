module.exports = {
    presets: [ '@babel/preset-env', '@babel/preset-react' ],
    plugins: [
        '@babel/transform-arrow-functions',
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-class-properties',
        [ '@babel/proposal-decorators', { 'legacy': true } ]
    ]
};
