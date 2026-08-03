"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MailCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const ease = [0.22, 1, 0.36, 1] as const;

// Reject submissions faster than a human could plausibly type. 
const MIN_FILL_SECONDS = 3;
// Cooldown between submissions, so repeat clicks can't spawn mail windows. 
const COOLDOWN_SECONDS = 30;
// Submissions allowed per rolling hour. 
const MAX_PER_HOUR = 5;
// mailto: URLs get truncated by some mail clients past ~2000 chars. 
const MAX_MESSAGE_CHARS = 1200;

const RATE_KEY = "contact-form-sends";

function recentSends(): number[] {
  try {
    const raw = window.localStorage.getItem(RATE_KEY);
    const list: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) return [];
    const hourAgo = Date.now() - 60 * 60 * 1000;
    return list.filter((t): t is number => typeof t === "number" && t > hourAgo);
  } catch {
    return [];
  }
}

function recordSend(times: number[]) {
  try {
    window.localStorage.setItem(RATE_KEY, JSON.stringify([...times, Date.now()]));
  } catch {
  }
}

const formGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const field = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  // Tick the cooldown down so the button can re-enable itself.
  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company") ?? "").trim();

    // Honeypot — a hidden field only an automated filler would touch.
    // Fail silently so a bot learns nothing from the response.
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // Time-on-form — scripted fills happen near-instantly.
    if ((Date.now() - mountedAt.current) / 1000 < MIN_FILL_SECONDS) {
      setError("That was a little too quick — please try again.");
      return;
    }

    // Rate limit, per browser.
    const sends = recentSends();
    if (sends.length >= MAX_PER_HOUR) {
      setError(
        `You've sent ${MAX_PER_HOUR} enquiries in the last hour. Please call ${siteConfig.phone} instead.`
      );
      return;
    }
    const last = sends[sends.length - 1];
    if (last && Date.now() - last < COOLDOWN_SECONDS * 1000) {
      const wait = Math.ceil((COOLDOWN_SECONDS * 1000 - (Date.now() - last)) / 1000);
      setCooldown(wait);
      setError(`Just sent one — you can send another in ${wait}s.`);
      return;
    }

    // Validation.
    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("That email address doesn't look right.");
      return;
    }
    if (message.length > MAX_MESSAGE_CHARS) {
      setError(
        `Please keep the message under ${MAX_MESSAGE_CHARS} characters, or email us directly.`
      );
      return;
    }

    const body = [
      `Name: ${name}`,
      `Phone: ${phone || "not supplied"}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const href =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(`Website enquiry from ${name}`)}` +
      `&body=${encodeURIComponent(body)}`;

    recordSend(sends);
    setCooldown(COOLDOWN_SECONDS);
    setError("");
    window.location.href = href;
    setSubmitted(true);
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/50 bg-white/20 p-8 text-center shadow-xl shadow-charcoal/5 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/10 text-ember"
          >
            <MailCheck size={28} />
          </motion.div>
          <p className="mt-4 text-lg font-semibold text-charcoal">
            Your email is ready to send.
          </p>
          <p className="mt-2 text-mist">
            We&apos;ve opened it in your mail app — press Send there and it&apos;s on
            its way. Nothing opened? Email us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-ember hover:underline">
              {siteConfig.email}
            </a>{" "}
            or call {siteConfig.phone}.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          variants={formGroup}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
          onSubmit={handleSubmit}
          noValidate
          className="flex h-full flex-col gap-4 rounded-2xl border border-white/50 bg-white/20 p-8 shadow-xl shadow-charcoal/5 backdrop-blur-xl"
        >
          {/* Honeypot: hidden from people, irresistible to naive form-fillers. */}
          <div className="hidden" aria-hidden>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <motion.div variants={field}>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-charcoal">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-white/60 bg-white/30 px-3 py-2 shadow-md outline-none backdrop-blur-sm transition-colors placeholder:text-mist/70 focus:border-ember focus:bg-white/50 focus:shadow-md focus:shadow-ember/20"
              />
          </motion.div>

          <motion.div variants={field}>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-charcoal">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-white/60 bg-white/30 px-3 py-2 shadow-md outline-none backdrop-blur-sm transition-colors placeholder:text-mist/70 focus:border-ember focus:bg-white/50 focus:shadow-md focus:shadow-ember/20"
              />
          </motion.div>

          <motion.div variants={field}>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/60 bg-white/30 px-3 py-2 shadow-md outline-none backdrop-blur-sm transition-colors placeholder:text-mist/70 focus:border-ember focus:bg-white/50 focus:shadow-md focus:shadow-ember/20"
            />
          </motion.div>
          <motion.div variants={field} className="flex flex-1 flex-col">
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="min-h-32 w-full flex-1 rounded-lg border border-white/60 bg-white/30 px-3 py-2 shadow-md outline-none backdrop-blur-sm transition-colors placeholder:text-mist/70 focus:border-ember focus:bg-white/50 focus:shadow-md focus:shadow-ember/20"
            />
          </motion.div>
          {error && (
            <motion.p
              variants={field}
              role="alert"
              className="text-sm font-medium text-red-600"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            variants={field}
            whileHover={cooldown > 0 ? undefined : { scale: 1.02 }}
            whileTap={cooldown > 0 ? undefined : { scale: 0.98 }}
            type="submit"
            disabled={cooldown > 0}
            className="inline-flex self-start items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase shadow-lg shadow-ember/30 transition-colors hover:bg-ember-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cooldown > 0 ? `Wait ${cooldown}s` : "Submit"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
