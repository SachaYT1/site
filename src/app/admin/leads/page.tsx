import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Lead = {
  id: number;
  name: string;
  phone: string;
  childAge: string | null;
  message: string | null;
  source: string | null;
  createdAt: Date;
};

export default async function AdminLeadsPage() {
  const leads: Lead[] = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <main className="py-10 sm:py-16">
      <h1 className="text-2xl font-bold mb-6">Заявки</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-white/70">
            <tr>
              <th className="p-2">Дата</th>
              <th className="p-2">Имя</th>
              <th className="p-2">Телефон</th>
              <th className="p-2">Возраст</th>
              <th className="p-2">Комментарий</th>
              <th className="p-2">Источник</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l: Lead) => (
              <tr key={l.id} className="border-t border-white/10">
                <td className="p-2 whitespace-nowrap">{l.createdAt.toLocaleString()}</td>
                <td className="p-2">{l.name}</td>
                <td className="p-2">{l.phone}</td>
                <td className="p-2">{l.childAge || "—"}</td>
                <td className="p-2 max-w-[400px] truncate" title={l.message || ""}>{l.message || "—"}</td>
                <td className="p-2">{l.source || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}


