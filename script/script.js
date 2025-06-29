fetch("https://center-link-back.vercel.app/api/contador")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("contador").innerText = data.count;
  })
  .catch((error) => {
    console.error("Erro ao buscar contador:", error);
    document.getElementById("contador").innerText = "erro";
  });
