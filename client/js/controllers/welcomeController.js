

app.controller('welcomeController', ['$scope', 'SEOService', '$location' ,function($scope, SEOService, $location) {
        console.log("Welcome Page Loaded")
        localStorage.getItem('cart') ? console.log(localStorage) : localStorage.setItem('cart', JSON.stringify([])); 
        
        SEOService.setSEO({
            title: 'Welcome to Covalence',
            image: 'http://' + $location.host() + 'images/covalence-store-home-hero.jpg',
            url: $location.url(),
            description: 'Welcome to the Covalence Store'
        })
    }])