function foo() {
    console.log(this);
  }
  
  var obj = {
    name: "why"
  }
  
  var bar = foo.bind(obj);
  
  bar(); // obj对象
  bar(); // obj对象
  bar(); // obj对象