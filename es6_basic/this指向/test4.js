function foo(func) {
  func()
}

function bar() {
  console.log(this); // window
}

foo(bar);