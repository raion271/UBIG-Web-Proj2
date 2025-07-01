import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartColumn, CircleDollarSign, CreditCard, Linkedin, Instagram, Github, Plus, Users, ListFilter, Mail, Youtube } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { FaGoogle } from "react-icons/fa";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DashboardHeader from "../dashboard/component/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Apps() {
    return (
        <>
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <DashboardHeader/>
            {/* label */}
            <div className="flex flex-1 flex-col p-3 pt-10 m-5">
                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-col gap-3 w-full">
                            <h1 className="text-2xl font-bold">Apps Integration</h1>
                            <p className="text-sm text-muted-foreground">Connect your apps to your account to get started.</p>
                            <div className="flex flex-wrap gap-3 w-full ">
                                {/* searching bar */}
                                <Input type="text" placeholder="Filter Apps" className="w-1/2" /> 
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1 bg-white-100 rounded-md border-1 border-gray-300 p-1 hover:bg-gray-100">
                                    <ListFilter className="w-4 h-4" />
                                    <span className="text-xs font-medium">All Apps</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Github />
                                        Github
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Instagram />
                                        Instagram
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Linkedin />
                                        Linkedin
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FaGoogle />
                                        Google
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Youtube />
                                        Youtube
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-1 flex-col gap-3 p-4 m-5">
                <div className="grid auto-rows-min gap-3 md:grid-cols-3 flex-wrap">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Github</div>
                                <Github />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Github is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-zinc-500 text-white hover:bg-zinc-600 hover:text-white">
                                Connected
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* subscridivtion */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Instagram</div>
                                <Instagram />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Instagram is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-zinc-500 text-white hover:bg-zinc-600 hover:text-white">
                                Connected 
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* salary */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Linkedin</div>
                                <Linkedin />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Linkedin is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* active user */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Gmail</div>
                                <Mail />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Gmail is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* Youtube */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Youtube</div>
                                <Youtube />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Youtube is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* Google */}
                    
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Google</div>
                                <FaGoogle />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Google is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            </SidebarInset>
        </SidebarProvider>
        </>
    )
}