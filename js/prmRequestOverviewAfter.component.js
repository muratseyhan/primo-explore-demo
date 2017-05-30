app.controller('prmRequestsOverviewAfterController', [
  '$scope', '$element', 'pickUpNumbers',
  function($scope, $element, pickUpNumbers) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.$scope = $scope;
      ctrl.$element = $element;
      ctrl.pickUpNumbers = pickUpNumbers;

      ctrl.parentElement = ctrl.$element.parent()[0];
      ctrl.$scope.$watch(() => ctrl.parentElement.querySelector('p[ng-if="::request.secondLineRight"]'),
        (newVal, oldVal) => {
          if (newVal && newVal !== oldVal) {
            ctrl.pickUpNumbers.insertPickUpNumbers(ctrl.parentElement, ctrl.parentCtrl.requestsService.requestsDisplay, ctrl.selector);
          }
        }
      );

    };

    ctrl.selector = function(element) {
      return element.getElementsByTagName('span');
    };

  }
]);

app.component('prmRequestsOverviewAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmRequestsOverviewAfterController',
});