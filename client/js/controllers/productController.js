
app.controller('productController',
    function($scope, $routeParams, productFactory, purchaseService, SEOService, $location) {
    console.log("Products Page Loaded");
    $scope.product = productFactory.get({id: $routeParams.id});
    console.log($scope.product);

    $scope.addToCart = function(product) {
        purchaseService.addNewItem(product);
    }

    SEOService.setSEO({
            title: 'Product Page',
            image: 'http://' + $location.host() + 'images/covalence-store-home-copy.jpg',
            url: $location.url(),
            description: 'Detailed view of a single product from our store'
        })
})
