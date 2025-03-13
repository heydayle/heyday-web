import { createError } from 'h3'

export default defineEventHandler(async (event) => {
    const NOTION_API_KEY = process.env.NOTION_SETCRET_KEY
    const body = await readBody(event)
    const filter = body.query

    try {
        const response = await $fetch('https://api.notion.com/v1/databases/' + body.db_id + '/query', {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + NOTION_API_KEY,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            },
            body: {
                ...filter
            }
        })
        
        return response
    }
    catch(error) {
        console.log(error);
        
        return error
    }

})