export const BeanVarietyFormatter = (bvArray) => {
  console.log(bvArray);
  let listElement = document.querySelector(".list-container");
  listElement.innerHTML = "";
  bvArray.forEach((bvObject) => {
    listElement.innerHTML += `
      <div class="bvCard">
    <h5 id='bvTitle'>${bvObject.name}</h5>
    </div>`;
  });
};
