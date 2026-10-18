import Layout from "@/components/Layout";
import { CtaButton, PageHeader } from "@/components/blocks";

const NotFound = () => (
  <Layout>
    <PageHeader eyebrow="404" title="Page not found." intro="The page you're looking for doesn't exist or has moved." />
    <div className="container-x py-20"><CtaButton to="/" variant="primary">Back to home</CtaButton></div>
  </Layout>
);

export default NotFound;
