module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      temp: ['app/dist/js/libs.js', 'app/dist/js/libs.min.js', 'app/dist/js/scripts.js', 'app/dist/js/scripts.min.js'],
      all: []
    },

    jshint: {
      dist: {
        src: [
          'app/js/**/*.js',
          'app/modules/**/*.js'
        ]
      }
    },

    concat: {
      scripts: {
        src: [
          'app/js/**/*.js',
        ],
        dest: 'app/dist/js/scripts.js'  
      },
      libs: {
        src: [
          'app/libs/jquery/dist/jquery.min.js'
        ],
        dest: 'app/dist/js/libs.min.js',

      },
      all: {
        src: [
          'app/dist/js/libs.min.js',
          'app/dist/js/scripts.min.js'
        ],
        dest: 'app/dist/js/all.min.js'
      }
    },

    uglify: {
      scripts: {
        src: 'app/dist/js/scripts.js',
        dest: 'app/dist/js/scripts.min.js'
      },
      libs: {
        src: 'app/dist/js/libs.js',
        dest: 'app/dist/js/libs.min.js'
      }
    },

    cssmin: {
      all: {
        src: [
          'app/libs/bootstrap/dist/css/bootstrap.min.css',
          'app/css/main.css'
        ],
        dest: 'app/dist/css/styles.min.css'

      }
    },

    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['app/css/*.scss'],
        tasks: ['sass', 'cssmin', 'uglify']
      },
    },

    sass: {
      dist: {
        files: {
          'app/css/main.css' : 'app/css/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    },
    
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s) and Prod.
  grunt.registerTask('default', ['clean:all', 'concat:scripts', 'uglify', 'concat:libs', 'concat:all', 'cssmin', 'clean:temp', 'connect']);

};