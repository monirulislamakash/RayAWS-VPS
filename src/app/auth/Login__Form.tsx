'use client'
import { FormX, FormX__TYPE_Structure, FormX__TYPE_Field } from "@/components/form-x/form-x";
import { loginUser } from "@/utils/api";
import Response from "@/components/common/Response";
import { useRouter } from "next/navigation";
export default function Login__Form() {
    const router = useRouter();

    const formFields: FormX__TYPE_Field[] = [
        {
            type: "text",
            name: "email",
            label: "Email",
        },
        {
            type: "password",
            name: "password",
            label: "Password",
        },
    ];

    const FormX__Structure: FormX__TYPE_Structure = {
        fields: formFields,
        submission: {
            toast: true,
            submitHandler: async (data) => {
                try {
                    const { userError } = await loginUser(data);
         
                    if (userError) {
                        Response({
                            title: userError.message,
                            success: false,
                        })
                    } else {
                        Response({
                            title: "Login successful",
                            success: true,
                        })
                        router.push("/dashboard");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }

    return (
        <div className="space-y-4 p-4 shadow-xl rounded-lg border bg-white"> 
            <h4 className="text-3xl font-bold capitalize text-center">Login</h4>
            <FormX className="p-4" structure={FormX__Structure} submittionLabel="Login" />
        </div>
    )
}