import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://vndgeizmqworbwwgyihl.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuZGdlaXptcXdvcmJ3d2d5aWhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MDAyODUsImV4cCI6MjA2MjQ3NjI4NX0.GEwEfSLixlVm7cLutwL27ELjZyPdTcZkXiCYDNefWwE';

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
