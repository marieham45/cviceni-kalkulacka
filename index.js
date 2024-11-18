/*
1. Nejprve vyrobte funkci s názvem handleDigitClick. To bude posluchač, který později navěsíme na všechna tlačítka.
*/

const displeyElement = document.querySelector(".display");

const handleDigitClick = (e) => {
  /*
2. Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho textContent.
    */
  const number = Number(e.target.textContent);

  // 3. Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.

  /*
5. U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.
  */
  if (displeyElement.textContent.length <= 9) {
    /*
    Bonus: Pomocí podmínky if zařiďte, aby číslo na displeji nezačínalo nulou, ledaže je tam nula samotná.
    */
    if (displeyElement.textContent === "0") {
      displeyElement.textContent = "";
    }
    displeyElement.textContent += number;
  }
};

// 4. Pověste váš posluchač na všechna tlačítka s ciframi.
document.querySelector("#btn-7").addEventListener("click", handleDigitClick);
document.querySelector("#btn-8").addEventListener("click", handleDigitClick);
document.querySelector("#btn-9").addEventListener("click", handleDigitClick);
document.querySelector("#btn-4").addEventListener("click", handleDigitClick);
document.querySelector("#btn-5").addEventListener("click", handleDigitClick);
document.querySelector("#btn-6").addEventListener("click", handleDigitClick);
document.querySelector("#btn-1").addEventListener("click", handleDigitClick);
document.querySelector("#btn-2").addEventListener("click", handleDigitClick);
document.querySelector("#btn-3").addEventListener("click", handleDigitClick);
document.querySelector("#btn-0").addEventListener("click", handleDigitClick);
