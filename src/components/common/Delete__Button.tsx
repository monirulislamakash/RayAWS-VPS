'use client'
import { deleteData } from "@/utils/api"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Response from "@/components/common/Response"

export default function DeleteButton({ tableName, id }: { tableName: string, id: number }) {
    const handleDelete = async () => {
        const { deleteError } = await deleteData({ tableName, id });

        if(deleteError) {
            console.log(deleteError)
            Response({
                title: 'Error Deleting Data',
                description: 'Error Deleting Data',
            })
        } else {
            Response({
                title: 'Data Deleted',
                description: 'Data Deleted',
            })
        }
    }
    return (
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>   
    )
};

