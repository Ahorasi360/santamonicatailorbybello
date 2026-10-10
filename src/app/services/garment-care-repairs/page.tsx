import ServiceLandingPage, { serviceMetadata } from '@/components/bello/ServiceLandingPage';

const slug = 'garment-care-repairs';
export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceLandingPage slug={slug} />;
}
