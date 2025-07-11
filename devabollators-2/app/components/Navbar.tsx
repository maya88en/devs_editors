import React from "react";

type Props = {
  session: any;
  owner?: any;
  isRoom?: boolean;
  room?: any;
  isLoadingRoom?: boolean;
  participantCount?: number;
};

const Navbar = (props: Props) => {
  const { session, owner, isRoom, room, isLoadingRoom, participantCount } =
    props;
  const shouldShowRoomName = isRoom && room?.name;
  const shouldShowRoomVisibilityBadge = isRoom && !isLoadingRoom;
  const isRoomOwner = owner?.id === session?.user.id;

  return (
    <nav className='bg-black z-20 border border-slate-200 w-full p-4'>
      <div className='mx-auto flex justify-between items-center'>
        <section className='flex gap-2 items-center'>
          <a
            href='/'
            className='text-lg font-semibold md:text-2xl text-blue-500'
          >
            Devabollators-2
          </a>
          
          
          {shouldShowRoomName && (
            <div className='hidden md:flex  gap-2'>
              <span className='text-slate-400'>·</span>
              <h3 className='text-slate-500'>{room?.name}</h3>
            </div>
          )}
          {shouldShowRoomVisibilityBadge && (
            <div className='hidden md:flex  gap-2'>
              <span className='text-slate-400'>·</span>
              <span className='rounded-full text-xs font-medium bg-green-100 py-1 px-2 text-green-600'>
                {room?.isPublic ? "Public" : "Private"}
              </span>
            </div>
          )}
          {owner && (
            <div className='hidden lg:flex gap-2'>
              <span className='text-slate-400'>·</span>
              <h3 className='text-slate-500'>
                Owned by {owner?.user_metadata?.userName}{" "}
                {isRoomOwner && <>(You)</>}
              </h3>
            </div>
          )}
          {participantCount ? (
            <div className='hidden md:flex  gap-2'>
              <span className='text-slate-400'>·</span>
              <h3 className='text-slate-500'>
                {participantCount} participants
              </h3>
            </div>
          ) : null}
          {!isRoom && session && (
            <>
              <span className='text-slate-300'>·</span>
              <h3 className='text-slate-300'>
                Welcome back @{session?.user?.user_metadata?.userName}
              </h3>
            </>
          )}
        </section>
        <section className='text-slate-500'>
          {isRoom && (
            <a
              href='/'
              target='_blank'
              className='text-slate-500'
            >

              <span>Dashboard</span>
              
            </a>

            
            
          )}
        </section>

        <section className='text-slate-500'>
          {isRoom && (
            <a
              
              href='https://sharetext.vercel.app/'
              target='_blank'
              className='text-slate-500'
            >
              <span>ShareText</span>
              
            </a>
            
          )}
        </section>

        {/* <section className='text-slate-500'>
          {isRoom && (
            <a
              
              href='https://codeanywhere.com/languages/ruby-on-rails'
              target='_blank'
              className='text-slate-500'
            >
              <span>Codeanywhere Rails</span>
              
            </a>
            
          )}
        </section> */}

        <section className='text-slate-500'>
          {isRoom && (
            <a
              
              href='https://replit.com/@replit/Rails'
              target='_blank'
              className='text-slate-500'
            >
              <span>Replit Rails</span>
              
            </a>
            
          )}
        </section>


        <section className='flex items-center gap-2'>
          {isRoom && (
            <a
              // href='https://syncfiddle.net/fiddle/-O6h5BrUTh7b5ftAJDs9'
              href='https://syncfiddle.net/'
              target='_blank'
              className='flex items-center text-slate-500'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                />
              </svg>

              <span>SyncFiddle</span>
              
            </a>
            
          )}
          <div
            className={`h-10 w-10 overflow-hidden rounded-full`}
            style={{ background: session?.user?.user_metadata?.userColor }}
          />
        </section>
        
      </div>
    </nav>
  );
};

export default Navbar;