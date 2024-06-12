export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    const nuxtConfig = useAppConfig()
    if (portfolio.value.length === 0) {
        portfolio.value = nuxtConfig?.projects;
    }
    if(listedOnly){
        return ref(portfolio.value.filter(item => item["listed"]));
    }
    return portfolio;
}
