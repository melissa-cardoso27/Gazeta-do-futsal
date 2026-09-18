const data = new Date();

document.getElementById("data").textContent =
    data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });