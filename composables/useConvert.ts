export type Portfolio = {
  id: string;
  title: string;
  name: string;
  description: string;
  client: string;
  role: string;
  timeframe: string;
  slug: string;
  website: string;
  cover: string;
  coverUrl: string;
  technologies: string[];
  stack: string[];
  created: string;
  lastEdited: string;
};

export type NotionDatabase = {
  id: string;
  properties: {
    title: { rich_text: { plain_text: string }[] };
    name: { rich_text: { plain_text: string }[] };
    description: { rich_text: { plain_text: string }[] };
    client: { rich_text: { plain_text: string }[] };
    role: { rich_text: { plain_text: string }[] };
    timeframe: { rich_text: { plain_text: string }[] };
    slug: { rich_text: { plain_text: string }[] };
    site: { rich_text: { plain_text: string }[] };
    cover: { rich_text: { plain_text: string }[] };
    coverUrl: { files: { file: { url: string } }[] };
    tech: { multi_select: { name: string }[] };
    time: { rich_text: { plain_text: string }[] };
    stack: { multi_select: { name: string }[] };
    created_time: string;
    last_edited_time: string;
  };
  created_time: string;
  last_edited_time: string;
  url: string;
  icon: { type: string; emoji?: string; external?: { url: string } };
  archived: boolean;
}
export const useConvert = () => {
    
function convertNotionDatabase(notionData: NotionDatabase) {
    // Check if the input is valid
    if (!notionData || !notionData.properties) {
      throw new Error('Invalid Notion data format');
    }
  
    // Extract properties from the Notion data
    const properties = notionData.properties;

    const convertFileIdEncodeURL = (url: string) => {
    const parsedUrl = new URL(url);
    const extractedPath = parsedUrl.pathname.split('/').slice(2).join(':')
      return encodeURIComponent('attachment:' + extractedPath)
    }
    const getImageLink = (fileId: string, blockId: string, width: number = 1700, format: string = 'webp'): string => {
      return `https://www.notion.so/image/${fileId}?table=block&id=${blockId}&format=${format}&width=${width}`
    }
    const coverFile = properties.coverUrl?.files[0]?.file.url || null
    const coverUrl = coverFile ? getImageLink(convertFileIdEncodeURL(properties.coverUrl.files[0].file.url), notionData.id) : '';

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
      cover: extractText(properties.cover?.rich_text) || '',
      coverUrl: coverUrl || '',
      technologies: extractMultiSelect(properties.tech?.multi_select) || [],
      stack: extractMultiSelect(properties.stack?.multi_select) || [],
      created: notionData.created_time,
      lastEdited: notionData.last_edited_time
    } as Portfolio;
  
    return projectData;
  }
  
  function convertNotionDatabaseBatch(notionPages: NotionDatabase[]): Portfolio[] {
    return notionPages.map(page => convertNotionDatabase(page));
  }
  
    return {
        convertNotionDatabaseBatch
    }
}