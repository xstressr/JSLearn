let {toString: s1} = 123;
console.log(s1===Number.prototype.toString);

let {toString: s2} = true;
console.log(s2===Boolean.prototype.toString);