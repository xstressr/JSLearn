function foo() {
    console.log(this);
  }
  
  var obj = {
    name: "why"
  }
  
  function bind(func, obj) {
    return function() {
      return func.apply(obj, arguments);
    }
  }
  
  var bar = bind(foo, obj);
  
  bar(); // obj对象
  bar(); // obj对象
  bar(); // obj对象