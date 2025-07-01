import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import DashboardMain from "./component/main"
import DashboardHeader from "./component/header"
export default function Dashboard() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <DashboardHeader/>   
                <DashboardMain />
            </SidebarInset>
        </SidebarProvider>
    )
}
