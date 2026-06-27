import { Helmet } from "react-helmet-async"

interface HeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function Head({
  title = "Mony Naldoni Fotografia",
  description = "Fotógrafa profissional especializada em newborn, gestante, acompanhamento, família e smash the cake em Praia Grande, SP.",
  image = "/images/og-image.jpg",
  url = "https://monynaldoni.com",
}: HeadProps) {
  const fullTitle = title.includes("Mony Naldoni") ? title : `${title} | Mony Naldoni Fotografia`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
