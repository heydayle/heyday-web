export const useNotion = () => {
    const NOTION_DB_ABOUT_ID = useRuntimeConfig().public.NOTION_DB_ABOUT_ID as string
    const NOTION_DB_CONTENTS_ID = useRuntimeConfig().public.NOTION_DB_CONTENTS_ID as string
    const NOTION_DB_PROJECTS_ID = useRuntimeConfig().public.NOTION_DB_PROJECTS_ID
    
    const NOTION_API_URL = '/api/notions/getById'
    const OPTIONS_API = {
        method: "POST",
    } as any

    const postNotion = (dbId: string, query?: any) => {
        return useAsyncData(NOTION_API_URL, () => 
            $fetch(NOTION_API_URL, {
                ...OPTIONS_API,
                body: {
                    db_id: dbId,
                    query
                }
            })
        )
        
    }

    const notionGetAbout = (qarams: any) => {
        return postNotion(NOTION_DB_ABOUT_ID, qarams)
    }
    const notionGetContent = (qarams: any) => {
        return postNotion(NOTION_DB_CONTENTS_ID, qarams)
    }
    const notionGetProject = (qarams?: any) => {
        return postNotion(NOTION_DB_PROJECTS_ID, qarams)
    }

    return {
        notionGetAbout,
        notionGetContent,
        notionGetProject
    }
}