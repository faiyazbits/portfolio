import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConsultingLeadForm({ utmParams = {} }) {
  const [formState, setFormState] = useState("idle");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setFormState("loading");

    try {
      const res = await fetch("/api/consulting-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, ...utmParams }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormState("success");
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setFormState("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {formState === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primaryDark/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-primary dark:text-primaryDark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-xl mb-2 text-dark dark:text-light">Check your inbox.</h3>
          <p className="text-dark/70 dark:text-light/70 text-sm">The checklist is on its way.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              required
              disabled={formState === "loading"}
              className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 dark:border-light/20 bg-light dark:bg-dark
                text-dark dark:text-light placeholder:text-dark/40 dark:placeholder:text-light/40
                focus:outline-none focus:border-primary dark:focus:border-primaryDark
                transition-colors disabled:opacity-50"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone (optional)"
              disabled={formState === "loading"}
              className="w-full px-4 py-3 rounded-lg border-2 border-dark/20 dark:border-light/20 bg-light dark:bg-dark
                text-dark dark:text-light placeholder:text-dark/40 dark:placeholder:text-light/40
                focus:outline-none focus:border-primary dark:focus:border-primaryDark
                transition-colors disabled:opacity-50"
            />
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm"
              >
                {errorMsg}
              </motion.p>
            )}
            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full px-6 py-3 rounded-lg bg-dark dark:bg-light text-light dark:text-dark font-semibold
                hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200
                disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
            >
              {formState === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity={0.25} />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Me the Checklist"
              )}
            </button>
          </div>
          <p className="text-xs text-dark/50 dark:text-light/50 mt-3 text-center">
            No spam. One email. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
