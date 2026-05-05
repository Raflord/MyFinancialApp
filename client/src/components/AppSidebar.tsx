import {
  IconCalendarWeek,
  IconCashBanknoteMinus,
  IconCashBanknotePlus,
  IconLayoutDashboard,
  IconPigMoney,
} from "@tabler/icons-react";
import { ChartNoAxesCombined } from "lucide-react";
import { NavMain } from "@/components/NavMain";
import { NavUser } from "@/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconLayoutDashboard,
    },
    {
      title: "Income",
      url: "#",
      icon: IconCashBanknotePlus,
    },
    {
      title: "Expenses",
      url: "#",
      icon: IconCashBanknoteMinus,
    },
    {
      title: "Savings",
      url: "#",
      icon: IconPigMoney,
    },
    {
      title: "Planner",
      url: "#",
      icon: IconCalendarWeek,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard">
                <ChartNoAxesCombined className="size-5!" />
                <span className="font-semibold text-base">MyFinancialApp</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: authClient.useSession().data?.user.name,
            email: authClient.useSession().data?.user.email,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
