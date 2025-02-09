'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { createData } from "@/utils/api";
import Response from "@/components/common/Response";

import { z } from "zod";
import useStore from "@/lib/store";


export default function Review__Form() {

    const { setSelected } = useStore();

    const blogFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            validation: z.string().min(2, {
                message: "Description must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "text",
            name: "author_name",
            label: "Author Name",
            placeholder: "Enter your author name",
            validation: z.string().min(2, {
                message: "Author Name must be at least 2 characters.",
            }),
        },
        {
            id: 3,
            type: "text",
            name: "author_designation",
            label: "Author Designation",
            placeholder: "Enter your author designation",
            validation: z.string().optional()
        },

    ]

    const blogFormStructure: FormX__TYPE_Structure = {
        fields: blogFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { description: string, author_name: string, author_designation: string, image: File }) => {
                try {
  

                    const reviewData  = {
                        description: data?.description,
                        author_name: data?.author_name,
                        author_designation: data?.author_designation,
                        stars: 5,
                    } as const

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const { createError } = await createData({ data: reviewData, tableName: "reviews" });

                    if(createError) {
                        Response({
                            title: 'Error Creating Review',
                            description: 'Error Creating Review',
                        })
                    } else {
                        Response({
                            title: 'Review Created',
                            description: 'Review Created',
                        })  
                    }
                    setSelected([])
                } catch (error) {
                    console.log(error, 'error');
                    setSelected([])
                }
            }
        },
    }


    return(
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX submittionLabel="Create Review" structure={blogFormStructure}  />
            
        </div>
    )
}