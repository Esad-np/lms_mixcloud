
var get_params = function(search_string) {

  var parse = function(params, pairs) {
    var pair = pairs[0];
    var parts = pair.split('=');
    var key = decodeURIComponent(parts[0]);
    var value = decodeURIComponent(parts.slice(1).join('='));

    // Handle multiple parameters of the same name
    if (typeof params[key] === "undefined") {
      params[key] = value;
    } else {
      params[key] = [].concat(params[key], value);
    }

    return pairs.length == 1 ? params : parse(params, pairs.slice(1))
  }

  // Get rid of leading ?
  return search_string.length == 0 ? {} : parse({}, search_string.substr(1).split('&'));
}

var params = get_params(location.search);
console.log(params);
var testurl = "https://www.mixcloud.com/oauth/authorize?client_id=2aB9WjPEAButp4HSxY&redirect_uri=https://danielvijge.github.io/lms_mixcloud/app.html";
if(params["code"]){
	$("#myparam").html(params["code"]);
}else{
	window.location = testurl;
}
