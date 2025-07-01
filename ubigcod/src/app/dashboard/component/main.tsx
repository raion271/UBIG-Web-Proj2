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
    XAxis,
    YAxis
} from "recharts"
import { 
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart"

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
                            <div className="font-bold text-2xl mb-[-10px]">$45,431.85</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">Card Footer</div>
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
                            <div className="font-bold text-2xl mb-[-10px]">+2,350</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">Card Footer</div>
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
                            <div className="font-bold text-2xl mb-[-10px]">+12,234</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">Card Footer</div>
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
                            <div className="font-bold text-2xl mb-[-10px]">+573</div>
                        </CardContent>
                        <CardFooter>
                            <div className="text-s mt-[-5px]">Card Footer</div>
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
                                        axisLine={true}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                        <CardFooter>
                            <div>Card Footer</div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Card Content</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}