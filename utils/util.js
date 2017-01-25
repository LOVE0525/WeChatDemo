function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function http(url,callback)
{
     wx.request({
      url: url,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {"Content-Type":"json" }, // 设置请求的 header
      success: function (res) {
        callback(res.data.subjects);
        wx.hideToast();
      },
      fail: function () {
         console.log("执行失败！");
      },
      complete: function () {
        console.log("complete");
      }
    })
}

module.exports = {
  formatTime: formatTime,
  http:http
}
