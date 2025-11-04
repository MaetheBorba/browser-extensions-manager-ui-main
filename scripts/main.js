import extensions from "../data.json" with { type: "json" };

function renderCardsContainer() {
  const filter = document
    .querySelector(".js-cards-container")
    .getAttribute("filter");
  let cardsContainerHTML = "";

  if (filter === "all") {
    extensions.forEach((extension) => {
      cardsContainerHTML += `
    <div class="card">
      <div class ="card-top">
        <img class="card-logo" src="${extension.logo}"/>
        <div class="card-text">
          <div class="card-title">${extension.name}</div>
          <div class="card-description">${extension.description}</div>
        </div>
      </div>
      <div class="card-bottom">
        <button class="remove-btn">Remove</button>
        <div class="toggle-active-btn">
          <label></label>
          <input type="checkbox" ${extension.isActive ? "checked" : ""}/> 
        </div>
      </div>
    </div>
  `;
    });
  } else if (filter === "active") {
    extensions.forEach((extension) => {
      if (extension.isActive) {
        cardsContainerHTML += `
          <div class="card">
            <div class ="card-top">
              <img class="card-logo" src="${extension.logo}"/>
              <div class="card-text">
                <div class="card-title">${extension.name}</div>
                <div class="card-description">${extension.description}</div>
              </div>
            </div>
            <div class="card-bottom">
              <button class="remove-btn">Remove</button>
              <div class="toggle-active-btn">
                <label></label>
                <input type="checkbox" ${extension.isActive ? "checked" : ""}/> 
              </div>
            </div>
          </div>
        `;
      }
    });
  } else if (filter === "inactive") {
    extensions.forEach((extension) => {
      if (!extension.isActive) {
        cardsContainerHTML += `
          <div class="card">
            <div class ="card-top">
              <img class="card-logo" src="${extension.logo}"/>
              <div class="card-text">
                <div class="card-title">${extension.name}</div>
                <div class="card-description">${extension.description}</div>
              </div>
            </div>
            <div class="card-bottom">
              <button class="remove-btn">Remove</button>
              <div class="toggle-active-btn">
                <label></label>
                <input type="checkbox" ${extension.isActive ? "checked" : ""}/> 
              </div>
            </div>
          </div>
        `;
      }
    });
  }

  document.querySelector(".js-cards-container").innerHTML = cardsContainerHTML;
}

renderCardsContainer();

document.querySelector(".toggle-scheme").addEventListener("click", () => {
  let scheme = Number(document.querySelector("body").getAttribute("scheme"));
  scheme = Boolean(!scheme);

  document.querySelector("body").setAttribute("scheme", String(Number(scheme)));
});

document.querySelector(".js-filter-all").addEventListener("click", () => {
  console.log("aaa");
  document.querySelector(".js-cards-container").setAttribute("filter", "all");
  renderCardsContainer();
});

document.querySelector(".js-filter-active").addEventListener("click", () => {
  document
    .querySelector(".js-cards-container")
    .setAttribute("filter", "active");
  renderCardsContainer();
});

document.querySelector(".js-filter-inactive").addEventListener("click", () => {
  document
    .querySelector(".js-cards-container")
    .setAttribute("filter", "inactive");
  renderCardsContainer();
});

document.querySelectorAll(".remove-btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.parentElement.remove();
  });
});
