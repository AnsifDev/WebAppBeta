let WebRoute = {
  GoTo : function(loc, params) {
    localStorage.setItem("WebRouteParams", JSON.stringify(params));
    window.location.href = loc;
  },
  getParams : function(){
    return localStorage.getItem("WebRouteParams");
  }
}
