import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Shop",
    "href": "#products"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Reviews",
    "href": "#reviews"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Sony KMB Market"
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Store",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Local Delivery",
              href: "#",
            },
            {
              label: "Click & Collect",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 Sony KMB Market"
      rightText="Via G. Matteotti 49, 43017 San Secondo Parmense (PR)"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
