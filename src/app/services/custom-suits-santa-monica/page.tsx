import ServiceLandingPage, { serviceMetadata } from '@/components/bello/ServiceLandingPage';

const slug = 'custom-suits-santa-monica';
export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceLandingPage slug={slug} />;
}
