$(function(){
	$(".main-button").click(function(){
		if(!input_check()){
			return false;
    }
  });
});
function input_check(){
  var result = true;
  // 入力エラー文をリセット
  $(".main-button").empty();
//   // 入力内容セット
//   var papachat = $(".main-button").val();
// // 入力内容チェック
  //名前
  if(is_user_logged_in()){
    $(".main-button").html("　*ログインが必要です。");
    // console.log('.main-button');
    result = false;
  }
};