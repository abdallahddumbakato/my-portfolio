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
            "jobTitle": "Platform & AI Systems Engineer",
            "url": canonicalUrl,
            "sameAs": [
              "https://github.com/abdallahddumbakato",
              "https://www.linkedin.com/in/ddumbaka/"
            ],
            "knowsAbout": [
              "AI Infrastructure",
              "LLM Infrastructure",
              "AWS",
              "Kubernetes",
              "RAG",
              "Inference Optimization",
              "Platform Engineering",
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