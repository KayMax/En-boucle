function randNum(arr){
  var num = parseInt(Math.random()*10+1);
  if(num==10)
    return randNum(arr);
  for(var i=0;i<arr.length;i++){
    if(num == arr[i])
      return randNum(arr);
  }
  arr.push(num);
  if(arr.length<9)
    return randNum(arr);
}
$(function(){
  /*********修改音量看这里！！！**********/
  // 0.0 - 1.0 之间的数值 0是静音，1是正常大小
  $("#au1")[0].volume = 1;//图1
  $("#au2")[0].volume = 1;//图2
  $("#au3")[0].volume = 1;//图3
  $("#au4")[0].volume = 1;//图4
  $("#au5")[0].volume = 1;//图5
  $("#au6")[0].volume = 1;//图6
  $("#au7")[0].volume = 1;//图7
  $("#au8")[0].volume = 1;//图8
  $("#au9")[0].volume = 1;//图9
  /*********修改音量看上面！！！**********/
  setInterval(function(){
    var picNum = [];
    randNum(picNum);
    for(var k =0;k<picNum.length;k++){
      var img = './images/'+picNum[k]+'.gif';
      $("#pic" + (k + 1)).attr('src',img);
    }
  },2000);

});