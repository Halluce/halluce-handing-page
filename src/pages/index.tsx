import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';

const Feature = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

const TimelineItem = ({ time, heading, children }) => (
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {time}
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {heading}
    </h3>
    {children}
  </li>
);

const App = () => {
  return (
    <main className={`bg-background grid gap-y-6`}>
      <div className={`relative bg-background overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <Header />
          <div
            className={`relative mt-50 z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <section className="sticky-section">
        <div>
          <h2>What is Halluce?</h2>
        </div>
        <article>
          <p>
            Halluce is a decentralized video marketplace that has been built on
            top of the Solana blockchain. It supports the creation and sale of
            non-fungible tokens (NFTs) that are in the form of videos. It allows
            users to buy and auction such videos that have been distributed on
            social media. You can think of Halluce as a fun and simple to use
            stock market in which videos (in the form of NFTs) are like stocks
            and the performance and success of these videos on social media
            drive their stock price on Halluce. We provide a marketplace that
            allows you to use any major cryptocurrencies for buying and selling
            these NFTs as an individual or in groups. These groups are DAOs
            (Decentralised Autonomous Organisations) that can be customized by
            their participants without the need for any code. Forming these
            groups will be as simple as starting a Whatsapp Group.
          </p>
          <p>
            The best part about Halluce is that the nature of the marketplace
            ensures that the NFTs are non-speculative investments as they are
            tied to the social media performance of the underlying videos. This
            is similar to how a company's stock performance is linked to the
            success of its business and thus based on quantifiable value. It's a
            marketplace that focuses solely on non-speculative NFT investments.
            The marketplace is designed for investors who have both an appetite
            for low risk and high return NFT investments, as well as investors
            who are new to investing and interested in a simpler and quicker
            alternative to reading and understanding annual reports in order to
            make sound investments in financial assets.
          </p>
          <p>
            It doesn't matter what kind of video content you're betting on -
            whether it's funny cat videos, social media challenges, or
            politics-related clips - because we provide support for all original
            videos from all major social media platforms, including TikTok,
            Instagram, Twitter, Youtube and more. However, this excludes sex,
            nudity, harmful, offensive, and inappropriate content.
          </p>
          <a href="">Read our Viral Paper (White Paper) for more on Halluce.</a>
        </article>
      </section>
      <section id="marketplace" className="sticky-section">
        <div>
          <h2>Marketplace</h2>
        </div>
        <article>
          <p>
            For early access to our marketplace join our discord community and
            complete the information below (email)
          </p>
        </article>
      </section>
      <section id="features" className="sticky-section">
        <div>
          <h2>Features</h2>
        </div>
        <article>
          <Feature title="Three-factor verification">
            Content security to prevent fraud and scams by ensuring that the NFT
            creator is the owner and original inventor of the video they're
            selling.
          </Feature>
          <Feature title="Internet-wide Viewership Tracking">
            To provide the most accurate internet-wide viewership statistics,
            Halluce utilizes cutting-edge technology and leverages its community
            to identify and track where original videos are republished online.
          </Feature>
          <Feature title="Support for all major cryptocurrencies">
            Users may purchase NFTs with almost any cryptocurrency they possess.
          </Feature>
          <Feature title="Automated Royalty Split">
            Because they are also contributors, any individual who is a part of
            the video for a decent amount of time and verbally contributes will
            be compensated and accounted for when it comes to royalties.
          </Feature>
          <Feature title="Performance charts">
            Easily understand the performance of a video since it was posted
          </Feature>
          <Feature title="No-Code DAO formation">
            DAOs that can be customized by their participants without the need
            for any code. These DAOs can be used for bidding on other platforms.
          </Feature>
        </article>
      </section>

      <section id="roadmap" className="sticky-section w-full">
        <div>
          <h2>Roadmap</h2>
        </div>
        <article>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <TimelineItem
              time="February 2022"
              heading="MVP - Launch on Solana to initial users"
            />
            <TimelineItem
              time="Q1 2022"
              heading="Establish Community, User Interviews, and Social Media Content Launch"
            />
            <TimelineItem
              time="Q2 2022"
              heading="Seed Round - Launch Support for all Cryptocurrencies for more users"
            />
            <TimelineItem
              time="Q2 2022"
              heading=" Branding, design, and development"
            />
            <TimelineItem time="Q3 2022" heading="Halluce Relaunch" />
            <TimelineItem time="Q4 2022" heading="Series A and Halluce ICO" />
            <TimelineItem
              time="Q1 2023"
              heading="NFT Marketplace Development (without Metaplex)"
            />
            <TimelineItem time="Q2 2023" heading="DAO formation for users" />
          </ol>
        </article>
      </section>

      <Footer />
    </main>
  );
};

export default App;
