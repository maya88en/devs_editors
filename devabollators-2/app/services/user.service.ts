import { adminAuthClient, supabase } from "../lib/initSupabase";

// User session
export const getUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    // signInAnonymouslyAndRedirect();
    return data.session;
    
  };

// User profile
export const fetchUserById = async (userId: string) => {
    // signInAnonymouslyAndRedirect();
    const { data, error } = await adminAuthClient.getUserById(userId);
    return data;
  };




