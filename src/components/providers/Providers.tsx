"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { Toaster, toast } from "sonner";

/**
 * Queries/mutations opt into an error toast with
 * `meta: { errorMessage: "..." }`; one handler here shows it.
 */
declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: { errorMessage?: string };
    mutationMeta: { errorMessage?: string };
  }
}

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (_error, query) => {
        if (query.meta?.errorMessage) toast.error(query.meta.errorMessage);
      },
    }),
    mutationCache: new MutationCache({
      onError: (_error, _variables, _context, mutation) => {
        if (mutation.meta?.errorMessage) {
          toast.error(mutation.meta.errorMessage);
        }
      },
    }),
    defaultOptions: {
      // Avoid an instant refetch right after the first render.
      queries: { staleTime: 60 * 1000 },
    },
  });
}

export function Providers({ children }: { children: ReactNode }) {
  // One client per browser session, not re-created on re-render.
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* No toast design in Figma yet; styled from the design tokens. */}
      <Toaster
        position="top-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "flex w-full items-center gap-2 rounded-lg bg-background-900 px-4 py-3 text-plain-cream shadow-lg [&_svg]:size-5",
            title: "text-button",
            description: "text-body-sm text-plain-cream/80",
            success: "[&_[data-icon]]:text-status-success",
            error: "[&_[data-icon]]:text-status-error",
          },
        }}
      />
    </QueryClientProvider>
  );
}
