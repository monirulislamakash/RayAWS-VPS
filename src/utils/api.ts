'use server'
import { createClient } from "@/utils/supabase/server"

type SectionData = {
    id?: string,
    title?: string,
    sub_title?: string,
    page?: string,
    button_label_1?: string,
    button_link_1?: string,
    button_label_2?: string,
    button_link_2?: string,
    campaign_number?: string,
    affiliate_number?: string,
    sponsor_number?: string,
    image?: string,
    content?: string,
    categories?: [],
    description?: string,
    author_name?: string,
    author_designation?: string,
    stars?: number,
    job_type?: string,
    vacancies?: string,
    salary_range?: string,
    exprience?: string,
    apply_link?: string,
    remote?: string,
    icon?: string,
    created_at?: string,
    updated_at?: string,
    name?: string,
    start_date?: string,
    end_date?: string,
    location?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images?: any,
    full_name?: string,
    email?: string,
    message?: string,
    question?: string,
    answer?: string,
}

type CreateData = {
    name?: string,
    title?: string,
    slug?: string,
    content?: string,
    image?: string,
    categories?: [],
    description?: string,
    author_name?: string,
    author_designation?: string,
    stars?: number,
    question?: string,
    answer?: string,
}

export const createSection = async ({ sectionName, data }: { sectionName: string, data: SectionData }) => {

    const supabase = await createClient();
    const { data: createdData, error: createError } = await supabase
        .from(`${sectionName}`)
        .insert(data)

    return { createdData, createError }
}

export const getSectionData = async ({ page, sectionName, isMultiple, isSingle, id, limit }: {limit?: number, page?: string, sectionName: string, isMultiple?: boolean, isSingle?: boolean, id?: number }) => {
    const supabase = await createClient();

    if (isMultiple && !page) {
        const { data: sectionData, error: sectionError } = await supabase
            .from(`${sectionName}`)
            .select()
            .limit(limit || 10)

        return { sectionData, sectionError }
    } else if (isSingle) {
        const { data: sectionData, error: sectionError } = await supabase
            .from(`${sectionName}`)
            .select()
            .eq('id', `${id}`)
            .single()

        return { sectionData, sectionError }
    } else {
        const { data: sectionData, error: sectionError } = await supabase
            .from(`${sectionName}`)
            .select()
            .eq('page', `${page}`)
            .single()

        return { sectionData, sectionError }
    }

};

export const updateSection = async ({ id, sectionName, data }: { id: string, sectionName: string, data: SectionData }) => {

    const supabase = await createClient();
    const { data: updatedData, error: updateError } = await supabase
        .from(`${sectionName}`)
        .update(data)
        .eq('id', id)

    return { updatedData, updateError }
}


export const uploadFile = async ({ files, file, multiple }: { file?: File, multiple?: boolean, files?: File[] | null }) => {
    const supabase = await  createClient();


    if (multiple) {
        const uploadPromises = files?.map(async (file) => {

            const filename = `${Date.now()}_${file.name}`;

            // console.log(filename, 'filename');

            const { data: uploadedData, error: uploadError } = await supabase
                .storage
                .from('ray')
                .upload(filename, file);

            // console.log(uploadedData, 'uploadedData');
            // console.log(uploadError, 'uploadError');


            if (uploadError) {
                console.error('Error uploading:', file.name, uploadError.message);
                return { fileName: file.name, status: 'error' };
            } else {
                const filePath = uploadedData?.path;

                // console.log(filePath, 'filePath');

                if (filePath) {
                    const { data: publicUrl } = supabase.storage
                        .from('ray')
                        .getPublicUrl(filePath);
                    console.log(publicUrl, 'publicUrlinside');
                    return { publicUrl, status: 'success' };
                }


            }
        })

        if (!uploadPromises) {
            return [];
        }

        const results = await Promise.all(uploadPromises);
        // console.log(results, 'results');
        return results;

    } else {

        const filename = `${Date.now()}_${file?.name}`;

        const { data: uploadedData, error: uploadError } = await supabase
            .storage
            .from('ray')
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .upload(filename, file!)

        const filePath = uploadedData?.path;

        if (filePath) {
            const { data: publicUrl } = supabase.storage
                .from('ray')
                .getPublicUrl(filePath);

                // console.log(publicUrl, 'publicUrl')

            return { publicUrl, uploadError }
        }

        // return { uploadError }

    }





}


export const createData = async ({ data, tableName }: { data: CreateData, tableName: string }) => {
    const supabase = await createClient();
    const { data: createdData, error: createError } = await supabase
        .from(tableName)
        .insert(data)

    // console.log(createdData, createError, 'createdData, createError');
    return { createdData, createError }
}

export const getTableData = async ({ tableName }: { tableName: string }) => {
    const supabase = await createClient();
    const { data: tableData, error: tableError } = await supabase.from(tableName).select();
    return { tableData, tableError }
}

export const getBlogs = async (page: number = 1, pageSize: number = 5) => {
    const supabase = await createClient();
    // pagination
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const { data: blogsData, error: blogsError } = await supabase.from('blogs').select().limit(pageSize).range(start, end);
    return { blogsData, blogsError }
}

// delete data
export const deleteData = async ({ tableName, id }: { tableName: string, id: number }) => {
    const supabase = await createClient();
    const { data: deletedData, error: deleteError } = await supabase.from(tableName).delete().eq('id', id);

    return { deletedData, deleteError }
}

// user
export const loginUser = async ({ email, password }: { email: string, password: string }) => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.signInWithPassword({ email, password });
    return { userData, userError }
}

export const registerUser = async ({ email, password, full_name }: { email: string, password: string, full_name: string }) => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.signUp({ 
        email, 
        password, 
        options: {
            data: {
              user_metadata: {
                role: "admin", // Assign admin role
              },
              email_confirm: true,
              full_name: full_name,
            },
        },
     });
    return { userData, userError }
}

export const getUsers = async () => {
    const supabase = await createClient();
    const { data: usersData, error: fetchError } = await supabase
        .from('profiles')
        .select('*');
        
    return { usersData, fetchError }
}

export const getUser = async ({ id }: { id: string }) => {
    const supabase = await createClient();
    const { data: usersData, error: fetchError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();
    return { usersData, fetchError }
}

export const resetPasswordEmail = async ({ email }: { email: string }) => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: 'http://localhost:3000/dashboard/settings' });
    return { userData, userError }
}

export const resetPassword = async ({ password }: { password: string }) => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.updateUser({
        password: password,
      });
    return { data, error }
}

export const updateProfile = async ({ avatar, name, id }: { avatar?: string, name?: string, id: string }) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('profiles').update({
        avatar_url: avatar,
        full_name: name,
    }).eq('id', id);
    return { data, error }
}


// get all media and add p
export const getAllMedia = async (page: number = 1, pageSize: number = 18) => {
    const supabase = await createClient();
    
    // Calculate start and end ranges for pagination
    const start = (page - 1) * pageSize;
        
    // sort by uploaded date
    const { data, error } = await supabase
        .storage
        .from('ray')
        .list('', {
            limit: pageSize,
            offset: start,
            sortBy: { column: 'created_at', order: 'desc' }
        });



    return { 
        data, 
        error,
        metadata: {
            currentPage: page,
            pageSize: pageSize,
            totalCount: 0,
            totalPages: 0
        }
    }
}


// get image with path
export const getImage = async ({ fileName }: { fileName: string }) => {
    const supabase = await createClient();
    try {
        const { data } = supabase.storage.from('ray').getPublicUrl(fileName);
        return { data }
    } catch (error) {
        return { data: null, error };
    }
}


// delete image or images
export const deleteMedia = async ({ fileName }: { fileName: string[] }) => {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from('ray').remove(fileName);
    return { data, error }
}


// https://www.rayadvertising.com

// http://localhost:3000/dashboard/settings


