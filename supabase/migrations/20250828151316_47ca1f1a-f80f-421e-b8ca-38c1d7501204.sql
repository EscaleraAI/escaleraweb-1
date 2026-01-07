-- Create contacts table to store form submissions
CREATE TABLE public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (but make it accessible for now since no auth is implemented)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for the contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read (you can restrict this later)
CREATE POLICY "Anyone can read contacts" 
ON public.contacts FOR SELECT 
USING (true);