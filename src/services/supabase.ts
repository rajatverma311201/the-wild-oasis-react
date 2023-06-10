import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mduiaridvnmrzoyjpofz.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY || "";

export const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdWlhcmlkdm5tcnpveWpwb2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzODIzNjAsImV4cCI6MjAwMTk1ODM2MH0.S94VYi0wdJheohVCJTqkeO-mNfjI62pHLcKsdKb5Vd4";
const supabase = createClient(supabaseUrl, supabaseKey);

export const imageBucketName = "wild-oasis-images";

export default supabase;
