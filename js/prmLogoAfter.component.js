app.controller('prmLogoAfterController', [
  'navigation',
  function(navigation) {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.navigation = navigation;
    };

    ctrl.getIconLink = function() {
      return ctrl.parentCtrl.iconLink;
    };

  }
]);

app.component('prmLogoAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmLogoAfterController',
  template: ` 
    <div class="product-logo product-logo-local" layout="row" layout-align="start center" layout-fill id="banner" tabindex="0" role="banner">
      <md-button aria-label="{{('nui.header.LogoAlt' | translate)}}" ng-click="$ctrl.navigation.navigateToHomePage()">
        <img ng-src="{{$ctrl.getIconLink()}}" alt="{{('nui.header.LogoAlt' | translate)}}"/>
      </md-button>
    </div>
  `
});