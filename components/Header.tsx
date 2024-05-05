import Link from "next/link";
import { HeaderNavigation } from "./header-navigation";
import PageContainer from "./page-container";
import ProfileButton from "./profile-button";
import ResponsiveMenu from "./responsive-menu";
import ToggleTheme from "./toggle-theme";

export default function Header() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <ResponsiveMenu />
          </div>
          <Link href="/">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-600">
              NextBlog
            </h1>
          </Link>
          <HeaderNavigation />
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
