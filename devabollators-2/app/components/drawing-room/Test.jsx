
// import React, {useEffect} from 'react';

// const Test = () => {
//   useEffect(() => {
//     window.localStorage.foo = "bar";

//     // Define the API URL
// // const apiKey = 'https://script.google.com/macros/s/AKfycbw0D42muQZgh-ZjGuBEb_l1_V5QiFOdr2U8D435LbdDC4kl-U9-Kb-eBe3HlVAaz0vMMQ/exec';
// // const apiUrl = `${apiKey}`;
// const api = "https://script.google.com/macros/s/AKfycbw0D42muQZgh-ZjGuBEb_l1_V5QiFOdr2U8D435LbdDC4kl-U9-Kb-eBe3HlVAaz0vMMQ/exec";
// const outputElement = document.getElementById('output');
// // Make a GET request
// window.onload=function(){
// fetch(api)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
 
//   .then(characters => showCharacters(characters.data));
  
//   showCharacters = characters => {

//     document.write("<table id='#output' class='tab'><tr class='tab'><th class='tab'><h2>Name</h2></th><th class='tab'><h2>USN</h2></th><th>");
//     characters.forEach(character => {
//         if(character.Name!="Name"){
//       document.write("<tr id='#output'  style='color:black;font-weight: bold;'><td>" + character.Name + "</td><td class='tab'>" + character.Location + "</td><td>");
//       }

//     outputElement.innerHTML = `<p id="#output"> ${location}</p>`;
//     });
//   }
// }

// });
//     return (           
      
//             <div id="#output">
              
//             </div>
       
      
      
//     );
//   };


  
//   export default Test;