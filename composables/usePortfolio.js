import projectsData from '@/assets/mock/projects.json'
import projectsDetail from '@/assets/mock/contents.json'
import aboutData from '@/assets/mock/about.json'
export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    const nuxtConfig = useAppConfig()
    
    const client = useSupabaseClient()
    const projects = useState('projects', () => projectsData)

    const getAllProjects = (slug) => {
        const data = (projectsData.find(e => e.slug === slug));
        
        return slug 
            ? [data]
            : projectsData
    }

    const getProjectBySlug = (slug) => {
        console.log(slug);
        console.log(projectsDetail);
        
        return projectsDetail[slug]
        // return client.from('contents').select().eq('slug', slug)
    }
    const getAbout = () => {
        return aboutData
        // return client.from('about').select()
    }

    if (portfolio.value.length === 0) {
        portfolio.value = nuxtConfig?.projects;
    }
    // if(listedOnly){
    //     return ref(portfolio.value.filter(item => item["listed"]));
    // }
    return {
        getAllProjects,
        getProjectBySlug,
        getAbout,
        portfolio,
        projectsData
    };
}
