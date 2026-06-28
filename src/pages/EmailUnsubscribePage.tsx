import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "ready" | "confirmed" | "already" | "invalid";

export default function EmailUnsubscribePage() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [status, setStatus] = useState<Status>("loading");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    document.title = "Désinscription · MSL-iTECH";
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("unsubscribe-lead", {
          body: { token },
          method: "GET" as never,
        });
        if (error) throw error;
        if (!data) throw new Error("no_data");
        setEmail(data.email ?? "");
        if (data.already || data.unsubscribed) setStatus("already");
        else setStatus("ready");
      } catch {
        setStatus("invalid");
      }
    })();
  }, [token]);

  async function confirm() {
    setStatus("loading");
    try {
      const { data, error } = await supabase.functions.invoke("unsubscribe-lead", {
        body: { token },
      });
      if (error) throw error;
      setEmail(data?.email ?? email);
      setStatus("confirmed");
    } catch {
      setStatus("invalid");
    }
  }

  return (
    <main className="bg-brand-bg py-20">
      <div className="container px-4 sm:px-6">
        <div className="mx-auto max-w-xl rounded-[28px] border border-brand-grey-light bg-brand-white p-8 text-center shadow-[0_24px_60px_-30px_rgba(15,63,74,0.25)] md:p-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
            MSL-iTECH · Le journal
          </span>
          {status === "loading" && (
            <p className="mt-6 font-body text-brand-grey">Vérification de votre lien…</p>
          )}
          {status === "invalid" && (
            <>
              <h1 className="mt-4 font-heading text-2xl font-bold text-brand-black">
                Lien invalide ou expiré
              </h1>
              <p className="mt-3 font-body text-brand-grey">
                Ce lien de désinscription n'est plus valable. Contactez-nous à{" "}
                <a className="text-brand-blue underline" href="mailto:contact@msl-itech.com">
                  contact@msl-itech.com
                </a>{" "}
                si vous souhaitez ne plus recevoir nos emails.
              </p>
            </>
          )}
          {status === "ready" && (
            <>
              <h1 className="mt-4 font-heading text-2xl font-bold text-brand-black">
                Confirmer la désinscription
              </h1>
              <p className="mt-3 font-body text-brand-grey">
                {email
                  ? `Vous êtes sur le point de désabonner ${email} de notre séquence email.`
                  : "Vous êtes sur le point de désabonner cette adresse de notre séquence email."}
              </p>
              <button
                onClick={confirm}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90"
              >
                Confirmer la désinscription
              </button>
            </>
          )}
          {(status === "confirmed" || status === "already") && (
            <>
              <h1 className="mt-4 font-heading text-2xl font-bold text-brand-black">
                Désinscription confirmée
              </h1>
              <p className="mt-3 font-body text-brand-grey">
                {email ? `${email} ne recevra plus nos emails de séquence.` : "Vous ne recevrez plus nos emails de séquence."}
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 font-body text-sm font-semibold text-white transition hover:opacity-90"
              >
                Retour à l'accueil
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}