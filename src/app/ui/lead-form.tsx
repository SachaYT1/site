"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitLead, type LeadState } from "../actions/lead";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary w-full sm:w-auto" disabled={pending}>
      {pending ? "Отправка..." : "Отправить заявку"}
    </button>
  );
}

const initialState: LeadState = { ok: false };

export default function LeadForm() {
  const [state, formAction] = useActionState(submitLead, initialState);
  const [ruDigits, setRuDigits] = useState(""); // only 10 digits after +7

  function formatRuPhone(d: string) {
    const p = d.padEnd(0, "");
    const a = p.slice(0, 3);
    const b = p.slice(3, 6);
    const c = p.slice(6, 8);
    const e = p.slice(8, 10);
    let out = "+7";
    if (a) out += ` ${a}`;
    if (b) out += ` ${b}`;
    if (c) out += ` ${c}`;
    if (e) out += ` ${e}`;
    return out;
  }

  const formatted = formatRuPhone(ruDigits);

  return (
    <form action={formAction} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className="block text-sm mb-1">Ваше имя</label>
        <input
          name="name"
          required
          placeholder="Саша"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-400"
        />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-sm mb-1">Телефон</label>
        {/* Visible formatted input (no name) */}
        <input
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+7 900 000 00 00"
          value={formatted}
          onChange={(e) => {
            // keep only digits; normalize leading 8 -> 7; cap to 10 digits after country code
            const digits = e.target.value.replace(/\D/g, "");
            let national = digits;
            // Allow user to paste with +7 or 8 prefix
            if (national.startsWith("7")) {
              national = national.slice(1);
            } else if (national.startsWith("8")) {
              national = national.slice(1);
            }
            setRuDigits(national.slice(0, 10));
          }}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-400"
        />
        {/* Hidden E.164 field actually submitted */}
        <input type="hidden" name="phone" value={ruDigits ? `+7${ruDigits}` : ""} />
      </div>
      <div className="sm:col-span-1">
        <label className="block text-sm mb-1">Возраст ребенка</label>
        <input
          name="childAge"
          placeholder="7"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-400"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm mb-1">Комментарий</label>
        <textarea
          name="message"
          rows={3}
          placeholder="Удобное время, опыт, вопросы"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-400"
        />
      </div>
      <input type="hidden" name="source" value="homepage" />

      {state?.error && (
        <p className="sm:col-span-2 text-sm text-red-300">{state.error}</p>
      )}
      {state?.ok && (
        <p className="sm:col-span-2 text-sm text-emerald-300">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      )}

      <div className="sm:col-span-2 flex gap-3">
        <SubmitButton />
      </div>
    </form>
  );
}


