'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { updateSection } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store";
import { z } from "zod";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Blog___Form({ blog }: { blog: any }) {

    const { setSelected } = useStore();

    const blogdata = blog?.sectionData;

    // console.log(blogdata?.categories, 'blogdata')

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
            defaultValue: blogdata?.title,
        },
        {
            id: 2,
            type: "slug",
            name: "slug",
            label: "Slug",
            relatedTo: "title",
            validation: z.string().optional(),
            defaultValue: blogdata?.slug,
        },
        {
            id: 3,
            type: "image",
            name: "image",
            label: "Image",
            placeholder: "Upload your image",
            validation: z.any().optional(),
            defaultValue: blogdata?.image,
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options: blogdata?.categories?.map((category: any) => ({
                value: category.id,
                label: category.name,
            })),
            validation: z.any().optional(),
            defaultValues: blogdata?.categories,
        },
        {
            id: 5,
            type: "editor",
            name: "content",
            label: "Content",
            defaultValue: blogdata?.description,
        }
    ]

    const blogFormStructure: FormX__TYPE_Structure = {
        fields: blogFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { title: string, slug: string, content: string, image: File[], categories: [] }) => {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                     // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.image? data?.image[0] : null
                    // console.log(uploadedData, 'uploadedData')
                    const blogData  = {
                        title: data?.title,
                        slug: data?.slug,
                        description: data?.content,
                        image: image?.publicUrl,
                        categories: data?.categories,
                    }
                    // update   section
                    const { updateError } = await updateSection({ data: blogData, sectionName: "blogs", id: blogdata?.id });

                    if(updateError) {
                        Response({
                            title: 'Error  update Blog',
                            description: 'Error update Blog',
                        })
                    } else {
                        Response({
                            title: 'Blog update!',
                            description: 'Blog update',
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



    // console.log(blogdata, 'blogdata');

    return(
        <div className="p-4 shadow-xl rounded-lg border bg-white w-full max-w-[800px] mx-auto">
            <FormX submittionLabel="Update Post" structure={blogFormStructure}  />
        </div>
    )
}