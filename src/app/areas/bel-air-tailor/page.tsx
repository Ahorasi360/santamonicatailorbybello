import AreaLandingPage, { areaMetadata } from '@/components/bello/AreaLandingPage';

const slug = 'bel-air-tailor';
export const metadata = areaMetadata(slug);

export default function Page() {
  return <AreaLandingPage slug={slug} />;
}
