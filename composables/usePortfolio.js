import projectsData from '@/assets/mock/projects.json'
import projectsDetail from '@/assets/mock/contents.json'
import aboutData from '@/assets/mock/about.json'
export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    const nuxtConfig = useAppConfig()

    const getAllProjects = (slug) => {
        const data = (projectsData.find(e => e.slug === slug));
        
        return slug 
            ? [data]
            : projectsData
    }

    const getProjectBySlug = (slug) => {
        return projectsDetail[slug]
    }
    const getAbout = () => {
        return aboutData
    }

    if (portfolio.value.length === 0) {
        portfolio.value = nuxtConfig?.projects;
    }

    return {
        getAllProjects,
        getProjectBySlug,
        getAbout,
        portfolio,
        projectsData
    };
}
