import DeleteButton from "@/components/common/Delete__Button";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
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
    PencilIcon,
} from "lucide-react";
import Link from "next/link";
import moment from "moment";

const Events = async ({ slug }: { slug: string }) => {

    const { tableData: events } = await getTableData({ tableName: 'events' })

    // console.log(jobs, jobsError, 'jobs, jobsError');

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-lg md:text-2xl">Events</h1>
                <Link href={`/dashboard/${slug}/create`}>
                    <Button className="ml-auto hover:bg-primary hover:text-white" size="sm">
                        Add Event
                    </Button>
                </Link>
            </div>

            <div className="border shadow-sm rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            events?.map((event: { id: number, name: string, created_at: string, slug: string, designation: string, salary_range: string, remote: string, description: string }) => (
                                <TableRow key={event?.id}>
                                    <TableCell className="font-medium">
                                        {event?.name}
                                        <p className="text-sm text-gray-500">{event?.slug}</p>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {moment(event?.created_at).format('DD-MMM-YYYY')}    
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        {event?.description}
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
                                                <DropdownMenuItem >
                                                    <Link className="flex items-center gap-2" href={`/dashboard/${slug}/update?id=${event?.id}`}>
                                                        <PencilIcon className="w-4 h-4" />
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DeleteButton id={event?.id} tableName="events" />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>

                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </main>
    );
};

export default Events;