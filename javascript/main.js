//dom selector
//single element

//multiple element
// const items = document.querySelectorAll(".item")
// items.forEach((item) => console.log(item))

//manipulating dom

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
//         ul.firstElementChild.textContent = "hello"
//         ul.children[1].innerText = "maryam"
//         ul.lastElementChild.innerHTML = "<h1>Me<h1 />"
// //stlye
// const btn = document.querySelector(".btn")
//     btn.style.background = "blue"

//event handler

// const btn = document.querySelector(".btn");
// const form = document.querySelector("#my-form");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     form.style.background === "rgb(102, 85, 102)" ||
//     form.style.background === "#656"
//   ) {
//     form.style.background = "";
//   } else {
//     form.style.background = "#656";
//   }
// });

// const body = document.querySelector("body");
// body.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   body.classList.add("bg-dark");
//   setTimeout(() => {
//     body.classList.remove("bg-dark");
//   }, 3000);
// });

//  body.addEventListener("mouseout", (e) => {
//      e.preventDefault()
//           body.classList.remove("bg-dark")
//     })
//   document.querySelector("body").classList.remove("bg-dark")

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

 function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add('error')    
    msg.innerHTML = "pls fill all fields";
        setTimeout(() => {msg.remove()}, 3000)
  } else {
            // msg.classList.add("success")
            // msg.innerHTML = "success";
            // setTimeout(() => {msg.remove()}, 3000)
        const li = document.createElement('li')
            li.appendChild(document.createTextNode(
                `${nameInput.value} : ${emailInput.value}`
            ))
                userList.appendChild(li)
                // setTimeout(() => {
                //     li.remove()
                // }, 10000)

                // clear input
                nameInput.value = ""
                emailInput.value = ""
        }
}
