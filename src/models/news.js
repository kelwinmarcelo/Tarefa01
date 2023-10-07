var fs = require('fs');

function news() {}

//prototype atribuiu funcionalidade na função
news.prototype.getLastNews = function(callback) {
  fs.readFile('./data/bancos.json', 'utf8', function(err, result) {
    var data = [];
    if (!err) {
      var obj = JSON.parse(result); 

      if (obj.bancos.length > 4) {
        var i = 4;
      } else {
        var i = (obj.bancos.length - 1);
      }
    
      obj.bancos.forEach(function(noticia) {
        if (i >=  0) {
          data[i] = noticia;
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return news;
}