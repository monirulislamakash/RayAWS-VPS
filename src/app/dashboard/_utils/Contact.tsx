
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getTableData } from "@/utils/api";
import {
    EllipsisVerticalIcon,
} from "lucide-react";

import DeleteButton from "@/components/common/Delete__Button";

const Contact = async () => {

    const { tableData: contacts } = await getTableData({ tableName: 'contacts' })

    // console.log(blogs, blogsError, 'blogs, blogsError');

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg md:text-2xl">Contacts</h1>
                {/* <Link href={`/dashboard/${slug}/create`}>
          <Button className="ml-auto" size="sm">
            Add Post
          </Button>
        </Link> */}
            </div>
            <div className="border shadow-sm rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Full Name</TableHead>
                            <TableHead className="hidden md:table-cell"> Email</TableHead>
                            <TableHead className="hidden md:table-cell">Message</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            contacts?.length ?
                                contacts?.map((contact: { id: number, full_name: string, email: string, message: string, created_at: string }) => (
                                    <TableRow key={contact?.id}>
                                        <TableCell className="font-medium">
                                            {contact?.full_name}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {contact?.email}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {contact?.message}
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
                                                    <DeleteButton tableName="contacts" id={contact?.id} />
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>

                                ))
                                :
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No contacts found!</TableCell>
                                </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
        </main>
    );
};

export default Contact;