module.exports = {
    plugins: [
        // prefix vendor CSS properties
        require( 'autoprefixer' ),

        // minify .css files in production
        ( process.env.NODE_ENV != 'production' ? null: require( 'cssnano' ) ) ,
    ].filter( Boolean )
};