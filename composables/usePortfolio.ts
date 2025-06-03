import aboutData from "@/assets/mock/about.json";
import type { Portfolio } from "./useConvert";
import { useStorage } from '@vueuse/core'

export const usePortfolio = (slug?: string) => {
  const { notionGetProject } = useNotion();
  const { convertNotionDatabaseBatch } = useConvert();
  const { data, error } = notionGetProject() as any;
  
  const refData = computed<Portfolio[]>(
    () => {
    if (data.value && data.value.results) {
      return convertNotionDatabaseBatch(data.value.results || []);
    }
    return [];
  });
  
  const portfolio = useStorage('portfolio', {} as Portfolio);
  const portfolios = useStorage('portfolios', [] as Portfolio[]);

  if (error.value) {
    console.error("Error fetching projects:", error.value);
  }
  const init = () => {
    if (refData.value.length > 0 && slug) {
      portfolio.value = refData.value.find((item) => item.slug === slug);
    }
    if (refData.value.length > 0) {
      portfolios.value = refData.value;
    }
  };

  const getAbout = () => {
    return aboutData;
  };

  init();

  return {
    getAbout,
    portfolio,
    portfolios,
  };
};
