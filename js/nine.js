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
  /*********�޸��������������**********/
  // 0.0 - 1.0 ֮�����ֵ 0�Ǿ�����1��������С
  $("#au1")[0].volume = 1;//ͼ1
  $("#au2")[0].volume = 1;//ͼ2
  $("#au3")[0].volume = 1;//ͼ3
  $("#au4")[0].volume = 1;//ͼ4
  $("#au5")[0].volume = 1;//ͼ5
  $("#au6")[0].volume = 1;//ͼ6
  $("#au7")[0].volume = 1;//ͼ7
  $("#au8")[0].volume = 1;//ͼ8
  $("#au9")[0].volume = 1;//ͼ9
  /*********�޸����������棡����**********/
  setInterval(function(){
    var picNum = [];
    randNum(picNum);
    for(var k =0;k<picNum.length;k++){
      var img = './images/'+picNum[k]+'.gif';
      $("#pic" + (k + 1)).attr('src',img);
    }
  },2000);

});