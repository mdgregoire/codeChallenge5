app.service('CC5Service', ['$http', function($http){
  console.log('CC5Service created')
  let self = this;
  self.chat = {};
  self.log = {};

  self.submit = function(chat){
    console.log('in self.submit', chat);
    $http({
      method: 'POST',
      url: '/cc5',
      data: chat
    })
    .then(function(response){
      console.log('success in submit post');
      self.display();
    })
  }
  //end self.submit

  self.display = function(){
    console.log('in self.display');
    $http({
      method: 'GET',
      url: '/cc5',
    })
    .then(function(response){
      console.log('success in GET', response.data);

      self.log.messages = response.data;
    })
  }
  //end self.display
  self.display();
}])//end CC5service
