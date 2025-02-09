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

const Teams = async ({ slug }: { slug: string }) => {

  const { tableData: cards } = await getTableData({ tableName: 'cards' })

  // console.log(jobs, jobsError, 'jobs, jobsError');


  console.log(cards, 'cards')

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Cards</h1>
        <Link href={`/dashboard/${slug}/create`}>
          <Button className="ml-auto hover:bg-primary hover:text-white" size="sm">
            Add Card
          </Button>
        </Link>
      </div>

      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Show on</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              cards?.map((card: { id: number, title: string, created_at: string, section: string }) => (
                <TableRow key={card?.id}>
                  <TableCell className="font-medium">
                    {card?.title}
                  </TableCell>  
                  <TableCell>{card?.section}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {moment(card?.created_at).format('DD-MMM-YYYY')}    
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
                          <Link className="flex items-center gap-2" href={`/dashboard/${slug}/update?id=${card?.id}`}>
                            <PencilIcon className="w-4 h-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DeleteButton id={card?.id} tableName="cards" />  
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

export default Teams;