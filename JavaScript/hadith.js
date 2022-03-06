fetch("https://api.hadith.sutanlab.id/books/bukhari?range=1-300")
  .then((Response) => Response.json())
  .then((data) => {
    let hadihContent = document.getElementById("hadith-content-in-arabic");
    let i = 0;
    let j = 1;
    hadihContent.textContent = `${data.data.hadiths[i].arab}`;
    let next = document.getElementById("next");
    let previous = document.getElementById("previous");
    let number = document.querySelector(".index");
    next.addEventListener("click", () => {
      hadihContent.textContent = `${data.data.hadiths[(i += 1)].arab}`;
      number.textContent = `${(j += 1)}/300`;
    });
    previous.addEventListener("click", () => {
      hadihContent.textContent = `${data.data.hadiths[(i -= 1)].arab}`;
        number.textContent = `${(j -= 1)}/300`
    });
  });
