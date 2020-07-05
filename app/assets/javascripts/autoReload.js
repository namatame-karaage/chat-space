$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = `<div class="Chat-main__message-list>
        <div class="Chat-main__message-box" data-message-id=${message.id}>
          <div class="Chat-main__main">
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
      <div class="Chat-main__message-box" data-message-id=${message.id}>
        <div class="Chat-main__main">
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

  let reloadMessages = function () {
    let last_message_id = $(".Chat-main__message-box:last").data("message-id");
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data: { id: last_message_id },
    })
      .done(function (messages) {
        if (messages.length !== 0) {
          let insertHTML = "";
          $.each(messages, function (i, message) {
            insertHTML += buildHTML(message);
          });
          $(".Chat-main__message-list").append(insertHTML);
          $(".Chat-main__message-list").animate({
            scrollTop: $(".Chat-main__message-list")[0].scrollHeight,
          });
        }
      })
      .fail(function () {
        console.log("error");
      });
  };
  setInterval(reloadMessages, 7000);
});
