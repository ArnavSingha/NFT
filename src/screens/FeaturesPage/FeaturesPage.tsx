import React from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowUpRightIcon, Sparkles, Shield, Zap, Globe, Wallet, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Create & Mint NFTs",
    description: "Easily create and mint your digital artworks as NFTs with our intuitive tools. No coding required.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "All transactions are secured by blockchain technology, ensuring authenticity and ownership.",
  },
  {
    icon: Zap,
    title: "Instant Trading",
    description: "Buy, sell, and trade NFTs instantly with low gas fees and fast transaction times.",
  },
  {
    icon: Globe,
    title: "Global Marketplace",
    description: "Connect with collectors and artists from around the world in our vibrant community.",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Connect your favorite wallet including MetaMask, WalletConnect, and Coinbase Wallet.",
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Join communities, follow artists, and participate in exclusive drops and auctions.",
  },
];

const showcaseItems = [
  {
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22742.svg",
    title: "Digital Art Collection",
    description: "Curated collections from world-renowned digital artists",
  },
  {
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22743.svg",
    title: "3D Collectibles",
    description: "Unique 3D assets for gaming and metaverse",
  },
  {
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22744.svg",
    title: "Music & Audio NFTs",
    description: "Exclusive music releases and audio experiences",
  },
];

export const FeaturesPage = (): JSX.Element => {
  return (
    <PageLayout>
      <div className="pt-[180px] px-[120px] pb-20">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-lg tracking-[0.29px] mb-4">
            Features
          </p>
          <h1 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[75px] mb-6 max-w-[800px] mx-auto">
            Everything You Need To Create &amp; Trade NFTs
          </h1>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-lg max-w-[600px] mx-auto leading-8">
            Discover the powerful features that make our platform the go-to destination for NFT creators and collectors.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm leading-6">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Showcase Section */}
        <section className="mb-20">
          <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl mb-4 text-center">
            Explore Categories
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-lg text-center mb-12 max-w-[500px] mx-auto">
            Discover various types of digital assets on our platform
          </p>
          <div className="grid grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:border-pink/50 transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <ArrowUpRightIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-[#f0c3ec]/20 to-[#7f6aff]/20 border-white/10 backdrop-blur-sm">
            <CardContent className="py-16 px-8">
              <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl mb-4">
                Ready to Start Creating?
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-lg mb-8 max-w-[500px] mx-auto">
                Join thousands of artists and collectors on the most innovative NFT platform.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] rounded-xl [font-family:'Clash_Display-Semibold',Helvetica] text-black text-lg hover:opacity-90 transition-opacity">
                Get Started Now
              </button>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};
