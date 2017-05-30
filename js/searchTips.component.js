app.controller('searchTipsController', [
  '$mdDialog', 'locale',
  function($mdDialog, locale) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.$mdDialog = $mdDialog;
      ctrl.locale = locale;
    };

    /**
     * Pops up a dialog message containing 
     * the search tips in the selected language.
     */
    ctrl.showSearchTips = function(event) {
      ctrl.$mdDialog.show({
        controller: () => {
          return {
            hide: () => { ctrl.$mdDialog.hide() },
            cancel: () => { ctrl.$mdDialog.cancel() },
          }
        },
        controllerAs: '$ctrl',
        templateUrl: 'custom/MUSE/html/searchTips_' + ctrl.locale.current() + '.html', // View name!
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: false // Only for -xs, -sm breakpoints.
      });
    };

  }
]);

app.component('rexSearchTips', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'searchTipsController',
  templateUrl: 'custom/MUSE/html/searchTips.html' // View name!
});