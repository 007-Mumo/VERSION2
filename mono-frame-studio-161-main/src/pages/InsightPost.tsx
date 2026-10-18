
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { CtaBand, PageHeader } from "@/components/blocks";
import { getInsight } from "@/data/insights";
import NotFound from "./NotFound";

const InsightPost = () => {
  const { slug } = useParams();
  const post = getInsight(slug);

  if (!post) return <NotFound />;

  return (
    <Layout>
      <PageHeader
        eyebrow={`${post.category} · ${post.readTime}`}
        title={post.title}
        intro={post.excerpt}
        image={post.image}
      />

      <article className="container-x max-w-4xl py-16 md:py-24">
        {/* Main article image */}
        {post.image && (
          <figure className="mb-12 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {post.title}
            </figcaption>
          </figure>
        )}

        {/* Article content and optional section images */}
        {post.body.map((b, i) => (
          <section key={i} className="mb-12">
            {b.heading && (
              <h2 className="mb-5 text-2xl font-bold leading-tight md:text-3xl">
                {b.heading}
              </h2>
            )}

            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              {b.text}
            </p>

            {/* Optional image for this article section */}
            {"image" in b && b.image && (
              <figure className="mt-7 overflow-hidden">
                <img
                  src={b.image}
                  alt={b.heading || post.title}
                  className="max-h-[520px] w-full object-cover"
                  loading="lazy"
                />
                {("imageCaption" in b && b.imageCaption) && (
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {b.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}
          </section>
        ))}

        <Link
          to="/insights"
          className="eyebrow mt-8 inline-flex items-center gap-2 text-primary"
        >
          <ArrowLeft size={14} />
          All insights
        </Link>
      </article>

      <CtaBand />
    </Layout>
  );
};

export default InsightPost;
