"use client";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { getUserSession } from "./services/user.service";
import { supabase } from "./lib/initSupabase";
import DashboardBody from "./components/dashboard/DashboardBody";
// import DashboardBody from "@/app/components/dashboard/DashboardBody"
// import SampleComponent from "./components/drawing-room/SampleComponent";
// import {signInAnonymouslyAndRedirect} from "../app/lib/initSupabase"
import Script from 'next/script';
import AdComponent from "./components/Adsense";
 
export default function Home() {
    // Call this function when your application starts or when the user navigates to the login page
    const [session, setSession] = useState<any>();
    // signInAnonymouslyAndRedirect();

// export default function Home() {
//   const [session, setSession] = useState<any>();
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);

function generateUserColor() {
    const colors = [
      "#3b82f6",
      "#14b8a6",
      "#f87171",
      "#eab308",
      "#a855f7",
      "#6366f1",
    ];
    const index = Math.floor(Math.random() * colors.length);
    // signInAnonymouslyAndRedirect();
    return colors[index];
  }

  function createUsernameFromEmail(email: string) {
    try {
      let username = email?.split("@")[0];
      return username;
    } catch (error) {
      throw new Error("Error occurred while creating username: " + error);
    }
  }

  useEffect(() => {
    // signInAnonymouslyAndRedirect();
    getUserSession()
      .then((session) => {
        if (session) {
          // First time user (don't have username and color )
          const isNewUser =
            !session?.user?.user_metadata?.userName &&
            !session?.user?.user_metadata?.userColor;

          if (isNewUser) {
            // signInAnonymouslyAndRedirect();
            const userName = createUsernameFromEmail(
              session?.user?.email as string
            );
            const userColor = generateUserColor();
            supabase.auth.updateUser({
              data: { userName, userColor },
            });

            const sessionWithUsername = {
              ...session?.user,
              user_metadata: {
                userName,
                userColor,
              },
            };

            setSession(sessionWithUsername);
            setIsAuthenticating(false);
          }

          // Returning user
          setSession(session);
          setIsAuthenticating(false);
        } else {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        throw new Error("Error occurred while fetching user session: " + error);
      });
  }, []);
  // signInAnonymouslyAndRedirect();
  if (isAuthenticating) {
    // signInAnonymouslyAndRedirect();
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <p>Validating session. please wait...</p>
      </div>
    );
  }

console.log(session); // currently logged in user object
//   signInAnonymouslyAndRedirect();
  return (
    
    <main>
      <Navbar session={session} />
      <DashboardBody session={session} />
      {/* <SampleComponent session={session} /> */}
      <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-7">
       <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7446299963890807"
          crossOrigin="anonymous"
          strategy="lazyOnload" // Or "afterInteractive" for earlier loading
        />
        <AdComponent adSlot="4631542081" />
      </div>
    </main>
  );
}