// import DeleteButton from "@/components/common/Delete__Button";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { getTableData } from "@/utils/api";
// import {
//   EllipsisVerticalIcon,
//   PencilIcon,
// } from "lucide-react";
// import Link from "next/link";
import Create__Popover from "./Pop__over";
import { getUsers } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import DeleteButton from "@/components/common/Delete__Button";
import { EllipsisVerticalIcon } from "lucide-react";
import moment from "moment";

// { slug }: { slug: string }
const Users = async () => {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const { usersData } = await getUsers();



  // console.log(jobs, jobsError, 'jobs, jobsError');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
          <Create__Popover />
      </div>

      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              usersData?.length ?

              usersData?.map((user: { id: number, full_name: string, email: string, created_at: string, role: string, description: string }) => (
                <TableRow key={user?.id}>
                  <TableCell className="font-medium">
                    {user?.full_name}
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user?.email}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {moment(user?.created_at).format('DD-MM-YYYY')}
                  </TableCell>


                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <EllipsisVerticalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DeleteButton id={user?.id} tableName="profiles" />  
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

              )) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-5 w-full">No Users Found.</TableCell>
                </TableRow>
              )
            }

          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default Users;