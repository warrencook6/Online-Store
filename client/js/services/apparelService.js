app.factory('CovalenceStore.factory', ['ngResource'])

.factory('apparelFactory', function($resource) {
    return $resource('http://localhost:3000/api/apparel')
})