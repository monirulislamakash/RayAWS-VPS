// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x"
import { updateSection } from "@/utils/api";
import { z } from "zod"
import Response from "@/components/common/Response"
import { useState } from "react";


const Common__Form = ({ sectionDataBranding, blogs, recentNews, sectionDataGallery, }: { sectionDataBranding: { images: string[] }[], blogs: { id: number, title: string }[], recentNews: { heading: string, blogs: number[] }, sectionDataGallery: { images: string[] }[] }) => {


    const [istrafficLoading, setIstrafficLoading] = useState(false);
    const [isadsLoading, setIsadsLoading] = useState(false);
    const [isfeaturedLoading, setIsfeaturedLoading] = useState(false);
    const [isgalleryLoading, setIsgalleryLoading] = useState(false);

    // console.log(recentNews, 'recentNews')

    const trafficFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "image",
            name: "trafficimages",
            multiple: true,
            label: "Traffic Partners Images",
            placeholder: "Upload your traffic partners images",
            validation: z.any(),
            defaultValues: sectionDataBranding[2]?.images
        },
    ];

    const adsFromFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "image",
            name: "adsimages",
            multiple: true,
            label: "Advertising Partners Images",
            placeholder: "Upload your advertising partners images",
            validation: z.any(),
            defaultValues: sectionDataBranding[1]?.images
        },
    ];
    const featuredFromFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "image",
            name: "featuredimages",
            multiple: true,
            label: "Featured Partners Images",
            placeholder: "Upload your featured partners images",
            validation: z.any(),
            defaultValues: sectionDataBranding[0]?.images
        },
    ];

    const trafficFormStructure: FormX__TYPE_Structure = {
        fields: trafficFormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                // console.log(data)

                setIstrafficLoading(true)



                const newEntry = {
                    images: data?.trafficimages
                }

                // update the section
                const { updatedData, updateError } = await updateSection({ id: '1', sectionName: 'branding', data: newEntry })
                if (updateError) {
                    console.log(updateError)
                    Response({
                        title: 'Error Updating Branding Section',
                        description: updateError.message
                    })
                    setIstrafficLoading(false)
                }else{
                    console.log(updatedData)
                    Response({
                        title: 'Branding Section Updated',
                        description: 'Branding Section Updated Successfully'
                    })
                    setIstrafficLoading(false)
                }

            }
        },
    }
    const adsFormStructure: FormX__TYPE_Structure = {
        fields: adsFromFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
          

                setIsadsLoading(true)

                // update the section
                // const results = await uploadFile({ files: data?.adsimages, multiple: true })

                console.log(data?.adsimages, 'data?.adsimages')

                const newEntry = {
                    images: data?.adsimages
                }

                // update the section
                const { updatedData, updateError } = await updateSection({ id: '2', sectionName: 'branding', data: newEntry })
                if (updateError) {
                    console.log(updateError)
                    Response({
                        title: 'Error Updating Branding Section',
                        description: updateError.message
                    })
                    setIsadsLoading(false)
                }else{
                    console.log(updatedData)
                    Response({
                        title: 'Branding Section Updated',
                        description: 'Branding Section Updated Successfully'
                    })
                    setIsadsLoading(false)
                }

            }
        },
    }
    const featuredFormStructure: FormX__TYPE_Structure = {
        fields: featuredFromFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                // update the section
                setIsfeaturedLoading(true)


                const newEntry = {
                    images: data?.featuredimages
                }

                // update the section
                const { updateError } = await updateSection({ id: '3', sectionName: 'branding', data: newEntry })
                if (updateError) {
                    console.log(updateError)
                    Response({
                        title: 'Error Updating Branding Section',
                        description: updateError.message
                    })
                    setIsfeaturedLoading(false)
                }else{
                    Response({
                        title: 'Branding Section Updated',
                        description: 'Branding Section Updated Successfully'
                    })
                    setIsfeaturedLoading(false)
                }
            }
        },
    }


    // gallery
    const galleryFromFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "image",
            name: "galleryimages",
            multiple: true,
            label: "Gallery Images",
            placeholder: "Upload your gallery images",
            validation: z.any(),
            defaultValues: sectionDataGallery?.images
        },
    ];


    const galleryFormStructure: FormX__TYPE_Structure = {
        fields: galleryFromFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                // create the section
                setIsgalleryLoading(true)
                const newEntry = {
                    images: data?.galleryimages
                }

                const { updateError } = await updateSection({ id: '1', sectionName: 'gallery', data: newEntry })
                if (updateError) {
                    // console.log(createError)
                    Response({
                        title: 'Error Updating Gallery Section',
                        description: updateError?.message
                    })
                    setIsgalleryLoading(false)
                } else {
                    Response({
                        title: 'Gallery Section Updated',
                        description: 'Gallery Section Updated Successfully'
                    })
                    setIsgalleryLoading(false)
                }


            }
        },
    }




    // recent news

    const recentNewsFromFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "text",
            name: "heading",
            label: "Heading",
            placeholder: "Enter your heading",
            validation: z.string().min(1, { message: "Heading is required" }),
            defaultValue: recentNews?.heading
        },
        {
            id: 2,
            type: "multi-select",
            name: "blogs",
            label: "Blogs",
            placeholder: "Select your blogs",
            options: blogs?.map((blog) => ({
                value: blog.id,
                label: blog.title,
            })),
            validation: z.any().optional(),
            defaultValues: recentNews?.blogs || [],
            defaultOptions: recentNews?.blogs || []
        },
    ]

    const recentNewsFormStructure: FormX__TYPE_Structure = {
        fields: recentNewsFromFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                // update the section
                const newEntry = {
                    heading: data?.heading,
                    blogs: data?.blogs
                }

                const { updateError } = await updateSection({ id: '1', sectionName: 'recent_blogs_section', data: newEntry })
                if (updateError) {
                    console.log(updateError)
                    Response({
                        title: 'Error Updating Recent Blogs Section',
                        description: updateError.message
                    })
                } else {
                    Response({
                        title: 'Recent Blogs Section Updated',
                        description: 'Recent Blogs Section Updated Successfully'
                    })
                }
            }
        },
    }

    // console.log(sectionDataBranding[0]?.images, 'defaultValues')



    return (
        <div className="Wrapper space-y-4">
            <div className=" space-y-4 pt-5 border p-4  rounded-lg bg-white shadow-xl ">
                <h4 className="text-3xl font-bold capitalize text-center">Branding Sections</h4>
                <FormX pending={istrafficLoading} structure={trafficFormStructure} submittionLabel="Save Section" className="" />
                <FormX pending={isadsLoading} structure={adsFormStructure} submittionLabel="Save Section" className="" />
                <FormX pending={isfeaturedLoading} structure={featuredFormStructure} submittionLabel="Save Section" className="" />

            </div>

            <div className=" space-y-4 pt-5 border p-4  rounded-lg bg-white shadow-xl ">
                <h4 className="text-3xl font-bold capitalize text-center">Gallery Section</h4>
                <FormX pending={isgalleryLoading} structure={galleryFormStructure} submittionLabel={sectionDataGallery?.images?.length ? 'Update Section' : 'Save Section'} className="" />
            </div>

            <div className=" space-y-4 pt-5 border p-4  rounded-lg bg-white shadow-xl ">
                <h4 className="text-3xl font-bold capitalize text-center">Recent News Section</h4>
                <FormX structure={recentNewsFormStructure} submittionLabel="Save Section" className="" />
            </div>

        </div>
    )
}

export default Common__Form;
