import AsyncStorage from '@react-native-async-storage/async-storage'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.jelly.it.com'
const supabaseAnonKey = 'eyJ0eXAiOiAiSldUIiwiYWxnIjogIkhTMjU2In0.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzQyMDEyODQwLAogICJleHAiOiAxODk5NjkyODQwCn0.H72E8kp63HXJCC1PCUZdewWaVmez8E-hVB6ZV5SA97E';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export default supabase



