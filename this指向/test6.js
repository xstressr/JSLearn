function foo() {
    console.log(this);
}

var obj = {
    name: "why",
    foo: foo
}

obj.foo()