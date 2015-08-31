// declare modules

var app = angular.module('lasurim', [
    'Controllers',
    'services',
    'directives',
    'ngRoute',
    'ngCookies',
    'ipCookie',
    'ui.router',
    'ngAnimate'
]);
 
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
 
        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .state('new-user', {
            url: '/new-user',
            controller: 'NewuserController',
            templateUrl: 'views/new-user.html'
        })
        .state('contact', {
            url: '/contact',
            controller: 'ContactController',
            templateUrl: 'views/contact.html'
        })
        .state('register', {
            url: '/register',
            controller: 'RegisterController',
            templateUrl: 'views/register.html'
        })
		 .state('user-validation-form', {
            url: '/user-validation-form',
            controller: 'UserValidationFormController',
            templateUrl: 'views/user-validation-form.html'
        })
		 .state('default', {
            url: '/default',
            controller: 'DefaultController',
            templateUrl: 'views/default.html'
        })
		 .state('forgot-password', {
            url: '/forgot-password',
            controller: 'ForgotPasswordController',
            templateUrl: 'views/forgot-password.html'
        })
		 .state('visitation-request-details', {
            url: '/visitation-request-details',
            controller: 'VisitationRequestDetailsController',
            templateUrl: 'views/visitation-request-details.html'
        })
		 .state('inmates', {
            url: '/inmates',
            controller: 'InmatesController',
            templateUrl: 'views/inmates.html'
        })
		 .state('inmate-searchresult', {
            url: '/inmate-searchresult',
            controller: 'InmateSearchResultController',
            templateUrl: 'views/inmate-searchresult.html'
        })
		 .state('inmate-profile', {
            url: '/inmate-profile',
            controller: 'InmateProfileController',
            templateUrl: 'views/inmate-profile.html'
        })
		.state('inmate-posts', {
            url: '/inmate-posts',
            controller: 'InmatePostsController',
            templateUrl: 'views/inmate-posts.html'
        })
        $urlRouterProvider.otherwise("/");
        /*
		$locationProvider.html5Mode({
          enabled: true
        });
		*/
}]);

app.run(['$rootScope', '$location', 'ipCookie', '$http',
    function ($rootScope, $location, ipCookie, $http) {
      //  $rootScope.Main_Url = 'http://localhost/lasurim/';
        // keep user logged in after page refresh
       /* $rootScope.Globals = ipCookie('globals') || {};
        if ($rootScope.Globals.currentUser) {
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }*/

       /* $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if (($location.path() !== '/login' && $location.path() !== '/register') && !$rootScope.Globals.currentUser) {
                $location.path('/login');
            }
            if($rootScope.Globals.currentUser && $location.path() === '/login'){
                $location.path('home');
            }
        });*/
		$rootScope.$on('$locationChangeStart', function (event, next, current) {
		$rootScope.inmates = false;
		$rootScope.dashboard = false;
		
		if ($location.path() == '/inmates') {
                $rootScope.inmates = true;
            }
		if ($location.path() == '/') {
                $rootScope.dashboard = true;
            }
		});
}]);

app.directive("stickyNav", ['$window', function stickyNav($window){
  function stickyNavLink(scope, element){
    var w = angular.element($window),
        size = element[0].clientHeight,
        top = 50;

    /*
     * on scroll we just check the page offset
     * if it's bigger than the target size we fix the controls
     * otherwise we display them inline
     */
    function toggleStickyNav(){
      if(!element.hasClass('controls-fixed') && $window.pageYOffset > top + size){
        element.addClass('controls-fixed');
      } else if(element.hasClass('controls-fixed') && $window.pageYOffset <= top + size){
        element.removeClass('controls-fixed');
      }
    }

    /*
     * We update the top position -> this is for initial page load,
     * while elements load
     */
    scope.$watch(function(){
      return element[0].getBoundingClientRect().top + $window.pageYOffset;
    }, function(newValue, oldValue){
      if(newValue !== oldValue && !element.hasClass('controls-fixed')){
        top = newValue;
      }
    });

    /*
     * Resizing the window displays the controls inline by default.
     * This is needed to calculate the correct boundingClientRect.
     * After the top is updated we toggle the nav, eventually
     * fixing the controls again if needed.
     */
    w.bind('resize', function stickyNavResize(){
      element.removeClass('controls-fixed');
      top = element[0].getBoundingClientRect().top + $window.pageYOffset;
      toggleStickyNav();
    });
    w.bind('scroll', toggleStickyNav);
  }

  return {
    scope: {},
    restrict: 'A',
    link: stickyNavLink
  };
}]);

app.directive("stickyNav2", ['$window', function stickyNav2($window){
  function stickyNavLink2(scope, element){
    var w = angular.element($window),
        size = element[0].clientHeight,
        top = 100;

    /*
     * on scroll we just check the page offset
     * if it's bigger than the target size we fix the controls
     * otherwise we display them inline
     */
    function toggleStickyNav(){
      if(!element.hasClass('controls-fixed2') && $window.pageYOffset > top + size){
        element.addClass('controls-fixed2');
      } else if(element.hasClass('controls-fixed2') && $window.pageYOffset <= top + size){
        element.removeClass('controls-fixed2');
      }
    }

    /*
     * We update the top position -> this is for initial page load,
     * while elements load
     */
    scope.$watch(function(){
      return element[0].getBoundingClientRect().top + $window.pageYOffset;
    }, function(newValue, oldValue){
      if(newValue !== oldValue && !element.hasClass('controls-fixed2')){
        top = newValue;
      }
    });

    /*
     * Resizing the window displays the controls inline by default.
     * This is needed to calculate the correct boundingClientRect.
     * After the top is updated we toggle the nav, eventually
     * fixing the controls again if needed.
     */
    w.bind('resize', function stickyNavResize(){
      element.removeClass('controls-fixed');
      top = element[0].getBoundingClientRect().top + $window.pageYOffset;
      toggleStickyNav();
    });
    w.bind('scroll', toggleStickyNav);
  }

  return {
    scope: {},
    restrict: 'A',
    link: stickyNavLink2
  };
}]);