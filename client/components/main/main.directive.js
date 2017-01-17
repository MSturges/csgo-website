import controller from './main.controller.js';

export default () => {
    return {
        template: require('./main.html'),
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};
