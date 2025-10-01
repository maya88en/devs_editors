"use client";

import React, { useEffect, useState } from "react";
import { fetchUserById, getUserSession } from "../../services/user.service";
import { useParams } from "next/navigation";
import { fetchDrawingRoomById } from "../../services/drawing-room.service";
import Navbar from "../../components/Navbar";
import BoardContainer from "@/app/components/drawing-room/BoardContainer";
// import SampleComponent from "../../components/drawing-room/SampleComponent";
// import BoardContainer2 from "@/app/components/drawing-room2/BoardContainer2";
// import { RoomType } from "@/app/components/dashboard/DashboardBody";
import Editor from "@/app/components/drawing-room/Editor"
// import Link from "next/link";
// import App from "@/app/App";
// import Dash from "@/app/components/drawing-room/Dash"
// import reactRoom from "@/app/components/drawing-room/Learn"
import Learn from "@/app/components/drawing-room/Learn";
import Footer2 from "@/app/components/drawing-room/Footer2";
// import { signInAnonymouslyAndRedirect } from "@/app/lib/initSupabase";



const DrawingRoomPage = () => {
  const { roomId } = useParams();
  const [owner, setOwner] = useState<any | null>(null);
  const [room, setRoom] = useState<[]>([]);
  const [user, setUser] = useState<any>({});
  const [session, setSession] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [participantCount, setParticipantCount] = useState<number>(0);

//   const code = ({ id, name, created_at, isPublic }: RoomType) => {
//     const createAt = new Date(created_at);
//     return (
//       <Link
//         href={`/room/${id}`}
//         className='flex items-start border border-slate-200 p-5 rounded-md justify-between w-full'>
//         <div className='flex gap-3 flex-col w-full'>
//           <h2 className='font-medium text-lg text-blue-500 capitalize'></h2>
//         </div>
//           </Link>
//   );
// };

  useEffect(() => {
    // signInAnonymouslyAndRedirect();
    getUserSession().then((session) => {
      setSession(session);
      setUser(session?.user);
      

      fetchDrawingRoomById(roomId as string).then((room) => {
        const canEnterRoom =
          
          room![0].isPublic || room![0].owner === session?.user?.id ;
          
          
        if (!canEnterRoom) {
          return (window.location.href = "/");
        }
        setRoom(room![0]);
        setIsLoading(false);
        fetchUserById(room![0].owner).then((res) => {
          setOwner(res.user);
          // code;
        });
      });
    });
  }, []);
  // signInAnonymouslyAndRedirect();
  return (
    <main>
      <Navbar
        session={session}
        owner={owner}
        room={room}
        isRoom
        isLoadingRoom={isLoading}
        participantCount={participantCount}
      />
      <div
      className='relative w-full h-full'
      style={{
        background: "black",
      }}
    >
      {isLoading ? (
        <div className='flex justify-center items-center h-screen text-white'>
          <p>One moment. Please...</p>
        </div>
      ) : (
        <div>
          <div className='w-full flex flex-col-reverse xl:flex-row'><BoardContainer room={room} share={""} doc={undefined} /></div>
          {/* <App isRails={true} id={"0b59fd60-273d-489e-b944-cb4226b23953"} /> */}
            {/* <SampleComponent/>; */}  
           {/* <Dash id={"0b59fd60-273d-489e-b944-cb4226b23953"} /> */}
          
          <div className='grid grid-cols-2 gap-4 '>
              <div ><Editor /></div>
              <div><Learn /></div>
          </div> 
          <div><Footer2 /></div>
        </div>
      )}
    </div>
    </main>
  );
};

export default DrawingRoomPage;