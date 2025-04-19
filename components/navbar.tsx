import Link from "next/link";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
export const NAVLINKS = [
  {
    title: "Wiki",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Github",
    href: "https://github.com/MallardLabs",
  },
  {
    title: "Twitter",
    href: "https://x.com/mallardlabs",
  },
  {
    title: "Discord",
    href: "https://discord.mezo.org/",
  },
];

export function Navbar() {
  return (
    <nav
      className="w-full border-b border-dotted
 h-16 sticky top-0 z-50 bg-background"
    >
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground"></div>
          </div>
        </div>
        <Logo className="flex md:hidden items-center gap-2.5" />
        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1">
          <NavMenu className="hidden md:flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800" />
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <Image src="/logo.png" alt="logo" width={128} height={128} />
    </Link>
  );
}

export function NavMenu({
  isSheet = false,
  className,
}: {
  isSheet?: boolean;
  className?: string;
}) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className={className}
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
