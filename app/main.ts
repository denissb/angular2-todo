import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

import {provideStore} from '@ngrx/store';
import {todos} from './reducers/todos';

bootstrap(AppComponent, [provideStore({ todos })]).catch(err => console.error(err));
