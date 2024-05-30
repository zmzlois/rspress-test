import { usePageData } from "rspress/runtime";

export interface UISwitchResult {
  showNavbar: boolean;
  showSidebar: boolean;
  showAside: boolean;
  showDocFooter: boolean;
}

interface Props {
  isSidebarOpen?: boolean;
  beforeSidebar?: React.ReactNode;
  afterSidebar?: React.ReactNode;
  uiSwitch?: UISwitchResult;
}

export function Sidebar(props: Props) {
  const pageData = usePageData();
  return <div className="">{pageData.page.title}</div>;
}

export function SidebarItem(props: Props) {
  const pageData = usePageData();
  return <div className="text-white">{pageData.page.title}</div>;
}
