System.config({
  packages: {        
    app: {
      format: 'register',
      defaultExtension: 'js'
    },
    '@ngrx/store': {
      main: 'dist/index.js',
      defaultExtension: 'js'
    }
  },
  map: { 
    '@ngrx/store' : '/node_modules/@ngrx/store'
  }
});