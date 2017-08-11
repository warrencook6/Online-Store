var app = angular.module('CovalenceStore', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
        .when('/products/:id', {
            templateUrl: 'views/productList.html',
            controller: 'productController'
        })
        .when('/apparel', {
            templateUrl: 'views/apparel.html',
            controller: 'apparelController'
        })
        .when('/misc', {
            templateUrl: 'views/misc.html',
            controller: 'miscController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .when('/cart', {
            templateUrl: 'views/purchase.html',
            controller: 'purchaseController'
        })
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
    }])