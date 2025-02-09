'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormX, FormX__TYPE_Field, FormX__TYPE_Structure } from "@/components/form-x/form-x";
import { useState } from "react";
import Response from "@/components/common/Response";
import { createClient } from "@/utils/supabase/client";
import { resetPassword, resetPasswordEmail, updateProfile } from "@/utils/api";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Settings({ user, profileData }: { user: any, profileData: any }) {
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const code = searchParams.get('code');

    const router = useRouter();

    const formFields: FormX__TYPE_Field[] = [
        {
            label: "Email",
            name: "email",
            type: "text",
            defaultValue: user?.email,
        },
    ]


    const formStructure: FormX__TYPE_Structure = {
        fields: formFields,
        submission: {
            toast: true,
            submitHandler: async (data: { email: string }) => {
                try {
                    setIsLoading(true);

                    const { userError } = await resetPasswordEmail({ email: data.email });
                    // console.log(userData, userError, 'userData, userError');

                    if (userError) {
                        Response({
                            title: 'Error Sending Reset Password Email',
                            description: `${userError}`,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Reset Password Email Sent',
                            description: `Reset Password Email Sent to ${data.email}`,
                        })
                        setIsLoading(false);
                    }

                } catch (error) {
                    console.log(error, 'error');
                    Response({
                        title: 'Error Sending Reset Password Email',
                        description: `${error}`,
                    })
                    setIsLoading(false);
                }
            }
        },
    }

    // reset password
    const formResetPasswordFields: FormX__TYPE_Field[] = [
        {
            label: "New Password",
            name: "password",
            type: "password",
        },
    ]

    const formResetPasswordStructure: FormX__TYPE_Structure = {
        fields: formResetPasswordFields,
        submission: {
            toast: true,
            submitHandler: async (data: { password: string }) => {
                // console.log(data, 'data');
                setIsLoading(true);
                const { error } = await resetPassword({ password: data.password });
                // console.log(userData, error, 'userData, error');

                if (error) {
                    Response({
                        title: 'Error Resetting Password',
                        description: `${error}`,
                    })
                    setIsLoading(false);
                } else {
                    Response({
                        title: 'Password Reset Successfully',
                        description: `Password Reset Successfully`,
                    })
                    const supabase = createClient();
                    const { error } = await supabase.auth.signOut();
                    if (error) {
                        console.log(error);
                    } else {
                        router.push("/auth");
                    }
                    setIsLoading(false);
                }

            }
        }
    }


    // update profile
    const formUpdateProfileFields: FormX__TYPE_Field[] = [
        {
            id: 1,
            label: "Avatar",
            name: "avatar",
            type: "image",
            defaultValue: profileData?.avatar_url,
            validation: z.any().optional(),

        },
        {
            id: 2,
            label: "Name",
            name: "name",
            type: "text",
            defaultValue: profileData?.full_name,
        },

    ]

    const formUpdateProfileStructure: FormX__TYPE_Structure = {
        fields: formUpdateProfileFields,
        submission: {
            toast: true,
            submitHandler: async (data: { avatar: File[], name: string }) => {

                // upload image to supabase
                if (data?.avatar) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const image: any = data?.avatar ? data?.avatar[0] : null

                    const { error } = await updateProfile({ avatar: image?.publicUrl, name: data.name, id: user?.id });

     
                    if (error) {
                        Response({
                            title: 'Error Updating Profile',
                            description: `${error}`,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Profile Updated Successfully',
                            description: `Profile Updated Successfully`,
                        })
                        setIsLoading(false);
                    }
                } else {

                    const { error } = await updateProfile({ name: data.name, id: user?.id });

                    if (error) {
                        Response({
                            title: 'Error Updating Profile',
                            description: `${error}`,
                        })
                        setIsLoading(false);
                    } else {
                        Response({
                            title: 'Profile Updated Successfully',
                            description: `Profile Updated Successfully`,
                        })
                        setIsLoading(false);
                    }
                }
            }
        }
    }



    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Send Reset Email</CardTitle>
                </CardHeader>
                <CardContent>
                    {
                        code ?
                            <FormX submittionLabel="Reset Password" pending={isLoading} structure={formResetPasswordStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
                            :
                            <FormX submittionLabel="Send Reset Email" pending={isLoading} structure={formStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
                    }
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Update Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <FormX submittionLabel="Update Profile" pending={isLoading} structure={formUpdateProfileStructure} className="p-4 shadow-xl rounded-lg border bg-white" />
                </CardContent>
            </Card>

        </div>
    )
}