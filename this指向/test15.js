var obj = {
    data: [],
    getData: function() {
      var _this = this;
      setTimeout(function() {
        // 模拟获取到的数据
        var res = ["abc", "cba", "nba"];
        _this.data.push(...res);
        console.log(_this);
      }, 1000);
    }
  }
  
  obj.getData();