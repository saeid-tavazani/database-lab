const pass = document.querySelector(".pass");
const username = document.querySelector(".username");
const family = document.querySelector(".family");
const name = document.querySelector(".name");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUserInfo = {
    password: pass.value,
    name: name.value,
    family: family.value,
    username: username.value,
  };

  fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserInfo),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      alert("Success");
    });
});
