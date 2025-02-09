import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      isActive: true,
    },
    {
      title: "Blogs",
      url: "/dashboard/blogs",
      items: [
        {
          title: "All Blogs",
          url: "/dashboard/blogs",
        },
        {
          title: "All Categories",
          url: "/dashboard/blogs/categories",
        },
      ],
    },
    {
      title: "Jobs",
      url: "/dashboard/jobs",
      items: [
        {
          title: "All Jobs",
          url: "/dashboard/jobs",
        },
        {
          title: "All Categories",
          url: "/dashboard/jobs/categories",
        },
      ],
    },
    {
      title: 'Teams',
      url: '/dashboard/teams',
      items: [
        {
          title: 'All Teams',
          url: '/dashboard/teams',
        },
        {
          title: 'Team Categories',
          url: '/dashboard/teams/categories',
        },
        
      ],
    },
    {
      title: 'Faqs',
      url: '/dashboard/faqs',
    },
    {
      title: 'Contact',
      url: '/dashboard/contact',
    },
    {
      title: 'Cards',
      url: '/dashboard/cards',
    },
    {
      title: "Reviews",
      url: "/dashboard/reviews",
    },
    {
      title: 'Events',
      url: '/dashboard/events',
    },
   
    {
      title: 'Users',
      url: '/dashboard/users',
    },
    {
      title: 'Settings',
      url: '/dashboard/settings',
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Ray Dashboard</span>
                  {/* <span className="">v1.0.0</span> */}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
