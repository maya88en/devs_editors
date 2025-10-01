"use client";

import { createClient } from "@supabase/supabase-js";
// import { useEffect } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin Access
const service_role_key = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_SECRET!;
const supabaseWithAdminRole = createClient(supabaseUrl, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});


// Access auth admin api
export const adminAuthClient = supabaseWithAdminRole.auth.admin;

// export async function temporarilyDisableUser(userId: string) {
//   const { data, error } = await supabaseWithAdminRole.auth.admin.updateUserById(userId, {
//     ban_duration: '876600h', // Ban for approximately 100 years, effectively disabling login
//   });

//   if (error) {
//     console.error('Error temporarily disabling user:', error.message);
//   } else {
//     console.log('User temporarily disabled:', data.user.id);
//   }
// }



//  export async function signInAnonymouslyAndRedirect() {
  
//         if (typeof window !== 'undefined') {
//           // Access window or its properties here
//           console.log(window.location.href);
        
//         // Empty dependency array ensures it runs once on mount
      
    
//       const { data, error } = await supabase.auth.signInAnonymously();
//       if (error) {
//         console.error('Error signing in anonymously:', error.message);
//         // Handle error, e.g., show a message to the user
//       } else {
//         // Redirect to the dashboard after successful anonymous sign-in
//         window.location.href = window.location.origin; // Or use your router's navigation method
//       }
//     }
//     }
    

    // Call this function when your application starts or when the user navigates to the login page
    // signInAnonymouslyAndRedirect();