app.factory('invoiceService', ['$q','$http',function ($q,$http) {

    var global = {};

      global.getinvoiceSettings = function(appId){
         var q=$q.defer();

         $http.get(serverURL+'/invoice/get/settings/'+appId).
           success(function(data, status, headers, config) {
                 q.resolve(data);
           }).
           error(function(data, status, headers, config) {
                 q.reject(data);
           });

           return  q.promise;

      };

      global.getinvoice = function(appId){
         var q=$q.defer();

         $http.get(serverURL+'/invoice/get/'+appId).
           success(function(data, status, headers, config) {
                 q.resolve(data);
           }).
           error(function(data, status, headers, config) {
                 q.reject(data);
           });

           return  q.promise;

      }; 

      global.addOrRemoveSpendingLimit = function(appId,spendingLimit){
         var q=$q.defer();

         $http.put(serverURL+'/invoice/update/settings/'+appId, {spendingLimit:spendingLimit}).
           success(function(data, status, headers, config) {
                 q.resolve(data);
           }).
           error(function(data, status, headers, config) {
                 q.reject(data);
           });

           return  q.promise;

      };     
      
   
    return global;

}]);