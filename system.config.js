System.config({
  packages: {        
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    '@ngrx/store': {
      main: 'dist/index.js',
      defaultExtension: 'js'
    },
    '@ngrx/devtools': {
      main: 'dist/index.js',
      defaultExtension: 'js'
    }
  },
  map: { 
    '@ngrx/store' : '/node_modules/@ngrx/store',
    '@ngrx/devtools' : '/node_modules/@ngrx/devtools',
    'ramda' : '/node_modules/ramda/dist/ramda.min.js'
  }
});