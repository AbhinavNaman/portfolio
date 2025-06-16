import Head from "next/head";

export default function SEO({
  title = "Abhinav Naman | Full Stack Developer",
  description = "Portfolio of Abhinav Naman – full stack engineer and DevOps enthusiast building scalable products and infrastructure.",
  image = "/og.png",
  url = "https://abhinav-portfolio.vercel.app"
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* Primary Meta */}
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
