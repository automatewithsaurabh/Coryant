// Auto-generate the real version of this file by running:
//   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > lib/supabase/types.ts
//
// The scaffold below matches the schema in supabase/schema.sql.
// Replace it once you've run the generator.

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export type Database = {
  public: {
    Tables: {
      purchases: {
        Row: {
          id: string;
          user_id: string;
          pack_slug: string;
          stripe_checkout_session_id: string;
          stripe_customer_id: string | null;
          stripe_payment_intent_id: string | null;
          amount_total: number | null;
          currency: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          pack_slug: string;
          stripe_checkout_session_id: string;
          stripe_customer_id?: string | null;
          stripe_payment_intent_id?: string | null;
          amount_total?: number | null;
          currency?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          pack_slug?: string;
          stripe_checkout_session_id?: string;
          stripe_customer_id?: string | null;
          stripe_payment_intent_id?: string | null;
          amount_total?: number | null;
          currency?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
