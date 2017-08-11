app.factory('CovalenceStore.factory', ['ngResource']) 

.factory('miscService', function($resource) {
    return $resource('http://localhost:3000/api/misc');
})