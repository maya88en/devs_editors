"use client";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { getUserSession } from "./services/user.service";
import { supabase } from "./lib/initSupabase";
import DashboardBody from "./components/dashboard/DashboardBody";
// import DashboardBody from "@/app/components/dashboard/DashboardBody"
// import SampleComponent from "./components/drawing-room/SampleComponent";
import {signInAnonymouslyAndRedirect} from "../app/lib/initSupabase"

 
signInAnonymouslyAndRedirect();
    // Call this function when your application starts or when the user navigates to the login page
    

    export default function Home() {
        const [session, setSession] = useState<any>();

  return (
    <main>
      <Navbar session={session} />
      <DashboardBody session={session} />
      {/* <SampleComponent session={session} /> */}
    </main>
  );
}