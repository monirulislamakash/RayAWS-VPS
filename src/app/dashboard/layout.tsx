import Sidebar from "./_utils/sidebar";
import { getUser } from "@/utils/api";
import { createClient } from "@/utils/supabase/server";
export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const supabase = await createClient();

       //get user details supabase
       const { data: { user } } = await supabase.auth.getUser();
    
    const { usersData } = await getUser({ id: user?.id || '' });

    return (
      <>
        <Sidebar user={usersData}>
            {children}
        </Sidebar>
      </>
    );
  }