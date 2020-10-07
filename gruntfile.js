module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

//  1. create a grunt file

// this file gruntfile.js, (created)

//  2. minify images


  imagemin: {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'source/images/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'images/'
      }]
    }
  },



//  3. browser reload

 watch: {
   files: ['*.*'],
   options: {
     livereload: true
   }
 },



//  4. compile less to css

  less: {
    development: {
      options: {
        paths: ['source/less/']
      },
      files: {
        'build/css/style.css' : 'source/less/style.less'
      }
    }
  }


  });

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['watch','less','imagemin']);
};
