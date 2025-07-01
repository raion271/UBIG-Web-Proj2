import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartColumn, CircleDollarSign, CreditCard, Users } from "lucide-react"

export default function MainDashboard() {
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
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                    {/* subscription */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div>Subscription</div>
                                <Users />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
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
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
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
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
        </>
    )
}