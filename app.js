//adjacentElementsProduct
function adjacentElementsProduct(inputArray) {
  let numbers = -100;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] >= numbers) {
      numbers = inputArray[i] * inputArray[i + 1];
    }
  }
  return numbers;
}

adjacentElementsProduct([2, 3, -5, -2, 4]);

//alternatingSums
function alternatingSums(a) {
  let sum = a.reduce(
    function (accumulation, value, currentIndex) {
      if (currentIndex % 2 == 0) accumulation[0] += value;
      else accumulation[1] += value;
      return accumulation;
    },
    [0, 0]
  );
  return sum;
}

//Link Shortener
let input = document.querySelector("#input");
let goBtn = document.querySelector("#go");
let output = document.querySelector("#output");

input.addEventListener("submit", async (e) => {
  e.preventDefault();
  output.innerHTML = "";
  let inputUrl = input.innerHTML.value;
  let outputUrl = "";

  try {
    response = await get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    outputUrl = response.data.result.full_short_link;
    output.innerHTML = outputUrl;
  } catch (err) {
    alert(err.message);
  }
});
