// import { signInAnonymouslyAndRedirect } from "@/app/lib/initSupabase";
import React from "react";


// signInAnonymouslyAndRedirect();
type Props = { session: any; setShowCreateRoomModal: Function };

const Footer = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <><section className=' bg-black border border-slate-500 w-full p-4'>
      <div className="grid grid-cols-3 gap-4 container">
      <div style={{ fontSize: '12px', textAlign: 'center'}}>
          <h1 className='font-semibold text-blue-400'>
              {/* Contact Us: dev0@devabollators.online  */}
              Ask for <b style={{ color: 'red'}}>Free Mentor assist</b> by adding a note to: 
          </h1>
          <a className="text-green-400 ml-7" href="https://sharetext.vercel.app/?unique=21079" target="_blank" ><u>sharetext</u></a>
          <p className="text-green-400 ml-7" >password &nbsp;1234</p>
          
      </div>
      
      
      <div className="text-slate-600 font-semibold mt-3 ml-20" style={{ fontSize: '12px' }}>
        Special Thanks for <b>Varshith V Hegde</b> for the sharetext website
      </div>
      
      <div className="ml-40">
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
        </div>
          </div>
        
      



    </section>
    </>
  );
};

export default Footer;