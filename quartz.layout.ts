import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.RenderExcalidraw()],
  footer: Component.Footer({
    links: {
      Portfolio: "",
      LinkedIn: "https://linkedin.com/in/saisanjays",
      Instagram: "https://instagram.com/chasing_tunes",
      Medium: "//https://medium.com/@saisanjays"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({ hideOnRoot: true }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [
    Component.Graph({globalGraph: {scale: 1.2}, localGraph: {scale: 1.5}}),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({showCurrentPage: true }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search({ enablePreview: true }),
    Component.Darkmode(),
  ],
  right: [
    Component.RecentNotes({
      filter: (f) =>
        (f.slug?.startsWith("Student") ||
          f.slug?.startsWith("Sing") ||
          f.slug?.startsWith("Dance") ||
          f.slug?.startsWith("Daydream")) ??
        false,
      title: "Recent writing",
      limit: 10,
      showTags: false,
    }),
  ],
}
