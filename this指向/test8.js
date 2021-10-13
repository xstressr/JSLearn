function foo() {
    console.log(this);
  }
  
  var obj1 = {
    name: "obj1",
    foo: foo
  }
  
  // 讲obj1的foo赋值给bar
  var bar = obj1.foo;
  bar();