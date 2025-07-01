import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartColumn, CircleDollarSign, CreditCard, Users } from "lucide-react"

export default function DashboardMain() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 m-5">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4 flex-wrap">
                    {/* total revenue */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Total Revenue</div>
                                <CircleDollarSign />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>$45,431.85</div>
                        </CardContent>
                        <CardFooter>
                            <div>Card Footer</div>
                        </CardFooter>
                    </Card>
                    {/* subscridivtion */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Subscridivtion</div>
                                <Users />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>+2,350</div>
                        </CardContent>
                        <CardFooter>
                            <div>Card Footer</div>
                        </CardFooter>
                    </Card>
                    {/* salary */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Salary</div>
                                <CreditCard />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>+12,234</div>
                        </CardContent>
                        <CardFooter>
                            <div>Card Footer</div>
                        </CardFooter>
                    </Card>
                    {/* active user */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Active User</div>
                                <ChartColumn />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>Card Content</div>
                        </CardContent>
                        <CardFooter>
                            <div>Card Footer</div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 flex-wrap">
                    <Card>
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}