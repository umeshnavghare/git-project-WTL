function beforeSubmit() {
  let outputDate = document.querySelector(".outputDate");
  let inputDate = document.querySelector(".inputDate");
  console.log("inputDate.value", inputDate.value); //string --> date(en_IN)

  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-US");
  outputDate.value = formattedDate;
}
