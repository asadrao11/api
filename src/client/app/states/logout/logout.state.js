(function() {
  'use strict';

  angular.module('app.states')
    .run(appRun);

  /** @ngInject */
  function appRun(routerHelper, navigationHelper) {
    routerHelper.configureStates(getStates());
    navigationHelper.navItems(navItems());
    navigationHelper.sidebarItems(sidebarItems());
  }

  function getStates() {
    return {
      'logout': {
        url: '/logout',
        controller: StateController,
        controllerAs: 'vm',
        title: 'Logout'
      }
    };
  }

  function navItems() {
    return {};
  }

  function sidebarItems() {
    return {
      'logout': {
        type: 'state',
        state: 'logout',
        label: 'Logout',
        style: 'logout',
        isVisible: isVisible,
        order: 99
      }
    };
  }

  /** @ngInject */
  function isVisible() {
    // Visibility can be conditional
    return true;
  }

  /** @ngInject */
  function StateController(logger, AuthenticationService) {
    var vm = this;

    vm.AuthService = AuthenticationService;
    vm.title = '';

    vm.activate = activate;

    activate();
    vm.AuthService.logout();

    function activate() {
      logger.info('You have been logged out.');
    }
  }
})();
