/**
 * Objective : Gat base, height, of a triangle . calculate the area by using the provided 
   formula and then display the area
   * step 1 : get base value  
   * step 2 : added an id in the base input field 
   * step 3 : use get elementById to access the input field
   * step 4 : get value from the input field 
   * step 5 : convert the value to number by using perseFloat.
 */

function calculateTriangleArea (){
  const triangleBaseInput = document.getElementById('triangle-base')
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);


      //get triangle height
      // const triangleHeightInput = document.getElementById('triangle-height');
      // const triangleBaseHeight = triangleHeightInput.value;
      // const triangleHeight = parseFloat(triangleBaseHeight); 
      // console.log(triangleHeight);

      const triangleHeightInput = document.getElementById('triangle-height');
      const triangleHeightText = triangleHeightInput.value;
      const height = parseFloat(triangleHeightText);
      console.log(height);

      //calculate triangle area 
      const area = 0.5 * base*height;
      console.log('area of a triangle :', area);

      //display triangle area
      const triangleAreaSpan = document.getElementById('triangle-area');
      triangleAreaSpan.innerText = area;
}