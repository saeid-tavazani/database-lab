fetch("http://localhost:3000/api/user/all")
  .then((res) => res.json())
  .then((users) => {
    console.log(users);
    users.forEach((element) => {
      document.querySelector(".olcards").innerHTML += `
        <li style="--cardColor: #fc374e">
        <div class="content">
          <button onclick="removeUser(event ,${element.id})">Delete</button>
          <div class="title">${element.username}</div>
          <button onclick="editeUser(event ,${element.id})">Edit</button>
          <div class="text">
          ${element.name} -   ${element.family}
          </div>
        </div>
      </li>`;
    });
  });
function removeUser(e, id) {
  fetch(`http://localhost:3000/api/user/rem/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data);
      if (data == "true" || data == true) {
        e.currentTarget.parentElement.parentElement.remove();
      }
    });
}

function editeUser(e, id) {
  fetch(`http://localhost:3000/api/user/edit/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(id),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data);
      if (data == "true" || data == true) {
        e.currentTarget.parentElement.parentElement.remove();
      }
    });
}
