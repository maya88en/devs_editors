// components/SampleComponent.js
// import React, {useEffect} from 'react';





// import { fetchUserById, getUserSession } from "@/app/services/user.service";

// type props = {
//   drawingPen: DrawingPen;
//   setDrawingPen: Function;
// };

// const SampleComponent = () => {

  

  // const { share, setShare } = props;
  // const [isEraserActive, setIsEraserActive] = React.useState(false);
  // const [previousColor, setPreviousColor] = React.useState(""); // Store the previous color

  // const toggleEraser = () => {
  //   if (!isEraserActive) {
  //     // Activate eraser
  //     setPreviousColor(Share.color);
  //     setShare((prevState) => ({
  //       ...prevState,
  //       color: "#ffffff", // Set the eraser color to white
  //     }));
  //     setIsEraserActive(true);
  //   } else {
  //     // Deactivate eraser
  //     setShare((prevState) => ({
  //       ...prevState,
  //       color: previousColor, // Revert to the previous color
  //     }));
  //     setIsEraserActive(false);
  //   }
  // };


  // useEffect(() => {
  //   window.localStorage.foo = "bar";
    

    // function myFunction(p1, p2) {
    //   return p1 * p2;
    // }
    // let result = myFunction(3, 3);
    // document.getElementById("demo").innerHTML = result

     

// const typingForm = document.querySelector(".typing-form");
// const chatContainer = document.querySelector(".chat-list");
// const suggestions = document.querySelectorAll(".suggestion");
// const toggleThemeButton = document.querySelector("#theme-toggle-button");
// const deleteChatButton = document.querySelector("#delete-chat-button");

// State variables
// let userMessage = null;
// let isResponseGenerating = false;

// API configuration

// const apiKey = 'AIzaSyB47oFH2azh4DXsmKExigTjbzXKIf7_D2U';
// const apiKey = process.env.API_KEY;
// const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

// Load theme and chat data from local storage on page load
  // const loadDataFromLocalstorage = () => {
  // const savedChats = localStorage.getItem("saved-chats");

  // Restore saved chats or clear the chat container
//   chatContainer.innerHTML = savedChats || '';
//   document.body.classList.toggle("hide-header", savedChats);

//   chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
// }

// Create a new message element and return it

// const createMessageElement = (content, ...classes) => {
//   const div = document.createElement("div");
//   div.classList.add("message", ...classes);
//   div.innerHTML = content;
//   return div;
// }

// Show typing effect by displaying words one by one
// const showTypingEffect = (text, textElement, incomingMessageDiv) => {
//   const words = text.split(' ');
//   let currentWordIndex = 0;

  // const typingInterval = setInterval(() => {
    // Append each word to the text element with a space
    // textElement.innerText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex++];
    // incomingMessageDiv.querySelector(".icon").classList.add("hide");

    // If all words are displayed
//     if (currentWordIndex === words.length) {
//       clearInterval(typingInterval);
//       isResponseGenerating = false;
//       incomingMessageDiv.querySelector(".icon").classList.remove("hide");
//       localStorage.setItem("saved-chats", chatContainer.innerHTML); // Save chats to local storage
//     }
//     chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
//   }, 75);
// }

// Fetch response from the API based on user message
// const generateAPIResponse = async (incomingMessageDiv) => {
//   // const { user } = await fetchUserById(_userId);
//   const textElement = incomingMessageDiv.querySelector(".text"); // Getting text element

//   try {
    // Send a POST request to the API with the user's message
    // const response = await fetch(API_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ 
    //     contents: [{ 
    //       role: "user", 
    //       parts: [{ text: userMessage }] 
    //     }] 
    //   }),
    // });

//     const data = await response.json();
//     if (!response.ok) throw new Error(data.error.message);

//     // Get the API response text and remove asterisks from it
//     const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
//     showTypingEffect(apiResponse, textElement, incomingMessageDiv); // Show typing effect
//   } catch (error) { // Handle error
//     isResponseGenerating = false;
//     textElement.innerText = error.message;
//     textElement.parentElement.closest(".message").classList.add("error");
//   } finally {
//     incomingMessageDiv.classList.remove("loading");
//   }
// }

// const html = `<div class="message-content">
                  
//                   <p class="text"></p>
//                   <div class="loading-indicator">
//                     <div class="loading-bar"></div>
//                     <div class="loading-bar"></div>
//                     <div class="loading-bar"></div>
//                   </div>
//                 </div>
//                 <span onClick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;

// // Show a loading animation while waiting for the API response
// const showLoadingAnimation = () => {

  
  

//   const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
//   chatContainer.appendChild(incomingMessageDiv);

//   chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
//   generateAPIResponse(incomingMessageDiv);
// }

// const incomingMessageDiv {

// }

// Copy message text to the clipboard
// const copyMessage = (copyButton) => {
//   const messageText = copyButton.parentElement.querySelector(".text").innerText;

//   navigator.clipboard.writeText(messageText);
//   copyButton.innerText = "done"; // Show confirmation icon
//   setTimeout(() => copyButton.innerText = "content_copy", 1000); // Revert icon after 1 second
// }

// Handle sending outgoing chat messages
// const handleOutgoingChat = () => {
//   userMessage = typingForm.querySelector(".typing-input").value.trim() || userMessage;
//   if(!userMessage || isResponseGenerating) return; // Exit if there is no message or response is generating

//   isResponseGenerating = true;

  // const html = <div class="message-content">
  //                 <img class="avatar" src="./app/images/user.jpg" alt="User avatar"> </img>
  //                 <p class="text"></p>
  //               </div>;

//   const outgoingMessageDiv = createMessageElement(html, "outgoing");
//   outgoingMessageDiv.querySelector(".text").innerText = userMessage;
//   chatContainer.appendChild(outgoingMessageDiv);
  
//   typingForm.reset(); // Clear input field
//   document.body.classList.add("hide-header");
//   chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
//   setTimeout(showLoadingAnimation, 500); // Show loading animation after a delay
// }

// Delete all chats from local storage when button is clicked
// window.onload=function(){
// deleteChatButton.addEventListener("click", () => {
//   if (confirm("Are you sure you want to delete all the chats?")) {
//     localStorage.removeItem("saved-chats");
//     loadDataFromLocalstorage();
//   }
// });}

// typingForm.addEventListener("submit", (e) => {
//   e.preventDefault(); 
//   handleOutgoingChat();
// });


// loadDataFromLocalstorage();




  // window.onload = (function () {
    // const share = props;

    
  //   var doc = document.querySelector('.doc'); // Query for the first element with a class of "doc"
  //   doc.contentEditable = true;
  //   doc.focus();
  // })();

  // window.onload=function(){

  //   const express = require("express");
  //   const http = require("http");
  //   const socketIo = require("socket.io");
    // const port = process.env.PORT || 4001;
    // const app = express();
    // const server = http.createServer(app);
    // const io = socketIo(server);
    
    // const socket = io.connect();
    
    //       const codeArea = document.getElementById('code');
    
    //       codeArea.addEventListener('input', () => {
    //         const code = codeArea.value;
    
    //         socket.emit('code change', code);
    //       });
    
    //       socket.on('code change', code => {
    //         codeArea.value = code;
    //       });
    
    // io.on("connection", socket => {
    //   console.log("User connected");
    
    //   socket.on("code change", code => {
    //     io.sockets.emit("code change", code);
    //   });
    
    //   socket.on("disconnect", () => {
    //     console.log("User disconnected");
    //   });
    // });
    
    // server.listen(port, () => console.log(`Listening on port ${port}`));
    
    
          
    
    // }

  // doc = () => {
  //   setEdit(() => ({
  //     SampleComponenet
  //   }));
  // };
  
// });
//     return (           
//       <>
//             <div class="chat-list text-slate-500">
              
//             </div>
//             {/* <p id="demo"></p> */}

//   {/* Typing Area */}
//   <div class="typing-area bg-black">
//   <ul class="project-list mx-auto flex justify-between items-center font-semibold sm:text text-blue-300">
//                 <li><a href='https://youtu.be/ZBCUegTZF7M?si=dLM58F3Kh2U04xb0'>Beginner level</a></li>
              
  //             <li><a
              
  //             href='https://youtu.be/5ZdHfJVAY-s?si=oTQ2qsvwpdXscv0e'
  //             target='_blank'
  //             className=''
  //             >Intermediate Level</a>
  //             </li> </ul>
  //             <h1>this is a text board </h1>
  //   <textarea class="flex items-center bg-black text-white" id="code" style={{width: '500px', height: '500px'}}></textarea>
  //   <h1>this is a text board </h1>
  //   <textarea class="flex items-center bg-black text-white" id="code" style={{width: '500px', height: '500px'}}></textarea>
  //   {/* <script src="/socket.io/socket.io.js"></script> */}
  // <div 
  // className=''>
  //   <header class="header bg-black ">
  //     <h1 class="header__h1"></h1>
  //   </header>
  //   <div class="doc">
  //     <div class="doc__background-ribbon"></div>
  //     <div class="doc__text-editor hidden"></div>
  //   </div>
  //   </div>
  //   <br></br>
  //   <form action="#" class="typing-form">
  //     <div class="input-wrapper flex items-center black">
  //       <input type="text" placeholder="Enter a prompt here" class="typing-input" required />
  //       <br></br>
  //       <button id="send-message-button" class="icon material-symbols-rounded">ok</button>
  //     </div>
  //     <div class="action-buttons flex items-center text-slate-100">
        
  //       <span id="delete-chat-button" class="icon material-symbols-rounded">delete</span>
  //     </div>
  //   </form>
  //   <p class="disclaimer-text flex items-center text-slate-100">
  //     Gemini may display inaccurate info, including about people, so double-check its responses.
  //   </p>
  



  // </div>
       
  //     </>
  //   );
  // };


  
  // export default SampleComponent;