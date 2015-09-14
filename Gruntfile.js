module.exports = function(grunt) {
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
			scripts: {
				files: ['public/scripts/app/**/*.js', '!node_modules/**','!bower_components/**'],
				tasks: ['build'],
				options: {
					spawn: false
				},
			},
		},
		
		concat: {
			options: {
				separator: ';'
			},
            dist: {
				src: ['public/scripts/app/**/*.js'],
				dest: 'public/scripts/app.js'
			}
        },
		
		uglify: {
			build: {
				src: 'public/scripts/app.js',
				dest: 'public/scripts/app.min.js'
			}
		},
		
		nodemon: {
			dev: {
				script: 'server.js',
				ignore:  ['node_modules/**','bower_components/**','public/**']
			}
		},
		
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		
		jsbeautifier: {
			"default": {
				src: ['public/scripts/app/**/*.js', 'app/**/*.js'],
				options: {
					
				}
			},
			"git-pre-commit": { 
				src: ['public/scripts/app/**/*.js', 'app/**/*.js'],
				options : {
					mode:"VERIFY_ONLY"
				}
			}
		},
		
		githooks: {
			all: {
				'pre-commit': 'clean'
			}
		}

    });
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks("grunt-jsbeautifier");
	grunt.loadNpmTasks('grunt-githooks');
	
	
	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('build', ['concat', 'uglify']);
	grunt.registerTask('clean', ['jsbeautifier', 'build']);
};