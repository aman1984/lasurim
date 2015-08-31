var app = angular.module('Controllers', []);

app.controller('LoginController', ['$scope', '$http', '$location', '$rootScope', 'ipCookie', 'ipCookie', 'registerAndAuth', function($scope, $http, $location, $rootScope, ipCookie, ipCookie, registerAndAuth){
	$rootScope.show_nav_header = false;
	

   /* $scope.dataLoading = false;
    if(typeof $rootScope.Globals!== 'undefined' && $rootScope.Globals.hasOwnProperty("username")){
        $location.path('home');
    }*/
    /*$scope.login = function(){
        $scope.dataLoading = true;
         registerAndAuth.login($scope.username, $scope.password, function(data){
            if(data.success=="true"){
                $rootScope.Globals = {
                    currentUser:{
                        user_id : data.data.user_id,
                        email_id : data.data.email_id,
                        username : data.data.username,
                        fullname : data.data.fullname
                    }
                };
                // ipCookie.put('globals', $rootScope.Globals);
                ipCookie('globals', $rootScope.Globals);
                $location.path('home');
            }else{
                $scope.error = 'incorrect username or password';
            }
            $scope.dataLoading = false;
        });
    }*/
}]);

app.controller('indexController', ['$scope', '$http', '$rootScope', '$location', '$document', '$window', 'registerAndAuth', function($scope, $http, $rootScope, $location, $document, $window, registerAndAuth){
$rootScope.show_nav_header = true;
$scope.open = false;

$scope.showNav = function($event){
    $scope.open = true;
   $event.stopPropagation();
}
$scope.hideNav = function($event){
    $scope.open = false;
   $event.stopPropagation(); 
}
var documentClickHandler = function (event) {
    
   /* document.getElementsByClassName('navbar-default')[0].classList.remove('expanded');
    document.getElementsByClassName('navbar-default')[0].classList.add('collapsed');*/
    if($scope.open==true){
    $scope.$apply(function(){
        $scope.open = false;
    });
    }
  //  console.log('asasd '+$scope.open);
};

  $document.on("click", documentClickHandler);
  
  $scope.$watch(function () {
    return $window.scrollY;
}, function (scrollY) {
    console.log(scrollY);
});
}]);

app.controller('HomeController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){

}]);

app.controller('NewuserController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
$scope.show_modal = false;
$scope.show_modal_popup = function(){
	$scope.show_modal = !$scope.show_modal;
}

}]);

app.controller('ContactController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);
app.controller('UserValidationFormController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('DefaultController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
$rootScope.show_nav_header = false;

}]);
app.controller('ForgotPasswordController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
$rootScope.show_nav_header = false;

}]);
app.controller('VisitationRequestDetailsController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
$rootScope.show_nav_header = false;

}]);

app.controller('InmatesController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('InmatePostsController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);
app.controller('InmateSearchResultController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);
app.controller('InmateProfileController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){


}]);

app.controller('RegisterController', ['$scope', '$http', '$rootScope', '$location', 'registerAndAuth', function($scope, $http, $rootScope, $location, registerAndAuth){
	$rootScope.show_nav_header = false;
    /*console.log($rootScope.Main_Url);   
    $scope.dataLoading = false;
    $scope.register = function(){
        $scope.dataLoading = true;
        $scope.register_user = registerAndAuth.register($scope.fullname, $scope.username, $scope.email, $scope.password, function(data){
            if(data.success=="true"){
                alert(data.message);
                $location.path('/login');
            }else{
                alert(data.message);
            }
            $scope.dataLoading = false;
        });
    }*/

}]);