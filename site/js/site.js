const btn = document.querySelector(".get-btn");
const strText = document.querySelector("#strText");
const input = document.querySelector("#input");



if (input.value != "") {
  btn.onclick = () => {
    $.get(
      window.location.href + `api/random/${input.value}`,
      function (data, status) {
        let str = data;
        strText.innerHTML = str.string;
      }
    );
  };
}
