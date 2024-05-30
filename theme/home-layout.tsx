import { usePageData } from "rspress/runtime";
import { HomeHero, HomeFeature, HomeFooter } from "rspress/theme";

export interface HomeLayoutProps {
  beforeHero?: React.ReactNode;
  afterHero?: React.ReactNode;
  beforeFeatures?: React.ReactNode;
  afterFeatures?: React.ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
  const { beforeHero, afterHero, beforeFeatures, afterFeatures } = props;
  const {
    page: { frontmatter },
  } = usePageData();

  return (
    <div
      className="relative"
      style={{
        minHeight: "calc(100vh - var(--rp-nav-height))",
        paddingBottom: "80px",
      }}
    >
      <div className="pb-12">
        {beforeHero}

        {afterHero}
        {beforeFeatures}
        <HomeFeature frontmatter={frontmatter} />
        {afterFeatures}
      </div>
      <HomeFooter />
    </div>
  );
}
