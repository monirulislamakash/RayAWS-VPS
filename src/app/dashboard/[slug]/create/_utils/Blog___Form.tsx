'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { createData } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store"; 
import { z } from "zod";
import { createClient } from "@/utils/supabase/client";

type Category = {
    id: string;
    name: string;
    slug: string;
}

export default function Blog___Form({ categories }: { categories: Category[] }) {

    const { setSelected } = useStore();
    const blogFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "title",
            label: "Title",
            placeholder: "Enter your title",
            validation: z.string().min(2, {
                message: "Title must be at least 2 characters.",
            }),
        },
        {
            id: 2,
            type: "slug",
            name: "slug",
            label: "Slug",
            relatedTo: "title",
            validation: z.string().optional(),
        },
        {
            id: 3,
            type: "image",
            name: "image",
            label: "Image",
            placeholder: "Upload your image",
            validation: z.any().optional(),
        },
        // {
        //     id: 3,
        //     type: "select",
        //     name: "category",
        //     label: "Category",
        //     placeholder: "Select your category",
        //     options: [
        //         { value: "technology", label: "Technology" },
        //         { value: "business", label: "Business" },
        //         { value: "design", label: "Design" },
        //     ]
        // },
        {
            id: 4,
            type: "multi-select",
            name: "categories",
            label: "Categories",
            placeholder: "Select your categories",
            options: categories.map((category) => ({
                value: category.id,
                label: category.name,
            })),
            validation: z.any().optional(),
        },
        {
            id: 5,
            type: "editor",
            name: "content",
            label: "Content",
        }
    ]

    const blogFormStructure: FormX__TYPE_Structure = {
        fields: blogFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { title: string, slug: string, content: string, image: File[], categories: [] }) => {
                try {
                    const supabase = createClient()
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.image? data?.image[0] : null

                    const { data: userData } = await supabase.auth.getUser()

                    // console.log(uploadedData, 'uploadedData');

                    const blogData  = {
                        title: data?.title,
                        slug: data?.slug,
                        description: data?.content,
                        image: image?.publicUrl,
                        categories: data?.categories,
                        author_id: userData?.user?.id
                    }
                    const { createError } = await createData({ data: blogData, tableName: "blogs" });
                    // console.log(createdData, createError, 'createdData, createError');

                    if(createError) {
                        Response({
                            title: 'Error Creating Blog',
                            description: 'Error Creating Blog',
                        })
                    } else {
                        Response({
                            title: 'Blog Created',
                            description: 'Blog Created',
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
        <div className="p-4 shadow-xl rounded-lg border bg-white w-full max-w-[800px] mx-auto">
            <FormX submittionLabel="Publish Post" structure={blogFormStructure}  />
            
        </div>
    )
}