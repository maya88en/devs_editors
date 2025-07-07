
import React, {useEffect} from 'react';


const Editor = () => {
  useEffect(() => {
    window.onload=function(){

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const socket = io.connect();

      const codeArea = document.getElementById('code');

      codeArea.addEventListener('input', () => {
        const code = codeArea.value;

        socket.emit('code change', code);
      });

      socket.on('code change', code => {
        codeArea.value = code;
      });

io.on("connection", socket => {
  console.log("User connected");

  socket.on("code change", code => {
    io.sockets.emit("code change", code);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));


      

}});

  return (
    
    <>


    <div>
    <h1><b>Rails Project Steps</b></h1>
    <br></br>
    <ol class="list-decimal list-inside">
      
      <ol class="list-decimal list-inside bg-pink-500/[71.37%] ">This step is in your VSCode, DO NOT START WITH THIS STEP HERE <br></br>
        <li>Install extensions: vim, Rails, Ruby, <a href="https://gorails.com/setup/"> Rails Stetup</a></li>
        <h2>Type in terminal: </h2>
        <li>ruby -v</li>

        <li>gem install rails</li>
      </ol>
      <div class="bg-sky-500">
      <table>
                <tr><th><b>First steps to create a rails project, do not use the blue steps on Replit, already done for you</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-blue-500 bg-gray-700">Blue steps</td>
                

      <li> rails new my-app</li>
      <li> cd my-app</li>
      <li> In Linux, type code .</li>
      <li> bundle</li>
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
      <div class="bg-orange-200 text-slate-600 font-semibold text-blue-400">
      <table>
                <tr><th><b>Homepage for the application</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-orange-500 bg-gray-700">Orange steps</td>
                <li><b>Routes</b>
      <br></br>
      <p>root to: “main/index”</p>
      {/* # Get the / to the main controller */}
      <br></br>
      {/* <b>get “/”, to: “main/index”</b> */}
      </li>
      <li style={{ textAlign: 'left' }}>In <b>Controllers</b> folder, add a new file <b> main_controller.rb</b> 
      <br></br>
      <br></br>
      <p>class MainController &lt; ApplicationController
      <p>&nbsp;def index</p>
      <p>&nbsp;end</p>
      <p>end</p></p>
      </li>

      <li><b>Views</b>
      <br></br>
      add a folder “main” and a new file “index.html.erb”
      <br></br>
      
      <p>&lt;h1 &gt; Welcome to the homepage &lt;/h1&gt;</p>
      <br></br>
      <p >Run on Replit to see homepage</p>

      <img        
                  alt="homepage"
                  width="800px"
                  height="800px"
                  src={`../homepage.png`}
                 
                  // style={{ borderRadius: "200%" }}
                />

      <br></br>
      <h3 >Before moving to the  <b>Red Steps</b>, ask a devabollator to join you</h3>
      <p> Use the realtime feature of Replit rails</p>
      <p>How ?</p>
      <p>Click on <b>invite</b> on your Replit project page and search for a user who has account on replit</p>
      <p>The other devabollator accepts invite from email, or clicks on <b>Apps</b> and clicks <b>shared with me</b> on his/her Replit account</p>
      <br></br>

      <video width="800" height="800" controls
        
        src={`../devabo.mp4`} type="video"
      
      />
      <br></br>
      <p>After finishing the <b class="text-orange-500">Orange steps</b> with a devabollator, you can share the link and password of the <b>sharetext </b>with the Mentor so that other devabollators can join you later. </p>
      <br></br>
      <p>see the example below of a sharetext</p>
      <br></br>
      <a class="text-green-400" href="https://sharetext.vercel.app/?unique=21079">sharetext</a>
      <p><b>password</b>&nbsp;1234</p>
      <br></br>
      {/* # Go to the browser, refresh the localhost:3000 and it will show the homepage
      </li>
      <li>Now, go back to the routes and change the get “/”, to: “main/index” to <b>root to: “main/index”</b> */}
      </li>
                </th>
                </tr>
                </table>
      </div>

      <div class="bg-red-200">
      <div>
              <table>
                <tr><th> <b># Now, let’s add bootstrap</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-red-500 bg-gray-700">Red steps</td>
                <li># Go to getbootstrap.com</li>
          https://getbootstrap.com/docs/5.3/getting-started/introduction/
          <li>Go to the layouts folder – application.html.erb and put the CSS and JavaScript links</li> 
          <p class ="text-sm text-red-50">link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous"
          <br></br>
          <br></br>
          script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"</p>
          <li># Refresh the browser homepage and it is with a better style</li>
          <li># Now go to the views – main – index.html.erb </li>
            <p>add this class to the div = “d-flex align-items-center justify-content-center”</p> 
          <li>Refresh again, the text is centered</li>
                </th>
                </tr>
                </table>
        
        
          
          </div>
          </div>
          <div class="bg-yellow-400">
          <table>
                <tr><th><b># Now if look at the about us page, the text is aligned to the left, it is better to be wrapped into a container</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-yellow-500 bg-gray-700">Yellow steps</td>
                <li># Go to the layouts, application.html.erb</li>
                  <li> &lt;div class&#61;"container"&gt; 
                  &lt;&#37;&#61; yield &#37;&gt;
                  &lt;/div&gt;
                  </li> 
                  <p># This will wrap all our contents in views in this container</p> 
                </th>
                </tr>
                </table>
            
            
                  </div>
          <div class="bg-green-400">
            <div>
              <table>
                <tr><th><b># Now let’s render the navbar here in the application.html.erb</b></th></tr>
                <tr class="hello">
                <th >
                <td class="float-left text-5xl text-green-500 bg-gray-700">Green steps</td>
                  <li># Go to getbootstrap.com – Components – Navbar</li>
                  <p># Choose a Navbar</p>
                  <li># Instead of directly pasting this in the application.html.erb, we can just render another view inside the layout:
                  &lt;&#37;&#61; render partial: “shared/navbar” &#37;&gt;</li>
                  <p># It is called partial because it is not a full template, we are going to render a portion of the page.</p>
                  <li># So go to views folder, create a new folder called shared, a new file called _navbar.html.erb</li>
                  <p># This means inside of shared; it will look for the _navbar.html.erb</p>
                  <p># It starts with an underscore because it is partial, separate from the regular templates.</p>
                  <li># Paste inside this file the navbar from bootstrap</li>
                  <li>it is not yet functional, we need to change the href=” #” to “/” which is for the Homepage, and the href=”#” to “/about” for the About page</li>
                  <li>Refresh again and click to go to About and Homepage</li>
                  </th>
                
                </tr>
            
            </table>
                  
                  </div>
                  </div>

      
      </ol>
    
    </div>
    <h2>this is a text board </h2>
    <h3>this is a text board </h3>
    <textarea class="flex items-center bg-yellow text-black" id="code" style={{width: '500px', height: '500px'}}></textarea>
    <script src="/socket.io/socket.io.js"></script>

      
    </>
  );

};

export default Editor;
