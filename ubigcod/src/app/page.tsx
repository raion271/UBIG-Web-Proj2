"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  );
}
