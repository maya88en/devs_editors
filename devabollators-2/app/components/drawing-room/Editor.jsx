
import React, {useEffect} from 'react';
  
const Editor = () => {
  useEffect(() => {
    window.onload=function(){
      
// const {room, roomId} = props;
// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");
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




}});



  return (
    
    <>


    <div>
    <br></br>
    <br></br>
    <h1 class="text-red-500"><b>Rails Project Steps</b></h1>
    <br></br>
    <ol class="list-decimal list-inside">
      
      <ol class="list-decimal list-inside bg-slate-200/[71.37%] text-stone-100 text-sm ">This step is in your VSCode, it is already done for you on Replit. <br></br>
        <li>Install Ruby then type in terminal: ruby -v</li>
        <li>gem install rails, see this link  <a class ="text-blue-500"href="https://gorails.com/setup/"> Rails Stetup</a></li>
      </ol>
      <div class="bg-stone-500 text-stone-200">
      <table>
                <tr><th><b>First steps to create a rails project. Do not use the browny steps on Replit, they are already done for you. Only use if you are building a project on VSCode:</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-1xl text-stone-500 bg-gray-300">Browny steps</td>
                

       <h2>Type in terminal:</h2> 
       <li>rails new my-app, then:  cd my-app </li>
      <p class="text-sm"> To open VSCode in Linux, type <b>'code .'</b> , then: bundle install</p>
      <li> rails s</li>
      <br></br>
      {/* <div><b>Big Steps</b></div> */}
      {/* <li> In routes: get “about”, to: “about#index” </li> */}
      {/* <li> 
        <div class="relative">In Controllers: create new file "about_controller.rb"
      <br></br>
      <pre>class AboutController &lt;ApplicationController</pre>
      <pre>#define method index</pre>
      <pre>&nbsp;def index</pre> 
      <pre>&nbsp;end</pre>
      <pre>end</pre>
      <div class="absolute bottom-0 left-0 text-xs">
        <h3>Explaination</h3>
      <p>When this file is processed in 'controller', it will ask for the 'about' folder in the 'views'. So, create a new folder in the views, & a new file inside called 'index.html.erb'. Write anything for example a header h1: About Us. Run the browser: localhost3000/about by running rails s. It will show the about page in the browser. All that comes in the html format comes from the layouts – application.html.erb, 
     because we didn’t write the html tags in the views file, we just wrote a header h1. The layouts folder is like that wrapper that has everything; like the favicons, stylesheet, JavaScript. </p>
      </div>
      </div>
      </li> */}
      </th>
                </tr>
                </table>
      
      
      </div>
      //text-slate-600 font-semibold text-blue-400//
      <div class="bg-zinc-400 text-blue-200">
      <table>
                <tr><th><b class="text-3xl">Routes, Controllers & Views</b></th></tr>
                <br></br>
                <tr class="hello">
                <th >
                <td class="float-left text-2xl text-blue-300 bg-gray-100">&nbsp; &nbsp; BabyBlue Steps &nbsp; &nbsp;</td>
                
                <li>In <b class="text-1xl text-blue-300">Routes</b> folder, add this code: <b>root "main#index"</b>
      {/* # Get the / to the main controller */}
      {/* <b>get “/”, to: “main/index”</b> */}
      </li>
      <br></br>
      <li style={{ textAlign: 'left' }}>In <b class="text-1xl text-blue-300">Controllers</b> folder, add a new file <b> 'main_controller.rb'</b>, with this code:
      <div class="bg-gray-100 text-blue-300">
      <p>&nbsp; class MainController &lt; ApplicationController
      <p>&nbsp; &nbsp; &nbsp;def index</p>
      <p>&nbsp; &nbsp; &nbsp;end</p>
      <p>&nbsp; end</p></p>
      </div>
      </li>
      <br></br>
      <br></br>
      <li>In <b class="text-1xl text-blue-300">Views</b> folder, add a folder “main” with a file 'index.html.erb' with this line: 
      <br></br>
      <p>&lt;h1 &gt; Welcome to the homepage &lt;/h1&gt;</p>
      <p >Run on Replit to see the homepage: </p>
      <div class="zoom">
      <img        
                  alt="homepage"
                  width="500px"
                  height="500px"
                  src={`../homepage.png`}
                  
                  style={{margin: "auto"}}
                />

      
      {/* <h3 >Before moving to the  <b>Red Steps</b>, ask a devabollator to join you</h3>
      <p> Use the realtime feature of Replit rails</p>
      <p>How ?</p>
      <p>Click on <b>invite</b> on your Replit project page and search for a user who has an account on replit.</p>
      <p>The other devabollator accepts invite by email, or clicks on <b>Apps</b> and clicks <b>shared with me</b> on his/her Replit account.</p> */}
      
      <p>See the below video for two devabollators on realtime: </p>
      
      <video width="500" height="500" controls
        style={{margin: "auto"}}
        src={`../devabo.mp4`} type="video"
      
      />
      </div>
      <p>See the example below of a sharetext:</p>
      
      <a class="text-green-400" href="https://sharetext.vercel.app/?unique=21079">sharetext</a>
      <p class="text-green-400">password &nbsp;1234</p>
      
      {/* # Go to the browser, refresh the localhost:3000 and it will show the homepage
      </li>
      <li>Now, go back to the routes and change the get “/”, to: “main/index” to <b>root to: “main/index”</b> */}
      </li>
                </th>
                </tr>
                </table>
      </div>

      <div class="bg-red-50 text-pink-300 text-1xl">
      <div>
              <table>
                <tr><th> <b class="text-3xl">Bootstrap</b></th></tr>
                <tr class="hello">
                <th >
                
                <li class="bg-gray-400">Go to <a class="text-pink-500 "href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">getbootstrap.com</a>, and copy the CSS & JS links.</li>
          <div class="text-sm">
            
          <p>Go to the 'layouts' folder, 'application.html.erb' file and paste the CSS and JS links: </p> 
           <small>
          <p class ="text-pink-300 bg-gray-400 mt-2 mb-2">&lt;link href= "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"&gt;</p>
          <p class ="text-pink-300 bg-gray-400 mb-4">&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"&gt;</p>
          </small>
          <td class="float-left text-2xl text-purple-200 bg-gray-400">&nbsp; &nbsp;&nbsp;Pinky Steps&nbsp; &nbsp; &nbsp;</td>
          <br></br>
          <p>Refresh the browser's homepage to see the new style.</p>
          <p>Then go to the 'views' folder, open 'main' file, then open 'index.html.erb' file. </p>
          <p>Add this class to the div: “d-flex align-items-center justify-content-center”</p> 
          <p>Refresh again, the text is centered.</p>
          
                
          {/* <div class="bg-yellow-400">
          <table>
                <tr><th><b># Now if look at the about us page, the text is aligned to the left, it is better to be wrapped into a container</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-yellow-500 bg-gray-700">Yellow steps</td> */}
                <p class="mb-2 mt-2">Go again to the 'layouts', open 'application.html.erb' file, and write this code: </p>
                
                  <p class="mb-2 mt-2"> &lt;div class&#61;"container"&gt; &lt;&#37;&#61; yield &#37;&gt; &lt;/div&gt;</p> 
                
                  <p class="mb-9">This will wrap all contents in 'views' in this container</p> 
                  
                  </div>
                  </th>
                </tr>
                </table>
          </div>
          </div>
                {/* </th>
                </tr>
                </table>
            
            
                  </div> */}
          <div class="bg-slate-500 text-blue-200">
            <div>
              <table>
                <tr><th><b class="text-3xl">Render Navbar in 'application.html.erb'</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-2xl bg-gray-100 text-slate-500">&nbsp; &nbsp; &nbsp;Navy Steps &nbsp; &nbsp;</td>
                  <li><b class="text-1xl text-blue-300">Go to getbootstrap.com </b> select: 'Components', and then select 'Navbar'.</li>
                  <p>Then choose a navbar</p>
                  <p>Instead of directly pasting this navbar in the 'application.html.erb', we can just render another 'view' inside the 'layout':</p>
                 <p class="bg-gray-100 text-blue-300"> &lt;&#37;&#61; render partial: “shared/navbar” &#37;&gt;</p>
                  <p>It is called partial because it is not a full template, we are going to render a portion of the page.</p>
                  <p class="bg-gray-100 text-blue-300">So, go to 'views' folder, create a new folder called 'shared', create a new file called '_navbar.html.erb'</p>
                  <p>This means inside of shared; it will look for the _navbar.html.erb</p>
                  <p>It starts with an underscore because it is partial, it is separate from the regular templates.</p>
                  <p class="bg-gray-100 text-blue-300">Paste in this file the navbar from bootstrap</p>
                  <p>It is not yet functional, <b class="bg-gray-100 text-blue-300">change the href= '#' to '/homepage' for the Homepage, and the href='#' to '/about' for the About page</b></p>
                  <p class="text-sm">Refresh again and go to the 'About' and 'Homepage'</p>
                  </th>
                
                </tr>
            
            </table>
                  
                  </div>
                  </div>

      
      </ol>
    
    </div>
    {/* <h2></h2>
    <h3> </h3>
    <textarea class="flex items-center bg-yellow text-black" id="code" style={{width: '500px', height: '500px'}}>
     
    </textarea>
    <script src="/socket.io/socket.io.js"></script> */}

      
    </>
  );

};

export default Editor;
