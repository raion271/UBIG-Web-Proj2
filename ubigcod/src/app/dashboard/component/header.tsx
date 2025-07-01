"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AppWindowIcon, Bell, ChevronDown, List, LogOut, MessageCircle, Moon, MoreHorizontal, Sun, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardHeader() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    const toggleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

    if (!mounted) {
        return null
    }
    
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <div className="flex items-center gap-2 ml-96">
                    <div className="flex items-center gap-2">
                        <Link href="/Tasks">
                            <Button variant="outline" size="icon" className="w-20">
                                <span className="text-sm">Tasks</span>
                            </Button>
                        </Link>
                        <Link href="/Apps">
                            <Button variant="outline" size="icon" className="w-20">
                                <span className="text-sm">Apps</span>
                            </Button>
                        </Link>
                        <Link href="/Chats">
                            <Button variant="outline" size="icon" className="w-18">
                                <span className="text-sm">Chats</span>
                            </Button>
                        </Link>
                        <Link href="/Users">
                            <Button variant="outline" size="icon" className="w-18">
                                <span className="text-sm">Users</span>
                            </Button>
                        </Link>
                    </div>
                    <Button variant="outline" size="icon">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreHorizontal className="h-[1.2rem] w-[1.2rem]" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <List className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <Link href="/Tasks">Tasks</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AppWindowIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <Link href="/Apps">Apps</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageCircle className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <Link href="/Chats">Chats</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Users className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <Link href="/Users">Users</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    <Link href="/">Logout</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Button>
                </div>
            </div>
            <div className="flex items-center gap-2 ml-auto mr-11">
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-300" />
                </Button>
            </div>
        </header>
    )
}