import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSignup() {
  const [formState, setFormState] = useState("idle");
  const [email, setEmail] = useState("");
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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <div className="mt-10 p-6 rounded-xl border-2 border-dark/10 dark:border-light/10 bg-dark/[0.02] dark:bg-light/[0.02]">
      <AnimatePresence mode="wait">
        {formState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-2"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primaryDark/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-5 h-5 text-primary dark:text-primaryDark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-dark dark:text-light">You&apos;re in.</p>
            <p className="text-sm text-dark/60 dark:text-light/60 mt-1">Welcome email is on its way.</p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="font-semibold text-dark dark:text-light mb-1">Enjoyed this?</p>
            <p className="text-sm text-dark/60 dark:text-light/60 mb-4">
              Get occasional writing on AI product engineering, LLM systems, and what I&apos;m learning — no noise.
            </p>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={formState === "loading"}
                className="flex-1 px-4 py-2.5 rounded-lg border-2 border-dark/20 dark:border-light/20 bg-light dark:bg-dark
                  text-dark dark:text-light placeholder:text-dark/40 dark:placeholder:text-light/40
                  focus:outline-none focus:border-primary dark:focus:border-primaryDark
                  transition-colors disabled:opacity-50 text-sm"
              />
              <button
                type="submit"
                disabled={formState === "loading"}
                className="px-5 py-2.5 rounded-lg bg-dark dark:bg-light text-light dark:text-dark font-semibold text-sm
                  hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 whitespace-nowrap"
              >
                {formState === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mt-2"
              >
                {errorMsg}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
