module.exports = function (context, data) {
  var body = data.body;
  var tokens = data.tokens;
  
  tokens.forEach( function(t) { 
     body = body.replace(t.id, t.value);
  });

  // Response of the function to be used later.
  context.res = {
    body
  };

  context.done();
};