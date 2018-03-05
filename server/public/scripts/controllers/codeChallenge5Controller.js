const CC5Controller = app.controller('CC5Controller', ['CC5Service', function(CC5Service){
  let self = this;
  self.chat = CC5Service.chat;
  self.submit = CC5Service.submit;
  self.log = CC5Service.log;
  self.clear = CC5Service.clear
}])//end cc5Controller
