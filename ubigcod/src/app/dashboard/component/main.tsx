"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartColumn, CircleDollarSign, CreditCard, Users } from "lucide-react"
import { 
    Bar, 
    BarChart,
    CartesianGrid,
    LineChart,
    XAxis,
    YAxis
} from "recharts"
import { 
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function DashboardMain() {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "var(--chart-2)",
        },
        mobile: {
            label: "Mobile",
            color: "var(--chart-3)",
        },
    } satisfies ChartConfig
    const summaryStats = {
        totalRevenue: 45431.85, 
        subscriptions: 2350, 
        sales: 12234, 
        activeUsers: 573
    }
    const recentSales = [
        { name: "Olivia Martin", email: "olivia@insidemail.com", amount: 1299.00 },
        { name: "Jackson Lee", email: "jackson@email.com", amount: 539.00 }

    ]
    
    const formatCurrency = (num: number) => {
        return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US');
    }
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 m-5">
                <div className="grid auto-rows-min gap-4 md:grid-cols-4 flex-wrap">
                    {/* total revenue */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="font-bold">Total Revenue</div>
                                <CircleDollarSign />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-2xl mb-[-10px]">{ formatCurrency(summaryStats["totalRevenue"]) }</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">+23.1% dari bulan lalu</div>
                        </CardFooter>
                    </Card>
                    {/* subscridivtion */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="font-bold">Subscription</div>
                                <Users />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-2xl mb-[-10px]">+{ formatNumber(summaryStats["subscriptions"]) }</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">+180.7% dari bulan lalu</div>
                        </CardFooter>
                    </Card>
                    {/* salary */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="font-bold">Salary</div>
                                <CreditCard />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-2xl mb-[-10px]">+{ formatNumber(summaryStats["sales"]) }</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">+15% dari bulan lalu</div>
                        </CardFooter>
                    </Card>
                    {/* active user */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="font-bold">Active Now</div>
                                <ChartColumn />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="font-bold text-2xl mb-[-10px]">+{ formatNumber(summaryStats["activeUsers"]) }</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">+201 aktif dari jam lalu</div>
                        </CardFooter>
                    </Card>
                </div>
                {/* baris kedua */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 flex-wrap">
                    <Card>
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid vertical={true} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={true}
                                        tickMargin={10}
                                        axisLine={true}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis
                                        tickLine={true}
                                        tickMargin={10}
                                        axisLine={true}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <LineChart accessibilityLayer />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="m-5">
                                {recentSales.map((recentSale) => (
                                    <div key={recentSale.email}>
                                        <div className="mt-5 w-full flex justify-between text-center">
                                            <Avatar className="w-10 h-10 m-2">
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col justify-center">
                                                <h1 className="text-m font-bold text-xl">{ recentSale["name"] }</h1>
                                                <p className="text-xs">{ recentSale["email"] }</p>
                                            </div>
                                            <h1 className="p-5 font-bold">+{formatCurrency(recentSale["amount"]) }</h1>
                                        </div>
                                        <Separator />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}