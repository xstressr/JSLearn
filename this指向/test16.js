var obj = {
    data: [],
    getData: function() {
      setTimeout(() => {
        // 模拟获取到的数据
        var res = ["abc", "cba", "nba"];
        this.data.push(...res);
        console.log(this)
      }, 1000);
    }
  }


  obj.getData();