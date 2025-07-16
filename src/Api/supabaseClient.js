// import axios from "axios";
// export const axiosInstance =axios.create({
//     baseURL:'http://localhost:1337/'
// })
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 