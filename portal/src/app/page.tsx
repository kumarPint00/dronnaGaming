"use client";
import Banner from "@/components/Banner/Banner";
import ScrollingLogos from "@/components/Banner/ScrollingLogos";
import CasinoBanner from "@/components/Banner/CasinoBanner";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CasinoIcon from '@mui/icons-material/Casino';
import TableChartIcon from '@mui/icons-material/TableChart';
import VipSection from "@/components/Banner/VipSection";
import { EmojiEvents, Person, TrendingUp, Replay } from '@mui/icons-material'; // Importing some example icons
import theme from '../theme/theme';
import { ThemeProvider } from "@mui/material/styles"; // Correct import for ThemeProvider
import SponsorshipSection from "@/components/Banner/SponsorshipSection";
import HelpSection from "@/components/HelpSection/HelpSection";
import HelpChatComponent from "@/components/HelpSection/HelpChatSection";
import BettingActionTable from "@/components/StataticsSection/BettingActionTable";
import PromoSection from "@/components/Promotion/PromotionSection";
import CardCarousel from "@/components/Promotion/CardSectionCrosoal";
import CommunitySection from "@/components/Promotion/CommunitySection";
import FAQSection from "@/components/FAQs/Faqs";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const handleButtonClick = () => {
    console.log('Become a VIP clicked!');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
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
          imageSrc="banner.webp" // Replace with the actual image path
        />
        <VipSection
          title="Wager more and see your rewards grow as a Dronna Games VIP"
          subTitle="Step into a world of unique benefits, personalized service, and exclusive bonuses, only as a Dronna Games VIP."
          buttonText="Become a VIP"
          buttonAction={handleButtonClick} // Uncommented to add the button functionality
          features={[
            {
              icon: <EmojiEvents />,
              title: 'Bonuses every week',
              description: 'Every week of each month, you’ll be rewarded with a bonus based on your recent games.',
            },
            {
              icon: <Person />,
              title: 'Your Own VIP Host',
              description: 'Enjoy exclusive access to a dedicated VIP Host who will support and cater to your betting needs.',
            },
            {
              icon: <TrendingUp />,
              title: 'Level Up Payouts',
              description: 'Get paid each time you reach a new level. The higher you go, the better the level-ups get.',
            },
            {
              icon: <Replay />,
              title: 'Recent Play Bonuses',
              description: 'Dronna Games offers money back on losses every time you level up.',
            },
          ]}
        />
        <SponsorshipSection/>
        <HelpSection/>
        <BettingActionTable/>
        <PromoSection/>
        <CardCarousel/> 
        <CommunitySection/>
        <FAQSection/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
