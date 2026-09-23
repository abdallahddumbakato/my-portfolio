interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  canonicalUrl = "https://ddumba.kyakabi.com",
}) => {
  return (
    <>
      {/* Structured Data (JSON-LD) for Search Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ddumba Abdallah Kato",
            "jobTitle": "AI Engineer & Solutions Architect",
            "url": canonicalUrl,
            "sameAs": [
              "https://github.com/abdallahddumbakato",
              "https://www.linkedin.com/in/ddumbaka/"
            ],
            "knowsAbout": [
              "Generative AI",
              "MLOps",
              "Microsoft Azure",
              "RAG",
              "Cloud Platform Engineering",
              "AI Infrastructure",
              "LLM Systems",
              "DevOps"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
            }
          })
        }}
      />
    </>
  );
};

export default SEO;