import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

import {provideStore} from '@ngrx/store';
import {todos} from './reducers/todos';

//Devtools
import {instrumentStore, devtoolsConfig} from '@ngrx/devtools';

bootstrap(AppComponent, [
    provideStore({ todos }), 
    instrumentStore(),
    devtoolsConfig({
        position: 'right',
        visible: true,
        size: 0.2
    })
]).catch(err => console.error(err));
