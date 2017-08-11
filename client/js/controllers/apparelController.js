
app.controller('apparelController',function($scope, apparelFactory, purchaseService, SEOService, $location) { 

    SEOService.setSEO({
            title: 'Apparel Products',
            image: 'http://' + $location.host() + 'images/covalence-store-apparel-hero.jpg',
            url: $location.url(),
            description: 'Shop for Clothing Items'
        })

    $scope.thang = 'Apparel'

    $scope.clothes = apparelFactory.query(); 
    console.log($scope.clothes);

    $scope.addToCart = function(c) {
        purchaseService.addNewItem(c);
    }
})