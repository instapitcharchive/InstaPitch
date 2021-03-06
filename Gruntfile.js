module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.initConfig({
    clean: {
      dev: {
        src: 'build/'
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',  //current working directory
        src: ['*.html', 'css/*.css', 'views/**/*.html', 'images/*.jpg'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js'
      },
      angulartest: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['test/**/*test.js'],
        dest: 'test/angular-testbundle.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
      }
    },

    express: {
      options: {
        port: 3000
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      angulartest: {
        files: ['app/js/**/*.js', 'app/index.html', 'app/views/**/*.html'],
        tasks: ['browserify:angulartest'],
        options: {
          spawn:false
        }
      },
      express: {
        files: ['app/js/**/*.js', 'models/*.*', 'routes/*.*', 'app/index.html', 'app/views/**/*.html', 'app/css/*.css', 'app/views/**/*.html', 'server.js', 'models/*.js'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('build',['clean:dev','browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['browserify:angulartest','karma:unit']);
  grunt.registerTask('serve', ['express:dev','watch:express']);
  grunt.registerTask('default',['build','serve']); //'test'
};
