'use client'

import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import Response from "@/components/common/Response";
import { updateSection } from "@/utils/api";
import { z } from "zod";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pages__Form({privacyDataOtherContents, termsConditionDataOtherContents}: {privacyDataOtherContents: any, termsConditionDataOtherContents: any}) {
    const [isPrivacyPolicyLoading, setIsPrivacyPolicyLoading] = useState(false);
    const [isTermsConditionLoading, setIsTermsConditionLoading] = useState(false);

    const PrivacyPolicyFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "editor",
            name: "content",
            label: "Content",
            placeholder: "Enter your content",
            validation: z.any(),
            defaultValue: privacyDataOtherContents?.content || ""
        },
    ]
    
    const TermsConditionFormFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            type: "editor",
            name: "content",
            label: "Content",
            placeholder: "Enter your content",
            validation: z.any(),
            defaultValue: termsConditionDataOtherContents?.content || ""
        },
    ]


    const privacyPolicyFormStructure: FormX__TYPE_Structure = {
        fields: PrivacyPolicyFormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                try {
                    setIsPrivacyPolicyLoading(true)
                    const {updateError} = await updateSection({ sectionName: 'other_contents', id: '1', data: data });

                    if(updateError){    
                        Response({
                            title: 'Privacy Policy',
                            description: 'Privacy Policy updated failed',
                            success: false
                        })
                    }else{
                        Response({
                            title: 'Privacy Policy',
                            description: 'Privacy Policy updated successfully',
                            success: true
                        })
                    }

                    setIsPrivacyPolicyLoading(false)
                    // console.log(response)
                } catch (error) {
                    console.log(error)
                    Response({
                        title: 'Privacy Policy',
                        description: 'Privacy Policy updated failed',
                        success: false
                    })
                    setIsPrivacyPolicyLoading(false)
                }
            }

        },
    }


    const termsConditionFormStructure: FormX__TYPE_Structure = {
        fields: TermsConditionFormFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                
                try {
                    setIsTermsConditionLoading(true)
                    const {updateError} = await updateSection({ sectionName: 'other_contents', id: '2', data: data });

                    if(updateError){    
                        Response({
                            title: 'Terms & Condition',
                            description: 'Terms & Condition updated failed',
                            success: false
                        })
                    }else{
                        Response({
                            title: 'Terms & Condition',
                            description: 'Terms & Condition updated successfully',
                            success: true
                        })
                    }

                    setIsTermsConditionLoading(false)
                } catch (error) {
                    console.log(error)
                    Response({
                        title: 'Terms & Condition',
                        description: 'Terms & Condition updated failed',
                        success: false
                    })
                    setIsTermsConditionLoading(false)
                }
            }

        },
    }
    


    return (
        <div className="Wrapper space-y-4">
            <h4 className="text-3xl font-bold capitalize text-center">Privacy Policy</h4>
            <FormX pending={isPrivacyPolicyLoading} structure={privacyPolicyFormStructure} submittionLabel="Save Section" className=""/>
            <h4 className="text-3xl font-bold capitalize text-center">Terms & Condition</h4>
            <FormX pending={isTermsConditionLoading} structure={termsConditionFormStructure} submittionLabel="Save Section" className=""/>

        </div>
    )
}