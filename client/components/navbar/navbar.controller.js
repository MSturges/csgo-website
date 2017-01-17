import DonateController from '../modal_components/donate/donate.controller.js';

class NavbarController {
  /**@ngInject*/
  constructor($rootScope, $uibModal, $scope) {
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.$uibModal = $uibModal;

    this.$rootScope.$on('closeNavbarToggle', (event, data) => {
      this.$scope.isNavCollapsed = data;
    });
  }

  openDonateModal() {
    this.$uibModal.open({
      scope: this.$scope,
      show: true,
      template: require('../modal_components/donate/donate.html'),
      controller: DonateController,
      controllerAs: 'vm',
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });
    console.log('open donate modal called...');
  }
};

export default NavbarController;
