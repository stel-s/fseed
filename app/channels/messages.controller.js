/**
 * Created by ssp on 31/3/2016.
 */
angular.module('angularfireSlackApp')
  .controller('MessagesCtrl', function(profile, channelName, messages){
    var messagesCtrl = this;
    messagesCtrl.messages = messages;
    messagesCtrl.channelName = channelName;
    messagesCtrl.message = '';
    messagesCtrl.sendMessage = function (){
      if(messagesCtrl.message.length > 0){
        messagesCtrl.messages.$add({
          uid: profile.$id,
          body: messagesCtrl.message,
          timestamp: Firebase.ServerValue.TIMESTAMP
        }).then(function (){
          messagesCtrl.message = '';
        });
      }
    };
  });
