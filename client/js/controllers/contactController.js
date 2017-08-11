
app.controller('contactController', function ($scope, EmailFactory, SEOService, $location) {
    console.log("Contact Page Loaded")

    SEOService.setSEO({
        title: 'Contact Us',
        image: 'http://' + $location.host() + 'images/covalence-store-home-copy.jpg',
        url: $location.url(),
        description: 'Drop us a line'
    })

    $scope.sendMessage = function () {
        var newEmail = {
            to: 'lclaytont@gmail.com',
            from: $scope.email,
            subject: $scope.subject,
            content: $scope.content
        }
        console.log(newEmail);

        var masterEmail = new EmailFactory(newEmail);
        masterEmail.$save(function () {
            console.log("sent email")
        }, function () {
                console.log("Error sending email")
        })

        $scope.email = '';
        $scope.subject = '';
        $scope.content = '';
    }
})

