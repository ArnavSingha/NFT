import React, { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for beginners exploring the NFT world",
    features: [
      "Create up to 5 NFTs per month",
      "Basic analytics dashboard",
      "Community support",
      "Standard transaction fees (2.5%)",
      "Access to marketplace",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Creator",
    price: "$29",
    period: "/month",
    description: "Ideal for active artists and collectors",
    features: [
      "Unlimited NFT creation",
      "Advanced analytics & insights",
      "Priority support",
      "Reduced fees (1.5%)",
      "Featured listing opportunities",
      "Custom collection pages",
      "Early access to new features",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For brands and large-scale operations",
    features: [
      "Everything in Creator",
      "Dedicated account manager",
      "Custom smart contracts",
      "Lowest fees (0.5%)",
      "API access",
      "White-label solutions",
      "Custom integrations",
      "SLA guarantee",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major cryptocurrencies including ETH, USDC, and USDT. You can also use credit cards through our payment partner.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "What are the transaction fees?",
    answer: "Transaction fees vary by plan: 2.5% for Starter, 1.5% for Creator, and 0.5% for Enterprise. Gas fees are separate.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Creator and Enterprise plans come with a 14-day free trial. No credit card required to start.",
  },
];

export const PricingPage = (): JSX.Element => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <PageLayout>
      <div className="pt-[180px] px-[120px] pb-20">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-lg tracking-[0.29px] mb-4">
            Pricing
          </p>
          <h1 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[75px] mb-6 max-w-[700px] mx-auto">
            Simple, Transparent Pricing
          </h1>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-lg max-w-[500px] mx-auto leading-8 mb-8">
            Choose the plan that works best for you. All plans include access to our marketplace.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`[font-family:'Poppins',Helvetica] text-sm ${billingPeriod === "monthly" ? "text-white" : "text-white/50"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="w-14 h-8 bg-white/10 rounded-full relative"
            >
              <div
                className={`w-6 h-6 bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] rounded-full absolute top-1 transition-all ${
                  billingPeriod === "yearly" ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span className={`[font-family:'Poppins',Helvetica] text-sm ${billingPeriod === "yearly" ? "text-white" : "text-white/50"}`}>
              Yearly
              <span className="ml-2 px-2 py-1 bg-pink/20 text-pink text-xs rounded-full">Save 20%</span>
            </span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-20">
          <div className="grid grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative backdrop-blur-sm transition-all hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#f0c3ec]/20 to-[#7f6aff]/20 border-pink/50"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] rounded-full">
                    <span className="[font-family:'Clash_Display-Semibold',Helvetica] text-black text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-2xl mb-2">
                    {plan.name}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-5xl">
                      {billingPeriod === "yearly" && plan.price !== "Free"
                        ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.8)}`
                        : plan.price}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-base">
                      {plan.period}
                    </span>
                  </div>
                  <button
                    className={`w-full py-4 rounded-xl [font-family:'Clash_Display-Semibold',Helvetica] text-base transition-opacity hover:opacity-90 mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-pink" />
                        </div>
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-lg text-center mb-12 max-w-[500px] mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
          <div className="grid grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-lg mb-3">
                    {faq.question}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm leading-6">
                    {faq.answer}
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
