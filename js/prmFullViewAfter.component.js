app.controller('prmFullViewAfterController', [
  'sectionOrdering',
  function(sectionOrdering) {

    var ctrl = this;

    ctrl.$onInit = function () {
      ctrl.sectionOrdering = sectionOrdering;
      
      if (ctrl.sectionOrdering.orderSections(ctrl.parentCtrl.services)) 
        console.log('Sections reordered.');
      
    };
  }
]);

app.component('prmFullViewAfter', {
  bindings: {
    parentCtrl: '<',
  },
  controller: 'prmFullViewAfterController'
});