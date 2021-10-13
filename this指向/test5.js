//该函数直接被调用，并没有进行任何的对象关联

function foo() {
    console.log(this); // window
  }
  
  foo();