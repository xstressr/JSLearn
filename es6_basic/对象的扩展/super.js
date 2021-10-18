const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
}


Object.setPrototypeOf(obj, proto);
console.log(obj.find());