var obj = {
    data: [],
    getData: () => {
      setTimeout(() => {
        console.log(this); // window
      }, 1000);
    }
  }
  
  obj.getData();