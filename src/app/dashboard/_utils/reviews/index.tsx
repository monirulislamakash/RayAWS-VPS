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
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "@/components/common/Delete__Button";
import moment from "moment";
const Reviews = async ({ slug }: { slug: string }) => {

  const { tableData: reviews } = await getTableData({ tableName: 'reviews' })

  // console.log(jobs, jobsError, 'jobs, jobsError');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Reviews</h1>
        <Link href={`/dashboard/${slug}/create`}>
          <Button className="ml-auto hover:bg-primary hover:text-white" size="sm">
            Add Review
          </Button>
        </Link>
      </div>

      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author Name</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              reviews?.map((review: { id: number, author_name: string, created_at: string, slug: string, description: string, salary_range: string, remote: string }) => (
                <TableRow key={review?.id}>
                  <TableCell className="font-medium">
                    {review?.author_name}
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    {moment(review?.created_at).format('DD-MMM-YYYY')}    
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
                        <DropdownMenuItem>
                          <Link href={`/dashboard/${slug}/update?id=${review?.id}`}> Edit </Link>
                        </DropdownMenuItem>
                        <DeleteButton tableName="reviews" id={review?.id} />    
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

export default Reviews;