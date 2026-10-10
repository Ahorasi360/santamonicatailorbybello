import ServiceLandingPage, { serviceMetadata } from '@/components/bello/ServiceLandingPage';

const slug = 'luxury-brand-alterations';
export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceLandingPage slug={slug} />;
}
