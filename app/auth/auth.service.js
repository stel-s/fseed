/**
 * Created by ssp on 31/3/2016.
 */
angular.module('angularfireSlackApp')
  .factory('Auth', function($firebaseAuth, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);

    return auth;
  });
