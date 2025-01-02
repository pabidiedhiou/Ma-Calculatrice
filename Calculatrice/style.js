const touches = [...document.querySelectorAll(".bouton")];
const listeCodeCle = touches.map((element) => element.dataset.cle);
const affichage = document.querySelector(".ecran");
document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});
document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.cle;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listeCodeCle.includes(valeur)) {
    switch (valeur) {
      case "8":
        affichage.textContent = "";
        break;
      case "13":
        const calcul = eval(affichage.textContent);
        affichage.textContent = calcul;
        break;
      default:
        const indexCodeCle = listeCodeCle.indexOf(valeur);
        const touche = touches[indexCodeCle];
        affichage.textContent += touche.innerHTML;
        break;
    }
  }
};
window.addEventListener("error", (e) => {
  affichage.textContent = "Doule wayy do khole lingay bind !!";
});
