module.exports = function(application){ //recebendo pareametro app
    application.get('/', function(req, res){ 
      application.src.controllers.news.index(application, req, res); //caminho que leva pro controller
    });
  }

  //primeiro a ser executado. Um arquivo para cada função. 