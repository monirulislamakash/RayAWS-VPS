import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  BarChartIcon,
  EllipsisVerticalIcon,
  FileTextIcon,
  MessageSquareIcon,
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "@/components/common/Delete__Button";

const Blogs = async ({ slug }: { slug: string }) => {

  const { tableData: blogs} = await getTableData({ tableName: 'blogs' })

  // console.log(blogs, blogsError, 'blogs, blogsError');

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-2xl">Posts</h1>
        <Link href={`/dashboard/${slug}/create`}>
          <Button className="ml-auto" size="sm">
            Add Post
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Posts</CardTitle>
            <CardDescription>
              The total number of blog posts published.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-bold">{blogs?.length}</h3>
              <FileTextIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Comments</CardTitle>
            <CardDescription>
              The total number of comments on blog posts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-bold">2,345</h3>
              <MessageSquareIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Traffic</CardTitle>
            <CardDescription>
              The total number of visitors to the blog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <h3 className="text-4xl font-bold">15,234</h3>
              <BarChartIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              blogs?.map((blog: { id: number, title: string, created_at: string, categories: [] }) => (
                <TableRow key={blog?.id}>
                  <TableCell className="font-medium">
                    {blog?.title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {blog?.created_at}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge>Published</Badge>
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
                          <Link href={`/dashboard/${slug}/update?id=${blog?.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DeleteButton tableName="blogs" id={blog?.id} />  
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

export default Blogs;