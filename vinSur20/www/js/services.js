angular.module('starter.services', ['firebase'])

   .factory("Auth", ["$firebaseAuth", "$rootScope",
     function ($firebaseAuth, $rootScope) {
        var ref = new Firebase(firebaseUrl);
        return $firebaseAuth(ref);
      }
    ])
    .service('queryApi', function($http, $q){

        return{
          queryWine: function(queryTarget, queryParam){
            var urlApi = "http://services.wine.com/api/beta2/service.svc/json/",
                apiKey = "&apikey=8a9d9b23d5868dcba283f35011d90b85";
            // Query vers wine.api.com
            console.log(urlApi + queryTarget + queryParam + apiKey);
            var query = $http({
              method: 'GET',
              url: urlApi + queryTarget + queryParam + apiKey,
              params:{
                action: "get"
              }
            });

            // Récup data
            return (query.then(this.handleSuccess, this.handleError));
          },
          handleError: function( reponse ) {
              // The API reponse from the server should be returned in a
              // nomralized format. However, if the request was not handled by the
              // server (or what not handles properly - ex. server error), then we
              // may have to normalize it on our end, as best we can.
              if (
                  ! angular.isObject( reponse.data ) ||
                  ! reponse.data.message
                  ) {
                  return( $q.reject( "An unknown error occurred." ) );
              }
              // Otherwise, use expected error message.
              return( $q.reject( reponse.data.message ) );
          },
          // I transform the successful reponse, unwrapping the application data
          // from the API reponse payload.
          handleSuccess: function( reponse ) {
              return( reponse.data );
          }
        }

    });
