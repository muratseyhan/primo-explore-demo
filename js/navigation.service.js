/**
 * A service handling navigation logic. 
 */
app.service('navigation', [
  '$location',
  '$window',
  function($location, $window) {

    /**
     * Navigates to the home page with a reload.
     * @return {boolean} Booelan value indicating if the navigation was successful.
     */
    this.navigateToHomePage = function() {
      var params = $location.search();
      var vid = params.vid; // This would break if view name is not present. 
      // var vid = params.vid || 'MUSE'; 
      var lang = params.lang || "da_DK";
      var split = $location.absUrl().split('/primo-explore/');

      if (split.length === 1) {
        console.log(split[0] + ' : Could not detect the view name!');
        return false;
      }

      var baseUrl = split[0];
      $window.location.href = baseUrl + '/primo-explore/search?vid=' + vid + '&lang=' + lang;
      return true;
    };

  }
]);