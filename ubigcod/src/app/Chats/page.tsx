import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { 
  Search, 
  MessageCircle, 
  SendHorizontal
} from "lucide-react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import DashboardHeader from "../dashboard/component/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"

export default function Chats() {
  const conversations = [
    {
      id: 1,
      name: "Irfan",
      message: "...",
      time: "10:45 AM",
      isActive: true,
      isUnread: true
    },
    {
      id: 2,
      name: "Irfan",
      message: "...",
      time: "Yesterday",
      isActive: false,
      isUnread: false
    },
    {
      id: 3,
      name: "Irfan",
      message: "...",
      time: "Yesterday",
      isActive: false,
      isUnread: true
    },
    {
      id: 4,
      name: "Irfan",
      message: "...",
      time: "2 days ago",
      isActive: false,
      isUnread: false
    },
    {
      id: 5,
      name: "Irfan",
      message: "...",
      time: "3 days ago",
      isActive: false,
      isUnread: false
    }
  ]

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <div className="flex h-[calc(100vh-64px)] bg-">
            {/* Sidebar Chat/Inbox */}
            <div className="w-72 border-r border-gray-200 overflow-y-auto">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold mb-4">Chats</h2>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Search Chat" 
                    className="pl-8 w-full bg-gray-100 rounded-md" 
                  />
                  <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-500" />
                </div>
              </div>
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div 
                    key={conversation.id} 
                    className={`p-3 hover:bg-gray-100 cursor-pointer ${conversation.isActive ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <Avatar className="w-8 h-8 bg-gray-200 text-black">
                          {conversation.name.substring(0, 2).toUpperCase()}
                        </Avatar>
                        {conversation.isUnread && (
                          <span className="absolute -top-1 -right-1 bg-yellow-400 w-2.5 h-2.5 rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium truncate">{conversation.name}</p>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conversation.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-6">
                <Card className="w-96 text-center">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="bg-gray-800 p-4 rounded-lg mb-4">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Your messages</h3>
                    <p className="text-sm text-gray-500 mb-6">Send a message to start a chat.</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Send message
                      <SendHorizontal className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
