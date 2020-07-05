$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = `<div class="Chat-main__message-list>
      <div class="Chat-main__main">
        <div class="Chat-main__message-box" data-message-id=${message.id}>
            <div class="Chat-main__name">
              ${message.user_name}
            </div>
            <div class="Chat-main__time">
              ${message.created_at}
            </div>
          </div>
        </div>
          <div class="Chat-main__title">
            <p class="Chat-main__title__inner">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`;
      return html;
    } else {
      let html = `<div class="Chat-main__message-list>
      <div class="Chat-main__main">
        <div class="Chat-main__message-box" data-message-id=${message.id}>
          <div class="Chat-main__name">
             ${message.user_name}
          </div>
          <div class="Chat-main__time">
            ${message.created_at}
          </div>
        </div>
      </div>
          <div class="Chat-main__title">
            <p class="Chat-main__title__inner">
              ${message.content}
            </p>
          </div>
        </div>`;
      return html;
    }
  }
  $(".Form").on("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data) {
        let html = buildHTML(data);
        $(".Chat-main__message-list").append(html);
        $("form")[0].reset();
        $(".Chat-main__message-list").animate({
          scrollTop: $(".Chat-main__message-list")[0].scrollHeight,
        });
        $(".Chat-main__message-btn").prop("disabled", false);
      })
      .fail(function () {
        alert("メッセージの送信に失敗しました");
        $(".Chat-main__message-btn").prop("disabled", false);
      });
  });
});
