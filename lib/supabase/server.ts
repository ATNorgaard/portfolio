import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Sat til ".anconsult.app" i staging og produktion, tom lokalt. Det er den ene indstilling,
// der gør ét login gyldigt på tværs af alle værktøjer på underdomæner.
const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN || undefined;

export async function supabaseServer() {
  const store = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return store.getAll();
        },
        setAll(list) {
          try {
            for (const { name, value, options } of list) {
              store.set(name, value, { ...options, domain: COOKIE_DOMAIN });
            }
          } catch {
            // Server Components må ikke skrive cookies. Kaldes klienten fra en route handler
            // eller en server action, virker det; herfra er det trygt at lade være.
          }
        },
      },
    },
  );
}
