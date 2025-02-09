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

const Jobs = async ({ slug }: { slug: string }) => {

  const { tableData: jobs } = await getTableData({ tableName: 'jobs' })

// show only first 100 characters of description


  // console.log(jobs, jobsError, 'jobs, jobsError');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Jobs</h1>
        <Link href={`/dashboard/${slug}/create`}>
          <Button className="ml-auto hover:bg-primary hover:text-white" size="sm">
            Add Job
          </Button>
        </Link>
      </div>

      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Salary Range</TableHead>
              <TableHead className="hidden md:table-cell">Remote</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              jobs?.map((job: { id: number, name: string, created_at: string, slug: string, description: string, salary_range: string, remote: string }) => (
                <TableRow key={job?.id}>
                  <TableCell className="font-medium">
                    {job?.name}
                    <p className="text-sm text-gray-500">{job?.slug}</p>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {moment(job?.created_at).format('DD-MMM-YYYY')}    
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {job?.salary_range}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {job?.remote}
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
                          <Link className="flex items-center gap-2" href={`/dashboard/${slug}/update?id=${job?.id}`}>
                            <PencilIcon className="w-4 h-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DeleteButton id={job?.id} tableName="jobs" />  
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

export default Jobs;