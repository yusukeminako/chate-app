$(function(){

  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if( message.image ){ //メッセージに画像が含まれる場合のHTMLを作る
      var html =
        `<div class="main-center__box">
          <div class="main-center__box__user-name">
            ${message.user_name}
          </div>
          <div class="main-cebter__box__date">
            ${message.created_at}
          </div>
          <div class="main-center__content">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    }else{
      var html =
        `<div class="main-center__box">
          <div class="main-center__box__user-name">
            ${message.user_name}
          </div>
          <div class="main-cebter__box__date">
            ${message.created_at}
          </div>
          <div class="main-center__content">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
    };
  }

  $('#new_message').on('submit', function(e){
    // console.log('.new_message')
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.new_message')[0].reset();
      $('.main-center').append(html);
      $('.main-center').animate({scrollTop: $('.main-center')[0].scrollHeight});
      // disabled ボタン要素が押せなくなる、押せるようにしたいのでfalse
      $('.main-bottom__right').prop('disabled', false);

    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })
});