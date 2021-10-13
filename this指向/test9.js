//显示绑定
function foo() {
    console.log(this);
  }
  

  foo.call({name: "why"}); // {name: "why"}
  foo.call(123); // Number对象,存放时123