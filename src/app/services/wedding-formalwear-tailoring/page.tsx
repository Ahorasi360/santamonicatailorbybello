import ServiceLandingPage, { serviceMetadata } from '@/components/bello/ServiceLandingPage';

const slug = 'wedding-formalwear-tailoring';
export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServiceLandingPage slug={slug} />;
}
