import Theme from "rspress/theme";
import { Sidebar, SidebarItem } from "./side-bar";
import HomeLayout from "./home-layout";
import "../styles/index.css";
// theme/index.tsx
const Layout = () => (
  <Theme.Layout
    /* Before home hero */
    beforeHero={<div>beforeHero</div>}
    // /* After home hero */
    // afterHero={<div>afterHero</div>}
    // /* Before home features */
    // beforeFeatures={<div>beforeFeatures</div>}
    // /* After home features */
    // afterFeatures={<div>afterFeatures</div>}
    // /* Before doc footer */
    // beforeDocFooter={<div>beforeDocFooter</div>}
    // /* After doc footer */
    // afterDocFooter={<div>afterDocFooter</div>}
    // /* Doc page front */
    // beforeDoc={<div>beforeDoc</div>}
    // /* Doc page end */
    // afterDoc={<div>afterDoc</div>}
    // /* Doc content front */
    // beforeDocContent={<div>beforeDocContent</div>}
    // /* Doc content end */
    // afterDocContent={<div>afterDocContent</div>}
    // /* Before the nav bar */
    // beforeNav={<div>beforeNav</div>}
    // /* Before the title of the nav bar in the upper left corner */
    // beforeNavTitle={<span>😄</span>}
    // /* After the title of the nav bar in the upper left corner */
    // afterNavTitle={<div>afterNavTitle</div>}
    // /* The right corner of the nav menu */
    // afterNavMenu={<div>afterNavMenu</div>}
    // /* Above the left sidebar */
    beforeSidebar={<div>beforeSidebar</div>}
    // /* Below the left sidebar */
    // afterSidebar={<div>afterSidebar</div>}
    // /* Above the right outline column */
    // beforeOutline={<div>beforeOutline</div>}
    // /* Below the outline column on the right */
    // afterOutline={<div>afterOutline</div>}
    // /* Top of the entire page */
    // top={<div>top</div>}
    // /* Bottom of the entire page */
    // bottom={<div>bottom</div>}
  />
);
// The setup function will be called when the page is initialized. It is generally used to monitor global events, and it can be an empty function

// Export all content of the default theme to ensure that your theme configuration can work properly
export * from "rspress/theme";

// Export Layout component and setup function
// Note: both must export
export default {
  SidebarItem,
  Sidebar,
  Layout,
  HomeLayout,
  ...Theme,
};

const setup = () => {};

export function Navbar() {
  return <div>NavBar</div>;
}
