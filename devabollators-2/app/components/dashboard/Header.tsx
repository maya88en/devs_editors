// import { signInAnonymouslyAndRedirect } from "@/app/lib/initSupabase";
import React from "react";
import AdSenseAd from '@/app/components/AdSenseAd';


// signInAnonymouslyAndRedirect();
type Props = { session: any; setShowCreateRoomModal: Function };

const Header = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <><section>
      <h1 className='text-slate-600 font-semibold'>
          Who are Devabollators ?
      </h1>
      <br></br>
      <p className=' font-semibold text-blue-400'>
      Devabollatros are Developers as Collaborators. 
        <b>How ?</b>
      Developers choose a room and then collaborate on building a project using <b>easy steps</b>. 
      {/* <p>After that, they earn a <b>Team Resume</b>.</p>  */}

      </p>
      <p> <AdSenseAd adSlot="4631542081" /></p>
      <br></br>
      <h1 className='text-slate-600 font-semibol'>
      Build a Rails Project as A TEAM
      </h1>
      <br></br>
      <p className=' font-semibold text-slate-600'>
      {/* Study plan: Create one Room for "Props", create a 2nd Room for "Hooks", etc  */}
      <b>What are the Steps ?</b>
      </p>

      <h1 className='text-slate-600 font-semibold'>
      STEPS
      </h1>
      <br></br>
      
      
      <ol className='list-decimal list-inside font-semibold text-blue-400'>
        <li>Open <b>Rails Room</b>.</li>
        <li>Find <b>Devabollators</b>.</li>
        <li>Open the <b>Replit</b> link in the room & <b>sign in</b> to your Replit account.</li>
        <li>Create a new project by clicking <b>" + Create App"</b>, and choose 'Rails' or 'React' whatever you want to start your first project with.</li>
        <li>Send an invite to the project to a devabollator with a Replit account to do the project on real-time, following the steps in the Room.</li>
        <li>Devabollate on the <b>colored steps</b> in the room.</li>
        <li>Save team notes on <b>ShareText</b> link in the room.</li>
        <li>Optional: Share the link and password of the <b>ShareText</b> with the mentor to add devabollators.</li>
        <li>If you need a devabo assist, ask for the <b>Mentor</b>.</li>
      </ol>
    </section>

    <section className='w-full flex justify-between items-center'>
        <h3 className=' font-semibold text-blue-400'>
          Welcome back, @{session?.user?.user_metadata?.userName} 👋🏽
        </h3>
        <button
          className='flex items-center font-semibold text-sm px-2.5 py-2 rounded-full gap-1 bg-blue-600 text-white hover:bg-blue-500'
          onClick={() => setShowCreateRoomModal(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='{1.5}'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span>New Room</span>
          
        </button>
      </section></>
  );
};

export default Header;