import React from "react";

type Props = { session: any; setShowCreateRoomModal: Function };

const Footer = (props: Props) => {
  const { session, setShowCreateRoomModal } = props;
  return (
    <><section>
      <h1 className='text-slate font-semibold text-blue-400'>
          {/* Contact Us: dev0@devabollators.online  */}
          Ask for Mentor assist by sending an email to learn.quickly.coding@gmail.com
      </h1>
      <br></br>
      <div className="text-slate-600 font-semibold text-blue-400" style={{ fontSize: '12px', textAlign: 'right' }}>
        Special Thanks for <b>Varshith V Hegde</b> for the sharetext website
      </div>
    </section>
    </>
  );
};

export default Footer;