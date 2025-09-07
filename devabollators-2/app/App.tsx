// import React from 'react';
// import Link from "next/link";

// import {RoomType} from "../app/components/dashboard/DashboardBody"
// import Editor from './components/drawing-room/Editor';

// const railsRoom = ({ id="0b59fd60-273d-489e-b944-cb4226b23953", name, created_at, isPublic }: RoomType) => {
//   const createAt = new Date(created_at);
  
//   return (
//     <Link
//       href={`/room/${id="0b59fd60-273d-489e-b944-cb4226b23953"}`}
      
//       className='flex items-start border border-slate-200 p-5 rounded-md justify-between w-full'>
//       <div className='flex gap-3 flex-col w-full'>
//         <h2 className='font-medium text-lg text-blue-500 capitalize'>{name="Rails"} {id="0b59fd60-273d-489e-b944-cb4226b23953"}</h2>
//         <span className='text-xs text-slate-500'>
//           Created at {createAt.getDate()}/{createAt.getMonth()}/
//           {createAt.getFullYear()}
//         </span>
//       </div>
//       <span className='rounded-full text-xs font-medium bg-green-100 py-1 px-2 text-green-600'>
//         {isPublic ? "Public" : "Private"}
//       </span>
//     </Link>
//   );
// };


// interface railsRoomProps {
//   isRails: boolean;
//   id: "0b59fd60-273d-489e-b944-cb4226b23953"
  
// }

// const App: React.FC<railsRoomProps> = ({ isRails }) => {
//   if (isRails)  {
//     railsRoom;
//     return <p>Welcome to rails room
      
//       <Editor />
      
//       </p>;
//   } else {
//     return <p>Please log in.</p>;
//   }
// };


// export default App;





// // import roomId from "../app/room/[roomId]"



// // const MyComponent: React.FC = () => {
// //   if (roomId()) {
// //     return <p></p>;
// //   } else {
// //     return <p>Please log in.</p>;
// //   }
// // };




// // import { useEffect, useState } from "react";
// // import { roomId } from "../app/services/drawing-room.service"

// // function App() {
// //   const [instruments, setInstruments] = useState([]);

// //   useEffect(() => {
// //     getInstruments();
// //   }, []);

// //   async function getInstruments() {
// //     const { data } = await supabase.from("drawing-rooms").select();
// //     setInstruments(data);
// //   }

// //   return (
// //     <ul>
// //       {instruments.map((instrument) => (
// //         <li key={instrument.name}>{instrument.name}</li>
// //       ))}
// //     </ul>
// //   );
// // }

// // export default App;