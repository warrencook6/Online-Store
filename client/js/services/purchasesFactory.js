app.factory('purchasesFactory', function($resource) {
    return $resource('http://localhost:3000/api/purchases')
})