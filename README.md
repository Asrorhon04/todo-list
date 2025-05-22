# Angular ToDo List

**ToDo List** — одностраничное Angular-приложение, реализующее простой список задач с использованием компонентной архитектуры и маршрутизации. Поддерживает стилизацию с SCSS и SSR-настройку.

## 🚀 Функциональность

- ✅ Отображение списка задач
- ➕ Добавление новых задач
- 🗑 Удаление задач
- 🧩 Разделение логики, шаблонов и стилей по компонентам
- 🌐 Angular Routing
- 📦 SSR-настройка (предварительная конфигурация сервера)

## 🛠️ Используемые технологии

- [Angular 16+](https://angular.io/)
- TypeScript
- SCSS
- Angular Router
- Server-Side Rendering (конфиг)
- Webpack (возможно через Angular CLI)

## 📦 Установка и запуск

```bash
git clone https://github.com/Asrorhon04/todo-list.git
cd todo-list
npm install
ng serve

📁 Структура проекта
src/
├── app/
│   ├── todo/                  # Компонент ToDo
│   ├── app.component.ts       # Корневой компонент
│   ├── app.routes.ts          # Маршруты
│   ├── app.config.ts          # Общая конфигурация
│   └── app.config.server.ts   # SSR конфигурация
├── styles.scss                # Глобальные стили
├── main.ts                    # Основной entry-point
├── main.server.ts             # Entry-point для SSR
├── server.ts                  # Сервер для SSR

🧑‍💻 Автор
GitHub: Asrorhon04

Telegram: @Asrorkhon04
