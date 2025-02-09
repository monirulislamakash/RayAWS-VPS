'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { updateSection } from "@/utils/api";
import Response from "@/components/common/Response";

import { z } from "zod";
import useStore from "@/lib/store";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Jobs___Form({ jobs, jobCategories }: { jobs: any, jobCategories: any }) {

    const { setSelected } = useStore(); 
    const jobsData = jobs?.sectionData;

    // console.log(jobCategories, 'jobCategories');



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
            defaultValue: jobsData?.name,
        },
        {
            id: 2,
            type: "slug",
            name: "slug",
            label: "Slug",
            relatedTo: "name",
            validation: z.string().optional(),
            defaultValue: jobsData?.slug,
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
            defaultValue: jobsData?.job_type,
        },
        {
            id: 456,
            type: "text",
            name: "vacancies",
            label: "Vacancies",
            placeholder: "Enter your vacancies",
            validation: z.string().min(1, {
                message: "Vacancies must be at least 1 characters.",
            }),
            defaultValue: jobsData?.vacancies,
        },
        {
            id: 56,
            type: "text",
            name: "salary_range",
            label: "Salary Range",
            placeholder: "Enter your salary range",
            validation: z.string().min(1, {
                message: "Salary Range must be at least 1 characters.",
            }),
            defaultValue: jobsData?.salary_range,
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
            defaultValue: jobsData?.exprience,
        },
        {
            id: 645,
            type: "text",
            name: "apply_link",
            label: "Apply Link",
            placeholder: "Enter your apply link",
            validation: z.string().min(1, {
                message: "Apply Link must be at least 1 characters.",
            }),
            defaultValue: jobsData?.apply_link,
        },
        {
            id: 53,
            type: "image",
            name: "image",
            label: "Icon",
            placeholder: "Upload your icon",
            validation: z.any().optional(),
            defaultValue: jobsData?.icon,
        },
        {
            id: 4,
            type: "multi-select",
            name: "categories",
            label: "Categories",
            placeholder: "Select your categories",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options: jobCategories?.map((category: any) => ({
                value: category.id,
                label: category.name,
            })),
            validation: z.any().optional(),
            defaultValues: jobsData?.categories,
        },

        {
            id: 61,
            type: "editor",
            name: "content",
            label: "Content",
            defaultValue: jobsData?.description,
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

                    // update the job

                    const { updateError } = await updateSection({ id: jobsData?.id, sectionName: "jobs", data: jobData });
                    // console.log(updatedData, updateError, 'updatedData, updateError');


                    if (updateError) {
                        Response({
                            title: 'Error Updating Job',
                            description: updateError?.message,
                        })
                    } else {
                        Response({
                            title: 'Job Updated',
                            description: 'Job Updated',
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
            <FormX submittionLabel="Update Job" structure={jobsFormStructure} />
        </div>
    )
}