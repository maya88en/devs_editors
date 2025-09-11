import React, { useState } from "react";
import DrawingMenu from "./DrawingMenu";
import WhiteBoard from "./WhiteBoard";
import { signInAnonymouslyAndRedirect } from "@/app/lib/initSupabase";
// import Supa from "@/app/components/drawing-room/Supa"
// import SampleComponent from "./SampleComponent";
// import Editor from "@/app/components/drawing-room/Editor"
// import Learn from "@/app/components/drawing-room/Learn";

// import Test from "./Test";

signInAnonymouslyAndRedirect();

interface BoardContainerProps {
  room: any;
  share: string;
  doc: any; 
}

export interface DrawingPen {
  color: string;
  size: number;
}

const BoardContainer: React.FC<BoardContainerProps> = (props) => {
  const { room } = props;
  const [drawingPen, setDrawingPen,] = useState<DrawingPen>({
    color: "#000000",
    size: 5,
  });

  
  




  return (
    <section className='relative flex flex-col xl:flex-row gap-1 bg-black h-screen'>
      
      
      <DrawingMenu drawingPen={drawingPen} setDrawingPen={setDrawingPen} />
      <WhiteBoard drawingPen={drawingPen} room={room} />
      
      {/* <Editor />
      <Learn /> */}
      {/* <Supa drawingPen={drawingPen} room={room}  />  */}
      
      
      
      {/* <SampleComponent /> */}
      
      
      {/* <SampleComponent drawingPen={drawingPen} setDrawingPen={setDrawingPen} room={room} />; */}
     
    </section>
    
    
  );
};

export default BoardContainer;