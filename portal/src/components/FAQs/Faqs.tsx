// src/components/FAQSection.tsx
"use client";

import React, { useState } from 'react';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

// Sample FAQ data
const faqs = [
  {
    question: 'Who is UP365 Games?',
    answer: `Leading the online gambling industry since 2017, UP365 Games.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, UP365 Games Casino is home to worldwide local currencies and crypto betting options for online slot games, UP365 Games Originals and live casino games. UP365 Games Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.`,
  },
  {
    question: 'Is UP365 Games licensed?',
    answer: 'Yes, UP365 Games is licensed and regulated in multiple jurisdictions worldwide.',
  },
  {
    question: 'Is betting on UP365 Games safe?',
    answer: 'Yes, UP365 Games uses industry-leading security protocols to ensure the safety of your bets and personal information.',
  },
  {
    question: 'What currencies can I bet with?',
    answer: 'UP365 Games supports a wide range of cryptocurrencies and local currencies for betting.',
  },
  {
    question: 'What types of casino games can I play?',
    answer: 'You can play a variety of casino games, including slots, poker, roulette, blackjack, and live dealer games.',
  },
  {
    question: 'What sports can I bet on?',
    answer: 'UP365 Games offers betting on a wide range of sports including football, basketball, tennis, eSports, and more.',
  },
  {
    question: 'How do I watch live streams?',
    answer: 'You can watch live streams directly on the UP365 Games platform under the "Live Betting" section.',
  },
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#0d1b2a',
    padding: '40px',
    color: '#fff',
    borderRadius: '12px',
    margin:'20px auto'

  },
  leftSection: {
    maxWidth: '300px',
  },
  button: {
    marginTop: '20px',
    backgroundColor: '#1E88E5',
    color: '#fff',
  },
  faqContainer: {
    width: '100%',
    maxWidth: '600px',
  },
  accordion: {
    backgroundColor: '#1b263b',
    color: '#fff',
    marginBottom: '10px',
    borderRadius: '8px',
    '&:before': {
      display: 'none',
    },
  },
  accordionSummary: {
    '& .MuiAccordionSummary-content': {
      justifyContent: 'space-between',
    },
  },
  accordionDetails: {
    backgroundColor: '#1e2d42',
  },
}));

const FAQSection: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root}>
      {/* Left Section */}
      <Box className={classes.leftSection}>
        <Typography variant="h4">Still have questions?</Typography>
        <Button className={classes.button}>Read our guides</Button>
      </Box>

      {/* FAQ Section */}
      <Box className={classes.faqContainer}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            className={classes.accordion}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              className={classes.accordionSummary}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
