// import { signInAnonymouslyAndRedirect } from "@/app/lib/initSupabase";
import React from "react";


// signInAnonymouslyAndRedirect();
type Props = { session: any; setShowCreateRoomModal: Function };

const Footer = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <><section className='flex bg-black border border-slate-500 w-full p-4'>
      <h1 className='font-semibold text-blue-400 mt-6' style={{ fontSize: '12px' }}>
          {/* Contact Us: dev0@devabollators.online  */}
          Ask for <b style={{ color: 'red' }}>Free Mentor assist</b> by sending an email to: <u>learn.quickly.coding@gmail.com</u>
      </h1>
      
      
      <div className="text-slate-600 font-semibold  mt-6" style={{ fontSize: '12px' }}>
        Special Thanks for <b>Varshith V Hegde</b> for the sharetext website
      </div>
      
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <a
              href='https://www.facebook.com/share/1R13sJN4KT/?mibextid=wwXIfr'
              className='fa fa-facebook'
              target="_blank"
            >
            </a>
          
          
            <a
              href='https://www.linkedin.com/company/build-react-and-rails-with-a-team-and-a-mentor-for-free/'
              className='fa fa-linkedin'
              target="_blank"
            >
            </a>
          
        
      



    </section>
    </>
  );
};

export default Footer;