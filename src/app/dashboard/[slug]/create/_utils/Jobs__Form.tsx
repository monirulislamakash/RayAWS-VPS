'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { createData } from "@/utils/api";
import Response from "@/components/common/Response";
import { z } from "zod";
import useStore from "@/lib/store";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Jobs___Form({ categories }: { categories: any }) {

    const { setSelected } = useStore();
    
    const jobsFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "name",
            label: "Name",
            placeholder: "Enter your name",
            validation: z.string().min(2, {
                message: "Title must be at least 2 characters.",
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
        {
            id: 3,
            type: "text",
            name: "job_type",
            label: "Job Type",
            placeholder: "Enter your job type",
            validation: z.string().min(1, {
                message: "Job Type must be at least 1 characters.",
            }),
        },
        {
            id: 4,
            type: "text",
            name: "vacancies",
            label: "Vacancies",
            placeholder: "Enter your vacancies",
            validation: z.string().min(1, {
                message: "Vacancies must be at least 1 characters.",
            }),
        },
        {
            id: 4,
            type: "text",
            name: "salary_range",
            label: "Salary Range",
            placeholder: "Enter your salary range",
            validation: z.string().min(1, {
                message: "Salary Range must be at least 1 characters.",
            }),
        },
        {
            id: 4,
            type: "text",
            name: "exprience",
            label: "Exprience",
            placeholder: "Enter your exprience",
            validation: z.string().min(1, {
                message: "Exprience must be at least 1 characters.",
            }),
        },
        {
            id: 6,
            type: "text",
            name: "apply_link",
            label: "Apply Link",
            placeholder: "Enter your apply link",
            validation: z.string().min(1, {
                message: "Apply Link must be at least 1 characters.",
            }),
        },
        {
            id: 5,
            type: "image",
            name: "image",
            label: "Icon",
            placeholder: "Upload your icon",
            validation: z.any().optional(),
        },

        {
            id: 4,
            type: "multi-select",
            name: "categories",
            label: "Categories",
            placeholder: "Select your categories",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options: categories?.map((category: any) => ({
                value: category.id,
                label: category.name,
            })),
            validation: z.any().optional(),
        },

        {
            id: 6,
            type: "editor",
            name: "content",
            label: "Content",
        }
    ]

    const jobsFormStructure: FormX__TYPE_Structure = {
        fields: jobsFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { name: string, title: string, slug: string, content: string, image: File[], categories: [], job_type: string, vacancies: string, salary_range: string, exprience: string, apply_link: string, remote: string }) => {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.image ? data?.image[0] : null

                    const jobData = {
                        name: data?.name,
                        slug: data?.slug,
                        job_type: data?.job_type,
                        vacancies: data?.vacancies,
                        salary_range: data?.salary_range,
                        exprience: data?.exprience,
                        apply_link: data?.apply_link,
                        remote: data?.remote,
                        icon: image?.publicUrl, // Use the uploaded image URL
                        description: data?.content,
                        categories: data?.categories,
                    }

                    const { createError } = await createData({ data: jobData, tableName: "jobs" });
                    // console.log(createdData, createError, 'createdData, createError');

                    if (createError) {
                        Response({
                            title: 'Error Creating Job',
                            description: createError?.message,
                        })
                    } else {
                        Response({
                            title: 'Job Created',
                            description: 'Job Created',
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


    return (
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX submittionLabel="Publish Job" structure={jobsFormStructure} />
        </div>
    )
}