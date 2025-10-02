import React, {useEffect} from 'react';
  
const Footer2 = () => {
  useEffect(() => {
    window.onload=function(){
        }});

  return (
    <>
    <div>
        <section style={{ fontSize: '12px', textAlign: 'center' }}>
      <div className='text-slate-600 font-semibold mt-7'>
          My Reference for 'Ruby on Rails' is  <a class="text-blue-800" href="https://gorails.com/episodes/rails-for-beginners-part-1-installing-ruby-on-rails">gorails.com</a>
      </div>
      <br></br>
      <div className="text-slate-600 font-semibold">
        My Reference for 'React' is <a class="text-blue-800" href="https://react-tutorial.app/">React Tutorial</a>
      </div>
    </section>
    </div>

    </>
  );

};

export default Footer2;