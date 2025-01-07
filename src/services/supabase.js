import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://mtuxinxjrxvkdupfsauk.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY

const supabaseUrl = import.meta.env.VITE_SUPABSE_URL
const supabaseKey =import.meta.env.VITE_SUPABASE_API


const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase