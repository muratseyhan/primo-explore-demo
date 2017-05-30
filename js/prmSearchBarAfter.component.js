app.controller('prmSearchBarAfterController', [
  '$element',
  function($element) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.$element = $element;
    };

    ctrl.$postLink = function() {
      ctrl.moveSearchTipsButton();
    };

    ctrl.moveSearchTipsButton = function() {
      let parentElement = ctrl.$element.parent();
      let container = angular.element(parentElement.children()[0].children[0]);
      container.append(ctrl.$element.children()[0]);      
    };

  }
]);

app.component('prmSearchBarAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmSearchBarAfterController',
  templateUrl: 'custom/MUSE/html/prmSearchBarAfter.html',
});