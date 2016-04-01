/**
 * Created by ssp on 31/3/2016.
 */
angular.module('angularfireSlackApp')
  .factory('Channels', function($firebaseArray, FirebaseUrl){
    var ref = new Firebase(FirebaseUrl+'channels');
    var channels = $firebaseArray(ref);

    return channels;
  });
