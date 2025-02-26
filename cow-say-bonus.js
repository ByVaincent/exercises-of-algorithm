const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

// Début de votre code
const cowsay = (str, numberOfChar) => {
  //Fonction pour la justification du texte, retourn un tableau de phrase
  const justifyLeftText = (str) => {
    //Vérifier que la string n'a pas d'espaces vide av ou ap
    str = str.trim();
    const arrayFromStr = str.split(" ");

    const resultArray = [""];

    //gestion de la longueur de ligne
    //création de la variable de test pour le test de longeur de la phrase
    let testSentenceArray = resultArray.slice();

    for (let i = 0; i < arrayFromStr.length; i++) {
      resultArray.push(arrayFromStr[i]);

      let nextWord = arrayFromStr[i + 1];
      if (!nextWord) {
        nextWord = "";
      }
      testSentenceArray.push(nextWord);

      const testSentenceStr = testSentenceArray.join(" ");

      if (testSentenceStr.length > numberOfChar) {
        resultArray[i] = resultArray[i] + "\n";
        testSentenceArray = []; // remise à zéro pour gérer une nouvelle
      }
    }

    let resultArrayInString = resultArray.join(" ");
    const resultArraySentences = resultArrayInString.split("\n");
    return resultArraySentences;
  };

  const justifiedTextArray = justifyLeftText(str);

  let resultStr = "";

  //boucle pour parcourir le tableau de phrase
  for (let j = 0; j < justifiedTextArray.length + 2; j++) {
    //Ajouter à la string le début de la nouvelle ligne
    //cas de la première et dernière ligne
    if (j === 0 || j === justifiedTextArray.length + 1) {
      resultStr += " ";
      for (let l = 0; l < numberOfChar + 5; l++) {
        if (l !== numberOfChar + 4) {
          resultStr += "-";
        } else {
          resultStr += " \n";
        }
      }
    }
    //Cas de la deuxième et avant dernière ligne
    else if (j === 1) {
      for (let m = 0; m < numberOfChar + 4; m++) {
        if (m === 0) {
          resultStr += "/ ";
        } else if (m === numberOfChar + 3) {
          resultStr += " \\\n";
        } else if (!justifiedTextArray[j - 1][m]) {
          resultStr += " ";
        } else {
          resultStr += justifiedTextArray[j - 1][m];
        }
      }
    } else if (j === justifiedTextArray.length) {
      for (let m = 0; m < numberOfChar + 4; m++) {
        if (m === 0) {
          resultStr += "\\ ";
        } else if (m === numberOfChar + 3) {
          resultStr += " /\n";
        } else if (!justifiedTextArray[j - 1][m]) {
          resultStr += " ";
        } else {
          resultStr += justifiedTextArray[j - 1][m];
        }
      }
    }
    //cas du reste
    else {
      //Faire une boucl de longueur numberOfChar + 4(largeur fixe) pour parcourir chaque lettre de la phrase de l'indice j
      for (let k = 0; k < numberOfChar + 4; k++) {
        if (!justifiedTextArray[j]) {
        } else {
          if (k === 0) {
            resultStr += "| ";
          } else if (k === numberOfChar + 3) {
            resultStr += " |\n";
          } else if (!justifiedTextArray[j - 1][k]) {
            resultStr += " ";
          } else {
            resultStr += justifiedTextArray[j - 1][k];
          }
        }
      }
    }
  }
  const cow = `        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;

  return resultStr + cow;
};
// Fin de votre code

console.log(cowsay(str, 30));
