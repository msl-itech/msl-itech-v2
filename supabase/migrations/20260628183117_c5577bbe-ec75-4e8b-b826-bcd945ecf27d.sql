
CREATE TABLE public.lead_sequences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  tool_slug text NOT NULL,
  segment text NOT NULL,
  score int NOT NULL DEFAULT 0,
  lead_name text,
  company text,
  phone text,
  template_data jsonb NOT NULL DEFAULT '{}'::jsonb,
  current_step int NOT NULL DEFAULT 0,
  next_send_at timestamptz,
  status text NOT NULL DEFAULT 'active',
  unsubscribed_at timestamptz,
  unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid(),
  started_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX lead_sequences_status_next_idx ON public.lead_sequences (status, next_send_at);
CREATE UNIQUE INDEX lead_sequences_email_tool_idx ON public.lead_sequences (lower(email), tool_slug);
CREATE UNIQUE INDEX lead_sequences_unsub_idx ON public.lead_sequences (unsubscribe_token);

GRANT ALL ON public.lead_sequences TO service_role;
ALTER TABLE public.lead_sequences ENABLE ROW LEVEL SECURITY;
-- No client policies: service_role only via edge functions.

CREATE TABLE public.lead_sequence_sends (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sequence_id uuid REFERENCES public.lead_sequences(id) ON DELETE CASCADE,
  step int NOT NULL,
  kind text NOT NULL,
  recipient text NOT NULL,
  subject text,
  status text NOT NULL DEFAULT 'sent',
  error text,
  sent_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX lead_sequence_sends_seq_idx ON public.lead_sequence_sends (sequence_id, step);

GRANT ALL ON public.lead_sequence_sends TO service_role;
ALTER TABLE public.lead_sequence_sends ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.touch_lead_sequences_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER trg_lead_sequences_updated
BEFORE UPDATE ON public.lead_sequences
FOR EACH ROW EXECUTE FUNCTION public.touch_lead_sequences_updated_at();

-- pg_cron + pg_net for the 15-min processor
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;
