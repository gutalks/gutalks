const SUPABASE_URL = "https://ddwzuqtnkkdacturmndu.supabase.co";

const SUPABASE_KEY = "COLE_AQUI_SUA_PUBLISHABLE_KEY";

// Cria a conexão com o Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
