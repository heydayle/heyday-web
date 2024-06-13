export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    const nuxtConfig = useAppConfig()

    const client = useSupabaseClient()
    const projects = useState('projects', () => [])

    const getAllProjects = (slug) => {
        return slug
            ? client.from('projects').select('*').eq('slug', slug)
            : client.from('projects').select('*')
    }

    const getProjectBySlug = (slug) => {
        return client.from('contents').select().eq('slug', slug)
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
        portfolio
    };
}
