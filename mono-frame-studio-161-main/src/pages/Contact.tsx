import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { PageHeader } from "@/components/blocks";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { useToast } from "@/hooks/use-toast";

const field =
  "w-full border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

const Contact = () => {
  const [params] = useSearchParams();
  const { toast } = useToast();
  const [service, setService] = useState(params.get("service") ?? "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, String(value));
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify form submission failed: ${response.status}`);
      }

      form.reset();
      setService("");

      toast({
        title: "Request submitted successfully",
        description:
          "Thank you for contacting KES LTD. Your project enquiry has been sent.",
      });
    } catch (error) {
      console.error("Quote request submission failed:", error);

      toast({
        title: "Unable to submit your request",
        description:
          "Please try again. You can also contact us by phone, email or WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const info = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phoneHref}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${site.whatsapp}`,
    },
    { icon: MapPin, label: "Location", value: site.address },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let's discuss your project."
        intro="Share your requirements and an engineer will respond with next steps."
      />

      <section id="quote" className="scroll-mt-20 py-24">
        <div className="container-x grid gap-16 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex gap-5 border-b border-border pb-6"
              >
                <item.icon
                  className="mt-1 shrink-0 text-primary"
                  size={22}
                  strokeWidth={1.5}
                />
                <div>
                  <div className="eyebrow text-muted-foreground">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-lg font-semibold hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-lg font-semibold">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            onSubmit={onSubmit}
            className="bg-secondary p-8 md:p-10 lg:col-span-3"
          >
            <input
              type="hidden"
              name="form-name"
              value="quote-request"
            />

            <div className="eyebrow text-primary">Request a quote</div>
            <h2 className="mt-3 text-3xl font-bold">
              Tell us about your project.
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <input
                required
                name="fullName"
                autoComplete="name"
                placeholder="Full name"
                className={field}
              />

              <input
                required
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                className={field}
              />

              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                className={field}
              />

              <input
                name="location"
                placeholder="Project location"
                autoComplete="address-level2"
                className={field}
              />

              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className={`${field} sm:col-span-2`}
              >
                <option value="">Select a service</option>
                {services.map((item) => (
                  <option key={item.slug} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>

              <textarea
                required
                name="description"
                rows={5}
                placeholder="Describe your project and requirements"
                className={`${field} sm:col-span-2`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 bg-signal px-8 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-signal-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>

            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              Your details will be used to respond to your project enquiry.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
