app.service('locale', [
  '$location',
  function($location) {

    this.current = function() {
      return $location.search().lang;
    }

  }
]);