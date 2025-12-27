import React from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { Card, CardContent } from "../../components/ui/card";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-434.svg",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-435.svg",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-436.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-437.svg",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "100K+", label: "NFTs Created" },
  { value: "$2M+", label: "Trading Volume" },
  { value: "500+", label: "Artists" },
];

export const AboutPage = (): JSX.Element => {
  return (
    <PageLayout>
      <div className="pt-[180px] px-[120px] pb-20">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-lg tracking-[0.29px] mb-4">
            About Us
          </p>
          <h1 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[75px] mb-6 max-w-[700px]">
            We&apos;re Building The Future Of Digital Art
          </h1>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-lg max-w-[600px] leading-8">
            Our mission is to empower artists and collectors by providing a seamless platform for creating, discovering, and trading unique digital assets.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-5xl mb-2">
                    {stat.value}
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-base">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20 flex gap-16 items-center">
          <div className="flex-1">
            <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl mb-6">
              Our Story
            </h2>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-base leading-7 mb-4">
              Founded in 2021, we started with a simple vision: to democratize digital art ownership and create a vibrant ecosystem where creators can thrive.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-base leading-7 mb-4">
              Today, we&apos;re proud to be one of the leading NFT marketplaces, connecting thousands of artists with collectors worldwide. Our platform has facilitated millions of dollars in transactions while maintaining our commitment to sustainability and fair practices.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-base leading-7">
              We believe that blockchain technology has the power to transform how we create, own, and trade digital assets. Our team works tirelessly to make this technology accessible to everyone.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://c.animaapp.com/mjoth52w8d7C2b/img/hero-img.png"
              alt="Our Story"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-lg text-center mb-12 max-w-[500px] mx-auto">
            The passionate individuals behind our success
          </p>
          <div className="grid grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-sm">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
