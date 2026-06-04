import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://vzvnthgxmseyjewaidyu.supabase.co";
// Using the token provided by the user
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "sb_publishable__MdVYSPAxe3l1Q2sNMuU9Q_Fauf8ovF";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
