function ToDoList() {
  alert("등록")
}



function AddListUp() {
  let contens = $('#contens').val();

  let temp_html = `
  <div class="content_add">
  <div class="list_group">
    <ul id="list_container" class="todo-list">
    <li class="list">
    <div class="checkbox_title"><div class="checkbox"><img class="flower"></div></div>
    <div class="todolist_container">${contens}</div>\
    <button class="upd_btn">수정</button>
    <button class="del_btn">삭제</button>
  </li>
    </ul>
  </div>
  </div>`;
  $('#listupdate_delete').append(temp_html);
  $('#contens').val('');

}

/*
listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}. false);
*/

function DelList() {
  alert('삭제');
}


function UpdList() {
  alert('수정');
}