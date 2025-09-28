"use server";

import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

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

    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        childAge: data.childAge || null,
        message: data.message || null,
        source: data.source || null,
      },
    });

    const text = `Новая заявка на пробное занятие\n\nИмя: ${lead.name}\nТелефон: ${lead.phone}\nВозраст ребенка: ${lead.childAge || "—"}\nКомментарий: ${lead.message || "—"}\nИсточник: ${lead.source || "—"}`;

    if (process.env.RESEND_API_KEY && process.env.RESEND_TO) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const from = process.env.RESEND_FROM || "Leads <onboarding@resend.dev>";
      await resend.emails.send({
        from,
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


