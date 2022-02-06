let counter = [];

function count() {
  counter.push("");
  document.getElementById("counter").innerText = counter.length;
}

function cleaner() {
  counter.pop();
  document.getElementById("counter").innerText = counter.length;
}

function checkConfrimed() {
  let conf = $(".confrimed:checked").length;
  document.getElementById("notConfrimed").innerText = counter.length - conf;
}

function add() {
  $("tbody").prepend(`<tr class="thisRow">
  <th scope="row">
    <button class="btn text-white m-1 p-2 deleteR" style="background-color: #dc3545">
        <i class="fa fa-trash"></i>
        Delete
    </button>
    <button class="btn text-white m-1 p-2 cloneR" style="background-color: #007bff">
        <i class="fa fa-copy"></i>
      Clone
    </button>
  </th>
  <td><input type="text" class="ms-2 w-75 numberInput"/></td>
  <td>
    <input type="text" class="ms-2 w-75 typeInput"/>
  </td>
  <td class="radios">
    <div class="d-flex">
        <div class="form-c check mx-2">
            <input class="form-check-input new" type="radio" disabled name="input${counter.length}">
            <label class="form-check-label" for="flexRadioDefault1">
              New
            </label>
          </div>
          <div class="form-check mx-3">
            <input class="form-check-input new" type="radio" disabled name="input${counter.length}">
            <label class="form-check-label" for="flexRadioDefault2">
              In Progress
            </label>
          </div>
          <div class="form-check mx-3">
            <input class="form-check-input confrimed" type="radio" disabled name="input${counter.length}" value='confrimed'>
            <label class="form-check-label" for="flexRadioDefault2">
                Confirmed
            </label>
          </div>
    </div>
  </td>
  </tr>`);
  $(":text").keyup(function () {
    $(":radio").removeAttr("disabled");
  });
  count();
  checkConfrimed();
}

$("#myTable").on("click", ".deleteR", function () {
  $(this).parents(".thisRow").remove();
  cleaner();
});

$("#myTable").on("click", ".cloneR", function () {
  $(this).closest(".thisRow").clone().insertAfter($(this).closest(".thisRow"));
  $(this)
    .closest(".thisRow")
    .children(".radios")
    .children("div")
    .children("div")
    .children(".form-check-input")
    .attr("name", `inputClone${counter.length}`);
  count();
});

$("#myTable").on("click", ".confrimed", function (e) {
  let check = $(this).closest(".thisRow");
  let inputs = $(":text");
  if (e.target.checked) {
    check.find(inputs)[0].disabled = true;
    check.find(inputs)[1].disabled = true;
  }
  checkConfrimed();
});

$("#myTable").on("click", ".new", function (e) {
  let check = $(this).closest(".thisRow");
  let inputs = $(":text");
  if (e.target.checked) {
    check.find(inputs)[0].disabled = false;
    check.find(inputs)[1].disabled = false;
  }
  checkConfrimed();
});
