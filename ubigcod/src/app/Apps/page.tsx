import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartColumn, CircleDollarSign, CreditCard, Linkedin, Instagram, Github, Plus, Users, ListFilter } from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
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
            <div className="flex flex-1 flex-col p-3 m-5">
                <div className="flex flex-wrap gap-3">
                    <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-bold">Apps Integration</h1>
                            <p className="text-sm text-muted-foreground">Connect your apps to your account to get started.</p>
                            <div className="flex flex-wrap gap-3 w-full">
                                {/* searching bar */}
                                <Input type="text" placeholder="Filter Apps" className="w-full" />
                                <Button variant="outline" className="w-fit "> 
                                    <Plus />
                                    Add New
                                </Button>
                            </div>
                            {/* dropdown All Apps */}
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="outline" className="w-fit">
                                        <ListFilter />
                                        All Apps
                                    </Button>
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
                                        <CreditCard />
                                        Credit Card
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                    </div>
                </div>
            </div>







            <div className="flex flex-1 flex-col gap-3 p-4 pt-0 m-5">
                <div className="grid auto-rows-min gap-3 md:grid-cols-3 flex-wrap">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Github</div>
                                <Users />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Github is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* total revenue */}
                    
                    {/* subscridivtion */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Instagram</div>
                                <Users />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Instagram is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* salary */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Linkedin</div>
                                <CreditCard />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Linkedin is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit">
                                Connect
                            </Button>
                        </CardFooter>
                    </Card>
                    {/* active user */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Gmail</div>
                                <ChartColumn />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Gmail is a social media platform for developers to connect and share their projects.</div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-fit">
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