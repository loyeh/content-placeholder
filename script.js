const container = document.querySelector(".container");

console.log(container);

function uploadContent() {
  container.innerHTML = ` <div class="image">
  <img src="./images/work.jpeg" alt="" />
</div>
<div class="content">
  <div class="header active"><h3>Lorem ipsum dolor sit amet!</h3></div>
  <div class="text active">Lorem ipsum, dolor sit amet</div>
  <div class="text active">consectetur adipisicing elit.</div>
  <div class="text active">impedit repellat omnis tempore.</div>
</div>
<div class="user">
  <div class="user-image active"><img src="./images/user.jpg" alt="" /></div>
  <div class="user-data active">
    <div class="user-name active">A.A Looyeh</div>
    <div class="date active">MAY 13, 2024</div>
  </div>
</div>`;
}

setTimeout(uploadContent, 2500);
