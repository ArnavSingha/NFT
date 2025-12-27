import React, { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@nftmarket.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Blockchain Street, Web3 City",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Available 24/7 for support",
  },
];

const socialLinks = [
  { name: "Twitter", handle: "@nftmarket", icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625858.png" },
  { name: "Discord", handle: "NFT Market", icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625859.png" },
  { name: "Instagram", handle: "@nftmarket", icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625860.png" },
];

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout>
      <div className="pt-[180px] px-[120px] pb-20">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-lg tracking-[0.29px] mb-4">
            Contact Us
          </p>
          <h1 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-6xl tracking-[0] leading-[75px] mb-6 max-w-[700px] mx-auto">
            Get In Touch With Our Team
          </h1>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/70 text-lg max-w-[500px] mx-auto leading-8">
            Have questions or need assistance? We&apos;re here to help you on your NFT journey.
          </p>
        </section>

        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <info.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-2">
                    {info.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-pink text-base mb-1">
                    {info.detail}
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Additional Info */}
        <section className="grid grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-2xl mb-6">
                Send Us A Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block [font-family:'Poppins',Helvetica] font-normal text-white/70 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white [font-family:'Poppins',Helvetica] text-sm outline-none focus:border-pink/50 transition-colors placeholder:text-white/30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block [font-family:'Poppins',Helvetica] font-normal text-white/70 text-sm mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white [font-family:'Poppins',Helvetica] text-sm outline-none focus:border-pink/50 transition-colors placeholder:text-white/30"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block [font-family:'Poppins',Helvetica] font-normal text-white/70 text-sm mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white [font-family:'Poppins',Helvetica] text-sm outline-none focus:border-pink/50 transition-colors"
                    required
                  >
                    <option value="" className="bg-[#0d0b0c]">Select a subject</option>
                    <option value="general" className="bg-[#0d0b0c]">General Inquiry</option>
                    <option value="support" className="bg-[#0d0b0c]">Technical Support</option>
                    <option value="partnership" className="bg-[#0d0b0c]">Partnership</option>
                    <option value="feedback" className="bg-[#0d0b0c]">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block [font-family:'Poppins',Helvetica] font-normal text-white/70 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white [font-family:'Poppins',Helvetica] text-sm outline-none focus:border-pink/50 transition-colors resize-none placeholder:text-white/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] rounded-xl [font-family:'Clash_Display-Semibold',Helvetica] text-black text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Response Time */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-pink" />
                  </div>
                  <div>
                    <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-2">
                      Quick Response Time
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm leading-6">
                      Our support team typically responds within 24 hours. For urgent matters, please use our live chat or call us directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink/20 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-pink" />
                  </div>
                  <div>
                    <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-2">
                      Live Chat Support
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm leading-6 mb-4">
                      Need immediate help? Our live chat is available 24/7 for all your questions.
                    </p>
                    <button className="px-6 py-3 bg-white/10 rounded-xl [font-family:'Clash_Display-Semibold',Helvetica] text-white text-sm hover:bg-white/20 transition-colors">
                      Start Live Chat
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl mb-6">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <img src={social.icon} alt={social.name} className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-base">
                          {social.name}
                        </p>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-white/50 text-sm">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
