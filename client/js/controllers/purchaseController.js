
app.controller('purchaseController', function ($scope, purchaseService, purchasesFactory, purchasesdbService, SEOService, $location) {
    console.log("Purchase Page Loaded");


    $scope.items = JSON.parse(localStorage.cart)
    console.log($scope.items)

    $scope.finalcost = 0;
    calculate();

    $scope.up = function (i) {
        purchaseService.upQuantity(i);
        $scope.finalcost = 0;
        calculate();
    }

    $scope.down = function (i) {
        purchaseService.downQuantity(i);
        $scope.finalcost = 0;
        calculate();
    }

    function calculate() {
        for (var i = 0; i < $scope.items.length; i++) {
            // console.log($scope.items[i]) 
            $scope.finalcost += $scope.items[i].price * $scope.items[i].quantity
        }
        return $scope.finalcost;
    }

    SEOService.setSEO({
            title: 'Purchase Page/Shopping Cart',
            image: 'http://' + $location.host() + 'images/covalence-store-home-copy.jpg',
            url: $location.url(),
            description: 'Shopping Cart'
        })

    $scope.processPayment = function () {

        Stripe.card.createToken({
            number: $scope.cardnumber,
            cvc: $scope.cvc,
            exp_month: $scope.expirationMonth,
            exp_year: $scope.expirationYear
        }, function (status, response) {
            if (response.error) {
                alert('problem!');
            } else {
                var token = response.id;
                $scope.token = token

                var donationObj = {
                    token: $scope.token,
                    amount: $scope.finalcost
                }

                console.log(donationObj)
                var newDonation = new purchasesFactory(donationObj)
                newDonation.$save(function () {
                    console.log('successfully charged card')
                    var dbthing = {};
                    for (var i = 0; i < $scope.items.length; i++) {
                        dbthing.product_id = $scope.items[i].product_id;
                        dbthing.price = $scope.items[i].price;
                        dbthing.stripetransactionid = donationObj.token;
                        var dbpost = new purchasesdbService(dbthing)
                        dbpost.$save(function () {
                            console.log('Posted to purchase table in db')
                        }, function () {
                            console.log("Error trying to post to purchasesdb");
                        })
                    }
                }, function (err) {
                    console.log("error with card " + err.message)
                })
                // var dbthing = {};
                // for (var i = 0; i < $scope.items.length; i++) {
                //     dbthing.product_id = $scope.items[i].product_id;
                //     dbthing.price = $scope.items[i].price;
                //     dbthing.stripetransactionid = donationObj.token;
                //     var dbpost = new purchasesdbService(dbthing)
                //     dbpost.$save(function () {
                //         console.log('Posted to purchase table in db')
                //     }, function (err) {
                //         console.log("Error trying to post to purchasesdb " + err.message );
                //     })
                // }

                localStorage.clear();
                window.location.href = '/';
            }
        }


        )
    }




})
