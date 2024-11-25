const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

function escapeXml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function generateSitemap() {
	const folder = "./content/posts";
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));

	let allSitemapOutputs = [];
	let allNewsSitemapOutputs = [];

	const staticUrls = `
    <url>
      <loc>https://www.karini.ai</loc>
      <image:image>
        <image:loc>https://www.karini.ai/karini-logo.png</image:loc>
        <image:title>Powering Evolution in Generative AI</image:title>
      </image:image>
    </url>
    <url>
      <loc>https://www.karini.ai</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/aboutus</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/contactus</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/services/genai</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/services/ml</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url> 
      <loc>https://www.karini.ai/partners</loc> 
      <lastmod>2024-11-21</lastmod> 
      <priority>0.7</priority> 
      <changefreq>monthly</changefreq> 
    </url>
    <url>
      <loc>https://www.karini.ai/platforms</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/privacypolicy</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/termsofuse</loc>
      <lastmod>2021-06-01</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>https://www.karini.ai/blogs</loc>
      <lastmod>2024-01-10</lastmod> 
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
	<url>
      <loc>https://www.karini.ai/solutions</loc>
      <lastmod>2024-09-26</lastmod> 
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`;

	markdownPosts.forEach((fileName, index) => {
		const fileContents = fs.readFileSync(`./content/posts/${fileName}`, "utf8");
		const matterResult = matter(fileContents);

		if (matterResult.data.show !== false) {
			const slug = fileName.replace(".md", "");

			let sitemap_data = matterResult.data.sitemap;
			let news_sitemap_data = matterResult.data.news_sitemap;

			if (sitemap_data && Object.keys(sitemap_data).length > 0) {
				let sitemapOutput = "<url>\n";

				Object.entries(sitemap_data).forEach(([key, value]) => {
					if (key === "images") {
						value.forEach((item) => {
							sitemapOutput += `\t<image:image>\n`;
							Object.entries(item).forEach(([subKey, subValue]) => {
								sitemapOutput += `\t\t<image:${subKey}>${escapeXml(
									subValue
								)}</image:${subKey}>\n`;
							});
							sitemapOutput += `\t</image:image>\n`;
						});
					} else {
						sitemapOutput += `\t<${key}>${escapeXml(value)}</${key}>\n`;
					}
				});

				sitemapOutput += "</url>";
				allSitemapOutputs.push(sitemapOutput);
			}

			if (news_sitemap_data && Object.keys(news_sitemap_data).length > 0) {
				let newsSitemapOutput = "<url>\n";

				Object.entries(news_sitemap_data).forEach(([key, value]) => {
					if (key === "news") {
						newsSitemapOutput += `\t<news:news>\n`;

						Object.entries(value).forEach(([subKey, subValue]) => {
							if (typeof subValue === "object" && subValue !== null) {
								newsSitemapOutput += `\t\t<news:${subKey}>\n`;
								Object.entries(subValue).forEach(([subSubKey, subSubValue]) => {
									newsSitemapOutput += `\t\t\t<news:${subSubKey}>${escapeXml(
										subSubValue
									)}</news:${subSubKey}>\n`;
								});
								newsSitemapOutput += `\t\t</news:${subKey}>\n`;
							} else {
								newsSitemapOutput += `\t\t<news:${subKey}>${escapeXml(
									subValue
								)}</news:${subKey}>\n`;
							}
						});

						newsSitemapOutput += `\t</news:news>\n`;
					} else if (key === "images") {
						value.forEach((item) => {
							newsSitemapOutput += `\t<image:image>\n`;
							Object.entries(item).forEach(([subKey, subValue]) => {
								newsSitemapOutput += `\t\t<image:${subKey}>${escapeXml(
									subValue
								)}</image:${subKey}>\n`;
							});
							newsSitemapOutput += `\t</image:image>\n`;
						});
					} else {
						newsSitemapOutput += `\t<${key}>${escapeXml(value)}</${key}>\n`;
					}
				});

				newsSitemapOutput += "</url>";
				allNewsSitemapOutputs.push(newsSitemapOutput);
			}
		}
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  	${staticUrls}
    ${allSitemapOutputs.join("\n")}
  </urlset>`;

	const news_sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${allNewsSitemapOutputs.join("\n")}
</urlset>`;

	fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
	fs.writeFileSync(
		path.join(__dirname, "public", "news_sitemap.xml"),
		news_sitemap
	);
}

generateSitemap();
