var obj = {
  "Hospital": "A Hospital",
  "BillItems": "Medicine",
  "StartDate": "2021-08-23",
  "EndDate": "2021-08-25",
  "BillAmount": "10000"
}
// obj.map((o)=>console.log(o))
for (o in obj) {
  console.log(o)
  console.log(obj[o])
}