'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { updateSection } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store";
import { z } from "zod";
import { useState } from "react";

type Category = {
    id: string;
    name: string;
    slug: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Blog___Form({ teamCategories, team }: { teamCategories: Category[], team: any }) {
    
    const [isLoading, setIsLoading] = useState(false);
    const { setSelected } = useStore();

    const teamDatas = team?.sectionData;

    const blogFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "name",
            label: "Member Name",
            placeholder: "Enter your name",
            validation: z.string().min(2, {
                message: "Name must be at least 2 characters.",
            }),
            defaultValue: teamDatas?.name,
        },
        // {
        //     id: 2,
        //     type: "slug",
        //     name: "slug",
        //     label: "Slug",
        //     relatedTo: "name",
        //     validation: z.string().optional(),
        // },
        {
            id: 5,
            type: "text",
            name: "designation",
            label: "Designation",
            placeholder: "Enter your designation",
            validation: z.any().optional(),
            defaultValue: teamDatas?.designation,
        },
        {
            id: 3,
            type: "image",
            name: "image",
            label: "Avatar",
            placeholder: "Upload your avatar",
            validation: z.any().optional(),
            defaultValue: teamDatas?.image,
        },
        {
            id: 4,
            type: "multi-select",
            name: "categories",
            label: "Categories",
            placeholder: "Select your categories",
            options: teamCategories?.map((category) => ({
                value: category.id,
                label: category.name,
            })),
            validation: z.any().optional(),
            defaultValue: teamDatas?.categories,
        },

        {
            id: 6,
            type: "text",
            name: "facebook",
            label: "Facebook",
            placeholder: "Enter your facebook",
            validation: z.any().optional(),
            defaultValue: teamDatas?.facebook,
        },
        {
            id: 7,
            type: "text",
            name: "linkedin",
            label: "Linkedin",
            placeholder: "Enter your linkedin",
            validation: z.any().optional(),
            defaultValue: teamDatas?.linkedin,
        },
        {
            id: 8,
            type: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Enter your description",
            validation: z.any().optional(),
            defaultValue: teamDatas?.description,
        }
    ]

    // console.log(teamDatas, 'teamData');

    const blogFormStructure: FormX__TYPE_Structure = {
        fields: blogFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: {id: string, name: string, slug: string, designation: string, image: File[], categories: [], facebook: string, linkedin: string, description: string }) => {
                try {
                    setIsLoading(true);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.image ? data?.image[0] : null

                    // console.log(uploadedData, uploadError, 'uploadedData, uploadError');

                    const teamData  = {
                        name: data?.name,
                        designation: data?.designation,
                        image: image?.publicUrl,
                        categories: data?.categories,
                        description: data?.description,
                        facebook: data?.facebook,
                        linkedin: data?.linkedin,
                    }
                    // const {  createError } = await createData({ data: teamData, tableName: "teams" });
                    // console.log(createdData, createError, 'createdData, createError');

                    // update data             
                    const { updateError } = await updateSection({ 
                        id: teamDatas?.id, 
                        sectionName: "teams", 
                        data: teamData 
                    });
                    console.log(updateError, 'updateError');
                    if(updateError) {
                        Response({
                            title: 'Error Updating Team',
                            description: updateError?.message,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Team Updated',
                            description: 'Team Updated',
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
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Update Member" structure={blogFormStructure}  />
            
        </div>
    )
}