Танцевальная студия «Хип-хоп Щелчок» — сайт на Next.js 14 + Tailwind.

## Запуск

1. Скопируйте переменные окружения:

```bash
cp .env.example .env.local
```

2. Заполните `RESEND_API_KEY` и `RESEND_TO` (или оставьте пустым — заявки будут логироваться в консоль).

3. Запустите dev-сервер:

```bash
npm run dev
```

Откройте `http://localhost:3000`.

Главная страница: `src/app/page.tsx`. Разделы: `src/app/about`, `src/app/contacts`.

## Интеграция заявок

Серверное действие: `src/app/actions/lead.ts` (валидация через zod, отправка email через Resend). Компонент формы: `src/app/ui/lead-form.tsx`.

## Деплой

Рекомендуется Vercел. Перед деплоем задайте переменные окружения `RESEND_API_KEY` и `RESEND_TO`.
