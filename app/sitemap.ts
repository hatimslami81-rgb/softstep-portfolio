import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/lib/projects";

const BASE_URL = "https://softstep.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", ...projects.map((p) => `/projects/${p.slug}`)];

  return routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}${locale === routing.defaultLocale ? "" : `/${locale}`}${route}`,
      lastModified: new Date(),
    }))
  );
}
