angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope, $ionicModal, $state, $firebaseAuth, $ionicLoading, $rootScope) {
    console.log('Login Controller Initialized');

    var ref = new Firebase($scope.firebaseUrl);
    var auth = $firebaseAuth(ref);


    $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.createUser = function (user) {
      // console.log("Create User Function called");
      // if (user && user.email && user.password && user.displayname) {
      //     $ionicLoading.show({
      //         template: 'Signing Up...'
      //     });
      //
      //     auth.$createUser({
      //         email: user.email,
      //         password: user.password
      //     }).then(function (userData) {
      //         alert("User created successfully!");
      //         ref.child("users").child(userData.uid).set({
      //             email: user.email,
      //             displayName: user.displayname
      //         });
      //         $ionicLoading.hide();
      //         $scope.modal.hide();
      //     }).catch(function (error) {
      //         alert("Error: " + error);
      //         $ionicLoading.hide();
      //     });
      // } else
      //     alert("Please fill all details");
    }

    $scope.signIn = function (user) {
        // if (user && user.email && user.pwdForLogin) {
        //     $ionicLoading.show({
        //         template: 'Signing In...'
        //     });
        //     auth.$authWithPassword({
        //         email: user.email,
        //         password: user.pwdForLogin
        //     }).then(function (authData) {
        //         console.log("Logged in as:" + authData.uid);
        //         ref.child("users").child(authData.uid).once('value', function (snapshot) {
        //             var val = snapshot.val();
        //             // To Update AngularJS $scope either use $apply or $timeout
        //             $scope.$apply(function () {
        //                 $rootScope.displayName = val;
        //             });
        //         });
        //         $ionicLoading.hide();
        //         $state.go('home');
        //     }).catch(function (error) {
        //         alert("Authentication failed:" + error.message);
        //         $ionicLoading.hide();
        //     });
        // } else
        //     alert("Please enter email and password both");
    }
  })
  .controller('SearchCtrl',
    ['$scope', '$http', 'queryApi', '$state',
    function ($scope, $http, queryApi, $state) {
      console.log('Search Controller initialized');

      $scope.result;
      $scope.searchWine = '';
      $scope.submitSearch = function(param){
        if(angular.isArray($scope.result)){
          $scope.result.length = 0;
        }
        if($scope.searchWine){
          var url = '?search='+param+'&size=10&offset=20';
          queryApi.queryWine('catalog', url).then(function(remoteData){
            $scope.result = remoteData.Products.List;
            console.info('SCOPE_RESULT', $scope.result);
            console.info('SCOPE_PRODUCT', $scope.result[0].id);
          })
        }
      }
  }])
  .controller('FicheCtrl', function ($scope, $ionicModal, $stateParams, queryApi, $http) {
    console.log('Fiche Controller initialized');
    var id = $stateParams.id;
    console.log($stateParams.id);
    $scope.dataFiche;
    $scope.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    if(id){
      queryApi.queryWine('catalog','?search='+id).then(function(remoteData){
        $scope.dataFiche = remoteData.Products.List;
        // $scope.rating = ($scope.rating.parseInt()) / 20;
        if($scope.dataFiche.Description) $scope.description = $scope.dataFiche.Description;

      })
    }

    $scope.addWine = function(id){
      $ionicModal.fromTemplateUrl('templates/add-wine.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });
    }
  })
  .controller('HomeCtrl', function ($scope, $http, queryApi, $rootScope) {
    console.log('Home Controller initialized');
    // I apply the remote data to the local scope

    $scope.dataApi = {};
    function applyRemoteData( newData ) {
       $scope.dataApi = newData.Products;
       console.log($scope.dataApi);
    }

    function loadData(){
     queryApi.queryWine('catalog', '?search=mondavi+cab&size=5&offset=10').then(function(remoteData){
       applyRemoteData(remoteData);
     })
    }
    loadData();



  });
