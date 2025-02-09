'use client'
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { createData } from "@/utils/api"
import { z } from "zod"
import Response from "@/components/common/Response";
import { useState } from "react"

export default function Create__Popover({ tableName }: { tableName: string }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formFileds: FormX__TYPE_Field[] = [
    {
      id: 1,
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      validation: z.string().min(2, {
        message: "Name must be at least 2 characters.",
      }),
    },
    {
      id: 2,
      type: "slug",
      name: "slug",
      label: "Slug",
      relatedTo: "name",
      validation: z.string().optional(),
    },

  ]


  const formStructure: FormX__TYPE_Structure = {
    fields: formFileds,
    submission: {
      toast: true,
      submitHandler: async (data) => {
        try {
          setIsLoading(true);
          // console.log(data);

          const newEntry = {
            name: data.name,
            slug: data?.slug,
          }
          
          const { createError } = await createData({ data: newEntry, tableName: tableName });

          if (createError) {
            Response({
              title: "Error Creating Category",
              description: createError.message,
            })
            setIsLoading(false);
          } else {
            Response({
              title: "Category Created",
              description: "Category Created Successfully",
            })
            setIsOpen(false); 
            setIsLoading(false);
          }

        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    },
  }


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <FormX submittionLabel="Create Category"  pending={isLoading} structure={formStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
        </div>

      </DialogContent>
    </Dialog>
  )
}
