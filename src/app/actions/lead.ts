"use server";

import { z } from "zod";
import { Resend } from "resend";

const leadSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z.string().min(7, "Укажите телефон"),
  childAge: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export type LeadState = { ok: boolean; error?: string };

export async function submitLead(prevState: LeadState | null, formData: FormData): Promise<LeadState> {
  try {
    const parsed = leadSchema.safeParse({
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      childAge: String(formData.get("childAge") || ""),
      message: String(formData.get("message") || ""),
      source: String(formData.get("source") || ""),
    });

    if (!parsed.success) {
      return { ok: false, error: "Проверьте поля формы." };
    }

    const data = parsed.data;

    const text = `Новая заявка на пробное занятие\n\nИмя: ${data.name}\nТелефон: ${data.phone}\nВозраст ребенка: ${data.childAge || "—"}\nКомментарий: ${data.message || "—"}\nИсточник: ${data.source || "—"}`;

    if (process.env.RESEND_API_KEY && process.env.RESEND_TO) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Leads <leads@hiphop-shchelkovo.ru>",
        to: process.env.RESEND_TO.split(","),
        subject: "Новая заявка на пробное занятие",
        text,
      });
    } else {
      console.log("Lead:", text);
    }

    return { ok: true };
  } catch (error) {
    console.error("submitLead error", error);
    return { ok: false, error: "Не удалось отправить. Попробуйте позже." };
  }
}


