import angular from 'angular';
import 'angular-ui-router';
import 'angular-bootstrap-npm';
import 'angular-messages';
import 'ngstorage';
import 'angular-stripe';

import layoutDirective from './components/layout/layout.directive.js';
import navbarDirective from './components/navbar/navbar.directive.js';
import mainDirective from './components/main/main.directive.js';
import blurDirective from './utils/directives/blur.util.js';

import exampleService from './services/example.service.js';

import Router from './routes.js';
import './sass/style.scss';

const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : window.location.origin;

angular.module('csgo', [
  'ui.router',
  'ui.bootstrap',
  'angular-stripe',
  'ngMessages',
  'ngStorage'
])
.config((stripeProvider) => {
  stripeProvider.setPublishableKey('pk_test_E6uQN8tYAjUMy2tezE3N0Aq8');
})
.constant('HOST', HOST)
.directive('blur', blurDirective)
.service('exampleService', exampleService)
.directive('layoutDirective', layoutDirective)
.directive('navbarDirective', navbarDirective)
.directive('mainDirective', mainDirective)
.config(Router)
.config(['$qProvider',  ($qProvider) => {
  $qProvider.errorOnUnhandledRejections(false);
}]);
