const SUPABASE_URL = "https://ddwzuqtnkkdacturmndu.supabase.co";

const SUPABASE_KEY = "sb_publishable_EXflQ-o2oTBA2cm25ssuRQ_MAhFHrkX";

// Cria a conexão com o Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
