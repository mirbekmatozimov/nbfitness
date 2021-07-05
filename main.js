let questions = document.querySelectorAll(".faq__question");
questions.forEach((question) => {
  let btn = question.querySelector(".question_btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show_text");
      }
    });
    question.classList.toggle("show_text");
  });
  const copyBtn = question.querySelector(".copy_btn");
  const questionText = question.querySelector(".faq__question-text");
  copyBtn.addEventListener("click", () => {
    var textToCopy = questionText.innerText;
    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;
    document.body.appendChild(myTemporaryInputElement);
    myTemporaryInputElement.select();
    document.execCommand("Copy");
    document.body.removeChild(myTemporaryInputElement);
    copyBtn.innerText = "Текст скопирован";
    setTimeout(() => {
      copyBtn.innerText = "Скопировать";
    }, 2000);
  });
});
