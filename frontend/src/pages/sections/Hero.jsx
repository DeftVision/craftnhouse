import { siteConfig } from '../../config/site.config';
import HeroCentered from '../../components/blocks/HeroCentered';
import HeroStandard from '../../components/blocks/HeroStandard';

const variantMap = {
    centered: HeroCentered,
    standard: HeroStandard,
};

export default function Hero() {
    const Component = variantMap[siteConfig.layout.heroVariant] || HeroCentered;
    return <Component />;
}
