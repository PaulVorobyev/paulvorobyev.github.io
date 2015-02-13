module.exports = function(grunt){
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    "./inc/styles/styles.css": "./inc/styles/importer.less"
                }
            }
        },

        watch: {
            less: {
                files: ['inc/styles/**/*.less', 'inc/scripts/**/*.js', './*.html'],
                tasks: ['less']              
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['watch:less']);
};