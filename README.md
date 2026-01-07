# Escalera Web

Modern web application for Escalera.ai / Escalera Labs SL.

## Technology Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase
- **Hosting**: Vercel

## Local Development

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd "Escalera Web"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
    Create a `.env` file based on `.env.example` (if available) or ensure you have the following variables:
    ```
    VITE_SUPABASE_PROJECT_ID=...
    VITE_SUPABASE_PUBLISHABLE_KEY=...
    VITE_SUPABASE_URL=...
    ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Deployment

This project is configured for deployment on **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Vercel should automatically detect the Vite framework.
3. Add the Environment Variables in the Vercel Project Settings.
4. Deploy!

The `vercel.json` file handles SPA routing rewrites.
