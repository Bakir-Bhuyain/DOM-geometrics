// function calculateParalellogramArea(){
//       // const baseInput = document.getElementById('paralellogram-base');
//       // const baseText = baseInput.value;
//       // const base = parseFloat(baseText);
//       // console.log(base);
//       const base = getParalellogramBase();
//       console.log(base);

// }

// function getParalellogramBase (){
//       const baseInput = document.getElementById('paralellogram-base');
//       const baseText = baseInput.value;
//       const base = parseFloat(baseText);
// }

function calculateParalellogramArea() {
  const base = getInputValueById("paralellogram-base");
  console.log('base value', base);
      const height = getInputValueById('paralellogram-height');
      console.log('height value', height);

      const area  = base*height;
      console.log('area of paralellogram is')
      setInnerTextById('area of paralellogram is', area);
}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
//   console.log(inputValue);
return inputValue;
}


function setInnerTextById (elementId,area){
      const element = document.getElementById(elementId);
      element.innerText = area;
}