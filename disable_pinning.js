Java.perform(function(){
var Pinner = Java.use("d.j$a");
  Pinner.a.overload('java.lang.String, '[Ljava.lang.String').implementation = funciton(a, b)
  {
    console.log("Disabling pin for " + a);
    return this;
  }
});
