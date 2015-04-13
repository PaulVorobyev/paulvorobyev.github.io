module.exports = function(grunt){
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true
                },
                files: {
                    "dist/inc/styles/styles.css": "src/inc/styles/importer.less"
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'src/index.html'
                }
            }
        },

        watch: {
            src: {
                files: ['src/inc/styles/**/*.less', 'src/inc/scripts/**/*.js', 'src/*.html'],
                tasks: ['less','htmlmin']              
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['less', 'htmlmin', 'watch:src']);
};
