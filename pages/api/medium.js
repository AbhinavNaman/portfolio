export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhinavnaman3"
    );

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      return res.status(500).json({ error: "No items found in Medium feed" });
    }

    const posts = data.items
      .filter(item => item.categories.length > 0)
      .slice(0, 6)
      .map((item) => {
        // fallback: extract image manually from content
        const match = item.content.match(/<img[^>]+src="([^">]+)"/);
        const extractedImage = match ? match[1] : null;

        return {
          title: item.title,
          link: item.link,
          date: new Date(item.pubDate).toLocaleDateString(),
          contentSnippet: item.description.replace(/<[^>]+>/g, "").slice(0, 140) + "...",
          thumbnail: item.thumbnail || extractedImage || "/default-thumbnail.jpg",
        };
      });

    res.status(200).json(posts);
  } catch (err) {
    console.error("Medium RSS fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch Medium feed" });
  }
}
