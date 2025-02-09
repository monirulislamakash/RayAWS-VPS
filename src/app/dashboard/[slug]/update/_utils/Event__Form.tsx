'use client';
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { updateSection } from "@/utils/api";
import Response from "@/components/common/Response";
import useStore from "@/lib/store";
import { z } from "zod";
import { useState } from "react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Event___Form({ events: { sectionData } }: { events: any }) {

    const [isLoading, setIsLoading] = useState(false);
    const { setSelected } = useStore();

    const eventFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "name",
            label: "Event Name",
            placeholder: "Enter your event name",
            validation: z.string().min(2, {
                message: "Name must be at least 2 characters.",
            }),
            defaultValue: sectionData?.name,
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
            name: "start_date",
            label: "Start Date",
            placeholder: "Enter your start date",
            validation: z.any().optional(),
            defaultValue: sectionData?.start_date,
        },
        {
            id: 3,
            type: "text",
            name: "end_date",
            label: "End Date",
            placeholder: "Enter your end date",
            validation: z.any().optional(),
            defaultValue: sectionData?.end_date,
        },
        {
            id: 4,
            type: "text",
            name: "location",
            label: "Location",
            placeholder: "Enter your location",
            validation: z.any().optional(),
            defaultValue: sectionData?.location,
        },
        {
            id: 6,
            type: "image",
            name: "images",
            multiple: true,
            label: "Images",
            placeholder: "Upload your images",
            validation: z.any().optional(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            defaultValues: sectionData?.images,
        },
        {
            id: 7,
            type: "editor",
            name: "content",
            label: "Description",
            placeholder: "Enter your description",
            defaultValue: sectionData?.content,
            validation: z.any().optional(),
        }
    ]

    const eventFormStructure: FormX__TYPE_Structure = {
        fields: eventFormFields,
        submission: {
            toast: true,
            submitHandler: async (data: { name: string, start_date: string, end_date: string, location: string, images: File[], content?: string }) => {
                try {
                    setIsLoading(true);
                    
                    if (data?.images?.length) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any

                        // console.log(uploadedData, 'uploadedData');

                        const eventData = {
                            name: data?.name,
                            start_date: data?.start_date,
                            end_date: data?.end_date,
                            location: data?.location,
                            images: data?.images,
                            content: data?.content,
                        }

                        // console.log(eventData, 'eventData');

                        // update the event data

                        if(data?.images?.length){
                            const { updateError } = await updateSection({ data: eventData, sectionName: "events", id: sectionData?.id });

                        // const {  createError } = await createData({ data: eventData, tableName: "events" });


                        // console.log(createdData, createError, 'createdData, createError');

                        if (updateError) {
                            Response({
                                title: 'Error Updating Event',
                                description: updateError?.message,
                            })
                            setIsLoading(false);
                        } else {
                            Response({
                                title: 'Event Updated',
                                description: 'Event Updated',
                            })
                            setIsLoading(false);
                        }
                        }else{
                            Response({
                                title: 'Error Updating Event',
                                description: 'Error Updating Event',
                            })
                            setIsLoading(false);
                        }
                        
                    } else {


                        // console.log(uploadedData, uploadError, 'uploadedData, uploadError');

                        const eventData = {
                            name: data?.name,
                            start_date: data?.start_date,
                            end_date: data?.end_date,
                            location: data?.location,
                            content: data?.content,
                        }

                        // update the event data


                        const { updateError } = await updateSection({ data: eventData, sectionName: "events", id: sectionData?.id });


                        if (updateError) {
                            Response({
                                title: 'Error Updating Event',
                                description: updateError?.message,
                            })
                            setIsLoading(false);
                        } else {
                            Response({
                                title: 'Event Updated',
                                description: 'Event Updated',
                            })
                            setIsLoading(false);
                        }
                    }
                    setSelected([]) 
                } catch (error) {
                    console.log(error, 'error');
                    Response({
                        title: 'Error Updating Event',
                        description: `Error Updating Event: ${error}`,
                    })
                    setIsLoading(false);
                    setSelected([])     
                }
            }
        },
    }


    return (
        <div className="p-4 shadow-xl rounded-lg border bg-white max-w-[800px] mx-auto w-full">
            <FormX pending={isLoading} submittionLabel="Update Event" structure={eventFormStructure} />

        </div>
    )
}