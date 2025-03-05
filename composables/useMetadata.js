
import aboutData from '@/assets/mock/about.json'

export const useMetadata = () => {
    const metadata = useState('metadata', () => null);
    if (!metadata.value) {
        metadata.value = aboutData
    }
    return metadata;
}
