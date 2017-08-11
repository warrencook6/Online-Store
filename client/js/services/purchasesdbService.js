app.factory('purchasesdbService', function($resource) {
    return $resource('http://localhost:3000/api/purchasesdb');
})