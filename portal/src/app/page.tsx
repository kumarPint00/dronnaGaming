"use client";
import Banner from "@/components/Banner/Banner";
import ScrollingLogos from "@/components/Banner/ScrollingLogos";
import CasinoBanner from "@/components/Banner/CasinoBanner";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CasinoIcon from '@mui/icons-material/Casino';
import TableChartIcon from '@mui/icons-material/TableChart';
import VipSection from "@/components/Banner/VipSection";
import { EmojiEvents, Person, TrendingUp, Replay } from '@mui/icons-material';
import theme from '../theme/theme';
import { ThemeProvider } from "@mui/material/styles";
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer/Footer";
import React from 'react';

// Dynamic imports
const SponsorshipSection = dynamic(() => import('@/components/Banner/SponsorshipSection'), { ssr: false });
const HelpSection = dynamic(() => import('@/components/HelpSection/HelpSection'), { ssr: false });
const BettingActionTable = dynamic(() => import('@/components/StataticsSection/BettingActionTable'), { ssr: false });
const PromoSection = dynamic(() => import('@/components/Promotion/PromotionSection'), { ssr: false });
const CardCarousel = dynamic(() => import('@/components/Promotion/CardSectionCrosoal'), { ssr: false });
const CommunitySection = dynamic(() => import('@/components/Promotion/CommunitySection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/FAQs/Faqs'), { ssr: false });

// Error Boundary for catching errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Fetch data directly within the component using an async function
export default async function Home() {
  let ssrData = null;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    ssrData = await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  const handleButtonClick = () => {
    console.log('Become a VIP clicked!');
  };

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Banner />
        <ScrollingLogos />
        <CasinoBanner
          title="Thousands of thrilling games."
          subText="Thousands of ways to win big."
          buttonText="Explore Casino"
          menuItems={[
            { icon: <NewReleasesIcon />, label: 'New Releases' },
            { icon: <CasinoIcon />, label: 'Live Casino' },
            { icon: <TableChartIcon />, label: 'Table Games' },
          ]}
          imageSrc="banner.webp"
        />
        <VipSection
          title="Wager more and see your rewards grow as a Dronna Games VIP"
          subTitle="Step into a world of unique benefits, personalized service, and exclusive bonuses, only as a Dronna Games VIP."
          buttonText="Become a VIP"
          buttonAction={handleButtonClick}
          features={[
            { icon: <EmojiEvents />, title: 'Bonuses every week', description: 'Every week of each month, you’ll be rewarded with a bonus based on your recent games.' },
            { icon: <Person />, title: 'Your Own VIP Host', description: 'Enjoy exclusive access to a dedicated VIP Host who will support and cater to your betting needs.' },
            { icon: <TrendingUp />, title: 'Level Up Payouts', description: 'Get paid each time you reach a new level. The higher you go, the better the level-ups get.' },
            { icon: <Replay />, title: 'Recent Play Bonuses', description: 'Dronna Games offers money back on losses every time you level up.' },
          ]}
        />
        <SponsorshipSection />
        <HelpSection />
        <BettingActionTable />
        <PromoSection />
        <CardCarousel />
        <CommunitySection />
        <FAQSection />
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
