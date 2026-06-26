import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import { CheckCircle, Star, Truck } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Authentic Indian Grocery"
      title="The flavours of India, delivered to your door in Parma"
      description="Premium Indian and exotic goods at Via G. Matteotti 49. Authentic spices, basmati rice, and South Asian specialties."
      primaryButton={{
        text: "Shop Now",
        href: "#products",
      }}
      secondaryButton={{
        text: "Visit Our Store",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/street-market-night_23-2151604399.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-tourists-are-walking-shopping_1150-7472.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="Our Story"
      title="Small family-run Indian market in San Secondo Parmense"
      description="We are a godsend for exotic cuisine lovers in Parma, bringing you the finest spices, dals, and authentic Indian goods with love and tradition."
      imageSrc="http://img.b2bpic.net/free-photo/chinise-building_1417-1705.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBorderGlow
      tag="Why Choose Us"
      title="Quality You Can Taste"
      description="Experience the best of South Asian ingredients."
      features={[
        {
          icon: CheckCircle,
          title: "Authentic Products",
          description: "100% sourced from original origins.",
        },
        {
          icon: Truck,
          title: "Local Delivery",
          description: "Fast same-day delivery in Parma.",
        },
        {
          icon: Star,
          title: "5★ Rated Store",
          description: "Trusted by our local community.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Popular Items"
      title="Best Sellers"
      description="Our most loved exotic products."
      items={[
        {
          title: "Basmati Rice",
          description: "Premium extra long grain",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-white-rice-grains_23-2152005547.jpg",
        },
        {
          title: "Spices Set",
          description: "Hand-ground spices",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-various-spices-saffron-chili-powder-black-pepper-cinnamon-sticks-round-wooden-board_140725-12069.jpg",
        },
        {
          title: "Lentils & Dal",
          description: "Organic premium lentils",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cereals-legumes-assortment-red-lentils-white-beans-chickpeas-corns-rice-green-wooden-surface-with-copy-space_141793-7064.jpg",
        },
        {
          title: "Coconut Products",
          description: "Cold pressed oil",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-tasty-noodle-bowl-blue_114579-37020.jpg",
        },
        {
          title: "Black Tea",
          description: "Premium Assam tea",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/top-side-view-colorful-spices-row-different-colorful-spices-center-table_140725-117432.jpg",
        },
        {
          title: "Authentic Snacks",
          description: "Crunchy savory snacks",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-green-leaf-stems_23-2148804897.jpg",
        },
        {
          title: "Fresh Produce",
          description: "Seasonal Indian veggies",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-vegetable-rice-dish-with-fresh-tomatoes-cucumbers_84443-72451.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Stats"
      title="Quality In Every Grain"
      description="Trusted by local culinary enthusiasts."
      metrics={[
        {
          value: "5.0",
          title: "Rating",
          description: "Based on 4 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/ramadan-celebration-with-delicious-food_23-2151404304.jpg",
        },
        {
          value: "100+",
          title: "Products",
          description: "Curated selection",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-various-spices-wooden-spoon-with-black-seeds-rice-breads-tied-with-rope-wooden-board-black_140725-12068.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialOverlayCards
      tag="Testimonials"
      title="What Our Customers Say"
      description="Real feedback from our loyal community."
      testimonials={[
        {
          id: "1",
          name: "Ombretta Corradi",
          role: "Local Customer",
          company: "Parma",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/seller-offers-man-bulk-products_482257-80763.jpg",
        },
        {
          id: "2",
          name: "Jonny Giacomelli",
          role: "Local Foodie",
          company: "Parma",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
        },
        {
          id: "3",
          name: "ShuB RamGarhia",
          role: "Guest",
          company: "San Secondo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-shopping_23-2149151648.jpg",
        },
        {
          id: "4",
          name: "Maria Rossi",
          role: "Regular",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-redhead-waitress-standing-with-arms-crossed_171337-15609.jpg",
        },
        {
          id: "5",
          name: "Luca Bianchi",
          role: "Chef",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-person-holding-bio-groceries-shopping-bag_482257-104954.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Support"
      title="Common Questions"
      description="Find answers to help you shop better."
      items={[
        {
          question: "Are you open on Sundays?",
          answer: "Yes, we are open until 8:30 pm daily.",
        },
        {
          question: "Where are you located?",
          answer: "Via G. Matteotti 49, 43017 San Secondo Parmense.",
        },
        {
          question: "Do you offer delivery?",
          answer: "Yes, we provide same-day local delivery.",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get In Touch"
      text="Visit us today at Via G. Matteotti 49 or call us at 351 261 7506."
      primaryButton={{
        text: "Get Directions",
        href: "#",
      }}
      secondaryButton={{
        text: "Chat on WhatsApp",
        href: "https://wa.me/393512617506",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
