import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteButton from "@/components/common/Delete__Button";

import { Button } from "@/components/ui/button";
import {
    EllipsisIcon,

} from "lucide-react";
import Create__Popover from "../categories/Create__Popover";
import { getTableData } from "@/utils/api";



export default async function BlogCategories({ tableName }: { tableName: string }) {
    const { tableData: categories } = await getTableData({ tableName: tableName });
    return (
        <>
            <div className="flex items-center justify-between py-5">
                <h2 className="font-semibold text-lg md:text-2xl">Categories</h2>
                <Create__Popover tableName={tableName} />
            </div>
            <div className="border shadow-sm rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#ID</TableHead>
                            <TableHead className="hidden md:table-cell">Name</TableHead>
                            <TableHead className="hidden md:table-cell">Slug</TableHead>
                            <TableHead className="hidden md:table-cell">Count</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories?.map((category: { id: number, name: string, slug: string, count: number }) => (
                            <TableRow key={category.id}>
                                <TableCell className="font-medium">
                                    {category.id}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {category.name}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {category.slug}
                            </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {category.count || 0}
                                </TableCell>
                                <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <EllipsisIcon className="w-4 h-4" />
                                            <span className="sr-only">Actions</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                     
                                        <DeleteButton id={category?.id} tableName={tableName} /> 
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        </>
    )
}