import React from "react";

type Props = { session: any; setShowCreateRoomModal: Function };

const Footer = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <><section>
      <h1 className='text-slate font-semibold text-blue-400'>
          {/* Contact Us: dev0@devabollators.online  */}
          Ask for Mentor help by sending a message 
      </h1>
      <br></br>
      
    </section>
    </>
  );
};

export default Footer;