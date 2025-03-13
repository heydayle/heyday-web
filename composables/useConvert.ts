export const useConvert = () => {
    
function convertNotionDatabase(notionData: any) {
    // Check if the input is valid
    if (!notionData || !notionData.properties) {
      throw new Error('Invalid Notion data format');
    }
  
    // Extract properties from the Notion data
    const properties = notionData.properties;
    
    // Helper function to extract text from rich_text property
    const extractText = (richTextArr: any[]) => {
      if (!richTextArr || richTextArr.length === 0) return '';
      return richTextArr.map(item => item.plain_text).join('');
    };
    
    // Helper function to extract multi-select values
    const extractMultiSelect = (multiSelectArr: any[]) => {
      if (!multiSelectArr) return [];
      return multiSelectArr.map(item => item.name);
    };
  
    // Create structured project data
    const projectData = {
      id: notionData.id,
      title: extractText(properties.title?.rich_text) || '',
      name: extractText(properties.name?.rich_text) || '',
      description: extractText(properties.title?.rich_text) || '',
      client: extractText(properties.client?.rich_text) || '',
      role: extractText(properties.role?.rich_text) || '',
      timeframe: extractText(properties.time?.rich_text) || '',
      slug: extractText(properties.slug?.rich_text) || '',
      website: extractText(properties.site?.rich_text) || '',
      coverImage: extractText(properties.cover?.rich_text) || '',
      technologies: extractMultiSelect(properties.tech?.multi_select) || [],
      stack: extractMultiSelect(properties.stack?.multi_select) || [],
      created: notionData.created_time,
      lastEdited: notionData.last_edited_time
    };
  
    return projectData;
  }
  
  function convertNotionDatabaseBatch(notionPages: any[]) {
    if (!Array.isArray(notionPages)) {
      // If single page is provided, convert it
      return convertNotionDatabase(notionPages);
    }
    
    return notionPages.map(page => convertNotionDatabase(page));
  }
  
    return {
        convertNotionDatabaseBatch
    }
}