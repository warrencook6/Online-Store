    app.factory('CovalenceStore.facotry', ['ngResource'])
   
    .factory('EmailFactory', ['$resource', function($resource) {
        return $resource('http://localhost:3000/api/email')
    }])