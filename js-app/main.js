import { BeanVarietyFormatter } from "./beanvarietylist.js";

const url = "https://localhost:5001/api/beanvariety/";

// const bvDropdown = document.querySelector("#BeanVarietyDropdown");

// getAllBeanVarieties().then((beanVarieties) => {
//   beanVarieties.forEach((beanVariety) => {
//     var option = document.createElement("option");
//     option.value = beanVariety.id;
//     option.text = beanVariety.name;
//     bvDropdown.appendChild(option);
//   });
// });

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => {
    BeanVarietyFormatter(beanVarieties);
  });
});

const submit = document.querySelector("#submit-form");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const bvObj = {
    name: document.querySelector("#Name").value,
    region: document.querySelector("#Region").value,
    notes: document.querySelector("#Notes").value || null,
  };
  if (bvObj.name.length > 0 && bvObj.region.length > 0) {
    addBeanVariety(bvObj);
  }
});

function getAllBeanVarieties() {
  return fetch(url).then((resp) => resp.json());
}

const addBeanVariety = (newBeanVariety) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBeanVariety),
  }).then((res) => res.json());
};
