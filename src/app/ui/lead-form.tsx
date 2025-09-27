"use client";

import { useActionState } from "react";
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
        <input
          name="phone"
          required
          placeholder="+7 900 000 00 00"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-primary-400"
        />
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


