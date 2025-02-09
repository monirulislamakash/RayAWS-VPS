'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { updateSection } from "@/utils/api";
import Response from "@/components/common/Response";

import { z } from "zod";
import { useState } from "react";
import useStore from "@/lib/store"; 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Review__Form({ reviews }: { reviews: any }) {
    const [isLoading, setIsLoading] = useState(false);
    const { setSelected } = useStore();

    const reviewsData = reviews?.sectionData;

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
            defaultValue: reviewsData?.description,
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
            defaultValue: reviewsData?.author_name,
        },
        {
            id: 3,
            type: "text",
            name: "author_designation",
            label: "Author Designation",
            placeholder: "Enter your author designation",
            validation: z.string().optional(),
            defaultValue: reviewsData?.author_designation,
        },

    ]

    const blogFormStructure: FormX__TYPE_Structure = {
        fields: blogFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { description: string, author_name: string, author_designation: string, image: File }) => {
                try {
                    setIsLoading(true);

                    const reviewData  = {
                        description: data?.description,
                        author_name: data?.author_name,
                        author_designation: data?.author_designation,
                        stars: 5,
                        // image: uploadedData?.url,
                    }

                    // update data

                    const { updateError } = await updateSection({ id: reviewsData?.id, sectionName: "reviews", data: reviewData });

                            // const { createdData, createError } = await createData({ data: reviewData, tableName: "reviews" });
                            // console.log(createdData, createError, 'createdData, createError');

                    if(updateError) {
                        Response({
                            title: 'Error Updating Review',
                            description: updateError?.message,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Review Updated',
                            description: 'Review Updated',
                        })  
                        setIsLoading(false);
                    }
                    setSelected([])
                } catch (error) {
                    console.log(error, 'error');
                    setIsLoading(false);
                    setSelected([])
                }
            }
        },
    }


    return(
        <div className="p-4 shadow-xl rounded-lg border bg-white w-full max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Update Review" structure={blogFormStructure}  />
            
        </div>
    )
}