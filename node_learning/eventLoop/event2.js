// 引入events模块
var events = require("events");
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

var eventHandler = function connected() {
  console.log("Connect success!");

  // 触发 data_received 事件
  eventEmitter.emit('data_received');
}

// 绑定事件及事件的处理程序
eventEmitter.on('connection', eventHandler);

eventEmitter.on('data_received', function(){
  console.log("数据接收成功。")
});

// 触发事件
eventEmitter.emit('connection');
