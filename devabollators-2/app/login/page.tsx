"use client";
import React, { useState } from "react";
import { supabase } from "../lib/initSupabase";

const LoginPage = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTokenSent, setIsTokenSent] = useState<boolean>(false);

  const authenticateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress) {
      alert("Email address is required");
      return;
    }

    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOtp({
      email: emailAddress,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }

    if (data) {
      setIsTokenSent(true);
      setTimeout(() => {
        setIsTokenSent(false); // show the login ui after 5 seconds
        setIsLoading(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={authenticateUser}
      className=' justify-center items-center h-screen max-w-lg mx-auto'
    > 
    <div className="text-center"> 
      {/* <label>Login with magic link 🧙🏽‍♂️</label> */}
      <h2 className="mt-7"><b>اتعلم مجانا تبني مشاريع مع فريق</b></h2>
      <h2><b>React.js</b></h2>
      <h2><b>وتضيفها للبورتفوليو</b></h2>
      <div className="text-green-900">
      <h2 className= "mt-2"><b>Ücretsiz Bir ekip ve bir akıl hocasıyla React.js yolculuğunuza başlayın ve yüksek ücretli işlere başvurmak için bir özgeçmiş portföyü oluşturun</b></h2>
      <h2><b>Diğer geliştiricilerle bağlantı kurun....</b></h2>
      <h2><b>React.js Projelerinin Ücretsiz Yapılandırılması</b></h2>
      </div>
      <h2 className="mt-2"><b>Free Start your React.js journey with a team and a mentor to build a portfolio for CV to apply for high paying jobs</b></h2>
      <h2><b>Connect with other developers....</b></h2>
      <h2><b>Free build of React.js Projects</b></h2>
      <h1 className= " text-red-600 text-5xl mt-2 mb-2"><b>DEVABOLLATORS</b></h1>
      <div className=" text-blue-950">
      <h2><b>Verbinden mit Deutsch Developers...</b></h2>
      <h2><b>kostenlos bauen..... Projektentwicklung mit React.js </b></h2>
      <h2 className="mb-5"><b>Beginnen Sie Ihre React.js-Reise kostenlos mit einem Team und einem Mentor, um ein Portfolio für Ihren Lebenslauf zu erstellen, mit dem Sie sich auf gut bezahlte Jobs bewerben können.</b></h2>
      </div>
      </div>
      <input
        type='text'
        placeholder='Enter email address'
        className='border border-slate-200 w-full px-3 py-2 rounded-lg'
        onChange={(e) => setEmailAddress(e.target.value)}
        value={emailAddress}
      />

      <button
        type='submit'
        className='px-3 py-2 bg-slate-900 text-white rounded-lg text-base w-full mb-7'
        disabled={isTokenSent || isLoading}
      >
        {isTokenSent
          ? "Token sent...please check your email address"
          : isLoading
          ? "One moment please..."
          : "Send link, Link senden, Bağlantıyı Gönder, إرسال الرابط"}
      </button>
    </form>
  );
};

export default LoginPage;