import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const statsData = [
  { value: "32k+", label: "Artwork" },
  { value: "20k+", label: "Auctions" },
  { value: "10k+", label: "Artists" },
];

const trendingArtworks = [
  {
    artist: "Ferhat Deniz",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22742.svg",
    position: { top: "top-[2395px]", left: "left-[764px]" },
    artistPos: { top: "top-[2334px]", left: "left-[763px]" },
    titlePos: { top: "top-[2368px]", left: "left-[764px]" },
    pricePos: { top: "top-[2364px]", left: "left-[1263px]" },
  },
  {
    artist: "Sebastian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22743.svg",
    position: { top: "top-[2545px]", left: "left-[121px]" },
    artistPos: { top: "top-[2484px]", left: "left-[120px]" },
    titlePos: { top: "top-[2518px]", left: "left-[121px]" },
    pricePos: { top: "top-[2514px]", left: "left-[620px]" },
  },
  {
    artist: "Polina Kondrashova",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22744.svg",
    position: { top: "top-[2991px]", left: "left-[762px]" },
    artistPos: { top: "top-[2930px]", left: "left-[761px]" },
    titlePos: { top: "top-[2964px]", left: "left-[762px]" },
    pricePos: { top: "top-[2960px]", left: "left-[1261px]" },
  },
  {
    artist: "Javier Miranda",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22745.svg",
    position: { top: "top-[3141px]", left: "left-[119px]" },
    artistPos: { top: "top-[3080px]", left: "left-[118px]" },
    titlePos: { top: "top-[3114px]", left: "left-[119px]" },
    pricePos: { top: "top-[3110px]", left: "left-[618px]" },
  },
  {
    artist: "Erick Butler",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22746.svg",
    position: { top: "top-[3587px]", left: "left-[760px]" },
    artistPos: { top: "top-[3526px]", left: "left-[759px]" },
    titlePos: { top: "top-[3560px]", left: "left-[760px]" },
    pricePos: { top: "top-[3556px]", left: "left-[1259px]" },
  },
  {
    artist: "Milad Fakurian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22747.svg",
    position: { top: "top-[3737px]", left: "left-[117px]" },
    artistPos: { top: "top-[3676px]", left: "left-[116px]" },
    titlePos: { top: "top-[3710px]", left: "left-[117px]" },
    pricePos: { top: "top-[3706px]", left: "left-[616px]" },
  },
];

const popularArtists = [
  {
    name: "Ferhat Deniz",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-434.svg",
    imagePos: { top: "top-[4545px]", left: "left-[177px]" },
    namePos: { top: "top-[4740px]", left: "left-[147px]" },
  },
  {
    name: "Sebastian",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-435.svg",
    imagePos: { top: "top-[4545px]", left: "left-[471px]" },
    namePos: { top: "top-[4740px]", left: "left-[467px]" },
  },
  {
    name: "Javier Miranda",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-436.svg",
    imagePos: { top: "top-[4545px]", left: "left-[784px]" },
    namePos: { top: "top-[4740px]", left: "left-[735px]" },
  },
  {
    name: "Erick Butler",
    image: "https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-437.svg",
    imagePos: { top: "top-[4545px]", left: "left-[1114px]" },
    namePos: { top: "top-[4740px]", left: "left-[1093px]" },
  },
];

const navLinks = ["About us", "Store", "Games"];
const footerLinks = ["Explore", "Marketplace", "Artists", "Contact"];

export const NftLandingPage = (): JSX.Element => {
  return (
    <div className="bg-[#0d0b0c] overflow-hidden w-full min-w-[1440px] min-h-[6004px] relative">
      <img
        className="absolute top-[4673px] left-0 w-[935px] h-[1331px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-431.svg"
      />

      <img
        className="absolute top-[5726px] left-[735px] w-[1159px] h-[995px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-434-1.svg"
      />

      <img
        className="absolute top-[3477px] left-[720px] w-[720px] h-[1174px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-431-1.svg"
      />

      <img
        className="absolute top-[1949px] left-[734px] w-[706px] h-[1531px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-433.svg"
      />

      <img
        className="absolute top-[2502px] left-0 w-[918px] h-[1841px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-432.svg"
      />

      <img
        className="absolute top-0 left-[458px] w-[982px] h-[1207px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-429.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1160px] h-[984px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-45.png"
      />

      <img
        className="absolute top-[3001px] left-[720px] w-[68px] h-px"
        alt="Line"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/line-13.svg"
      />

      <p className="absolute top-[510px] left-[120px] h-[27px] flex items-center justify-center opacity-80 [font-family:'Poppins',Helvetica] font-normal text-light text-lg tracking-[0.29px] leading-[normal]">
        Create, Explore,&nbsp;&nbsp;&amp; Collect Digital Art NFTs
      </p>

      <h1 className="absolute top-[220px] left-[120px] w-[588px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-light text-7xl tracking-[0] leading-[90px]">
        Discover Rare
        <br />
        Collections Of
        <br />
        Art &amp; NFT&apos;s
      </h1>

      <img
        className="absolute top-[45px] left-[120px] w-9 h-[31px]"
        alt="Union"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/union.png"
      />

      <nav className="top-[45px] left-[829px] w-[491px] absolute h-12">
        <div className="top-0 left-[319px] w-[174px] absolute h-12">
          <img
            className="absolute top-0 left-0 w-[172px] h-12"
            alt="Nav btn bg"
            src="https://c.animaapp.com/mjoth52w8d7C2b/img/nav-btn-bg.svg"
          />

          <Button
            variant="ghost"
            className="top-[15px] right-[26px] h-auto p-0 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base tracking-[0.20px] leading-[18px] absolute flex items-center justify-center text-black text-center whitespace-nowrap bg-transparent hover:bg-transparent"
          >
            Connect Wallet
          </Button>
        </div>

        <div className="inline-flex items-center gap-[50px] absolute top-[15px] right-[222px]">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto p-0 [font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-[18px] whitespace-nowrap bg-transparent hover:bg-transparent ${
                index === 1 ? "[text-shadow:0px_4px_4px_#00000040]" : ""
              }`}
            >
              {link}
            </Button>
          ))}
        </div>
      </nav>

      <Button className="absolute top-[593px] left-[120px] w-[226px] h-[59px] bg-transparent hover:bg-transparent p-0">
        <img
          className="absolute top-0 left-0 w-56 h-[59px]"
          alt="Btn bg"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/btn-bg.svg"
        />

        <span className="absolute top-[17px] left-[54px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          EXPLORE
        </span>
      </Button>

      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`w-fit absolute top-[812px] ${
            index === 0
              ? "left-[120px]"
              : index === 1
                ? "left-[318px]"
                : "left-[518px]"
          } h-[73px] flex flex-col gap-[5px]`}
        >
          <div className="flex items-center justify-center h-12 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-5xl tracking-[0.20px] leading-[48px] whitespace-nowrap">
            {stat.value}
          </div>

          <div className="flex items-center justify-center h-5 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
            {stat.label}
          </div>
        </div>
      ))}

      <section className="absolute top-[198px] left-[775px] w-[545px] h-[653px]">
        <img
          className="absolute top-2 left-0 w-[511px] h-[645px]"
          alt="Hero img"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/hero-img.png"
        />

        <Card className="absolute top-0 left-[168px] w-[389px] h-[566px] border-2 border-white/30 bg-gradient-to-b from-white/32 to-white/20 backdrop-blur-[25px]">
          <CardContent className="p-0">
            <img
              className="w-[377px] h-[419px] border-[2.55px] border-solid border-white object-cover"
              alt="Img"
              src="https://c.animaapp.com/mjoth52w8d7C2b/img/img.png"
            />

            <div className="px-[25px] py-5">
              <div className="flex items-center gap-[46px] mb-[26px]">
                <div className="flex items-center gap-[9px]">
                  <Avatar className="w-[37px] h-[37px]">
                    <AvatarImage src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-426.png" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[11.3px] tracking-[0] leading-[17.0px] whitespace-nowrap">
                      Laura
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.3px] tracking-[0] leading-[17.0px] whitespace-nowrap">
                      0.21 Weth
                    </div>
                  </div>
                </div>

                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] tracking-[0] leading-[17.0px] whitespace-nowrap mb-[9px]">
                    Remaining Time
                  </div>
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[17.0px] whitespace-nowrap">
                    18h : 57m : 14s
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] tracking-[0] leading-[17.0px] whitespace-nowrap mb-[9px]">
                    Current Bid
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <img
                      className="w-3 h-5"
                      alt="Ethereum"
                      src="https://c.animaapp.com/mjoth52w8d7C2b/img/ethereum.svg"
                    />
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[17.0px] whitespace-nowrap">
                      2.8 ETH
                    </span>
                  </div>
                </div>

                <Button className="w-[157px] h-[41px] bg-transparent hover:bg-transparent p-0 relative">
                  <img
                    className="absolute top-0 left-0 w-[155px] h-[41px]"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-333.svg"
                  />
                  <span className="relative [font-family:'Clash_Display-Medium',Helvetica] font-medium text-[13.6px] tracking-[0.12px] leading-[13.6px] text-black text-center whitespace-nowrap">
                    PLACE A BID
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="absolute top-[1234px] left-[121px] w-[1199px] h-[646px]">
        <img
          className="absolute top-0 left-0 w-[596px] h-[646px] rounded-[20px] object-cover"
          alt="Rectangle"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-22748.png"
        />

        <div className="absolute top-[71px] left-[704px]">
          <h2 className="w-[335px] h-[180px] flex items-center justify-center [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-7xl tracking-[0.20px] leading-[90px] mb-[96px]">
            Bitcoin Art Work
          </h2>

          <p className="h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-transparent text-base tracking-[0.20px] leading-5 whitespace-nowrap mb-[96px]">
            <span className="text-[#cccccc] tracking-[0.03px]">
              Created by{" "}
            </span>
            <span className="text-[#dd24e1] tracking-[0.03px]">
              Jonathan Borba
            </span>
          </p>

          <div className="flex gap-[68px] mb-[65px]">
            <div className="flex flex-col">
              <div className="flex items-center justify-center h-5 [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap mb-[9px]">
                Current Bid
              </div>
              <div className="flex items-center justify-center h-[45px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap mb-1">
                1.09 ETH
              </div>
              <div className="flex items-center justify-center h-5 [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
                $1,835
              </div>
            </div>

            <img
              className="w-0.5 h-[100px]"
              alt="Line"
              src="https://c.animaapp.com/mjoth52w8d7C2b/img/line-36.svg"
            />

            <div>
              <div className="h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap mb-[9px]">
                Auction Ends In
              </div>
              <div className="flex gap-[36px]">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-center h-[45px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap">
                    18
                  </div>
                  <div className="flex items-center justify-center h-[18px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0.20px] leading-[17.5px] whitespace-nowrap">
                    Hours
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-center h-[45px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap">
                    57
                  </div>
                  <div className="flex items-center justify-center h-[18px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0.20px] leading-[17.5px] whitespace-nowrap">
                    Minutes
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-center h-[45px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap">
                    14
                  </div>
                  <div className="flex items-center justify-center h-[18px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0.20px] leading-[17.5px] whitespace-nowrap">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button className="inline-flex items-start gap-2.5 px-6 py-[15px] bg-white hover:bg-white/90 rounded h-auto">
            <span className="flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-black text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap">
              View Art Work
            </span>
            <ArrowUpRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <img
        className="absolute top-[904px] left-0 w-[1030px] h-[1340px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-430.svg"
      />

      <section className="absolute top-[2145px] left-[120px] w-[1200px]">
        <h2 className="h-16 flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[1.00px] leading-[64px] whitespace-nowrap mb-[84px]">
          Trending This Week
        </h2>

        <p className="w-[548px] h-[81px] flex items-center justify-center opacity-80 [font-family:'Poppins',Helvetica] font-normal text-light text-lg tracking-[0.29px] leading-[normal] mb-[165px]">
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {trendingArtworks.map((artwork, index) => (
          <div key={index}>
            <img
              className={`absolute ${artwork.position.top} ${artwork.position.left} w-[556px] h-[450px] object-cover`}
              alt="Rectangle"
              src={artwork.image}
            />

            <div
              className={`${artwork.artistPos.top} ${artwork.artistPos.left} h-7 [font-family:'Clash_Display-Medium',Helvetica] font-medium text-[28px] tracking-[0.45px] leading-7 absolute flex items-center justify-center text-white whitespace-nowrap`}
            >
              {artwork.artist}
            </div>

            <div
              className={`${artwork.titlePos.top} ${artwork.titlePos.left} absolute h-3 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0.19px] leading-3 whitespace-nowrap`}
            >
              {artwork.title}
            </div>

            <div
              className={`${artwork.pricePos.top} ${artwork.pricePos.left} absolute h-4 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-pink text-base tracking-[0.26px] leading-4 whitespace-nowrap`}
            >
              {artwork.price}
            </div>
          </div>
        ))}

        <Button className="inline-flex items-start gap-2.5 px-6 py-[15px] absolute top-[1988px] left-[1008px] bg-white hover:bg-white/90 rounded h-auto">
          <span className="flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-black text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap">
            Explore More
          </span>
          <ArrowUpRightIcon className="w-6 h-6" />
        </Button>
      </section>

      <section className="absolute top-[4387px] left-[121px] w-[1199px]">
        <div className="flex items-center justify-between mb-[158px]">
          <h2 className="h-16 flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[1.00px] leading-[64px] whitespace-nowrap">
            Popular Artists
          </h2>

          <Button className="inline-flex items-start gap-2.5 px-6 py-[15px] bg-white hover:bg-white/90 rounded h-auto">
            <span className="flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-black text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap">
              View all Artists
            </span>
            <ArrowUpRightIcon className="w-6 h-6" />
          </Button>
        </div>

        {popularArtists.map((artist, index) => (
          <div key={index}>
            <Avatar
              className={`absolute ${artist.imagePos.top} ${artist.imagePos.left} w-40 h-40`}
            >
              <AvatarImage src={artist.image} />
              <AvatarFallback>{artist.name[0]}</AvatarFallback>
            </Avatar>

            <div
              className={`${artist.namePos.top} ${artist.namePos.left} h-9 [font-family:'Clash_Display-Regular',Helvetica] font-normal text-4xl text-center tracking-[0.20px] leading-9 absolute flex items-center justify-center text-white whitespace-nowrap`}
            >
              {artist.name}
            </div>
          </div>
        ))}
      </section>

      <section className="absolute top-[4976px] left-[120px] w-[1202px] h-[550px] flex gap-[109px]">
        <img
          className="w-[550px] h-[550px] rounded-[20px] object-cover"
          alt="Cta img"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/cta-img.png"
        />

        <div className="flex flex-col gap-[50px] pt-[101px]">
          <h2 className="w-[543px] h-[180px] flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-5xl tracking-[1.00px] leading-[60px]">
            Join The Community And Get The Best NFT Collection
          </h2>

          <Button className="w-[312px] h-[59px] bg-transparent hover:bg-transparent p-0 relative">
            <img
              className="absolute top-0 left-0 w-[310px] h-[59px]"
              alt="Cta btn bg"
              src="https://c.animaapp.com/mjoth52w8d7C2b/img/cta-btn-bg.svg"
            />
            <span className="absolute top-[17px] left-[47px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl tracking-[1.20px] leading-[25px] whitespace-nowrap">
              JOIN COMMUNITY
            </span>
          </Button>
        </div>
      </section>

      <footer className="absolute top-[5726px] left-0 w-[1442px] h-[278px] bg-transparent">
        <div className="absolute top-0 left-0 w-[1440px] h-[278px] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.08)_100%)]" />

        <div className="absolute top-[52px] left-[120px] h-[45px] flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-4xl tracking-[0] leading-[45px] whitespace-nowrap">
          NFTme
        </div>

        <nav className="items-start gap-[75px] p-2.5 top-[55px] left-[461px] inline-flex absolute">
          {footerLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-0 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-5 whitespace-nowrap bg-transparent hover:bg-transparent"
            >
              {link}
            </Button>
          ))}
        </nav>

        <img
          className="absolute top-[55px] left-[1140px] w-[180px] h-10"
          alt="Social"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/social.png"
        />

        <div className="items-center gap-[15px] top-[211px] left-[120px] inline-flex absolute">
          <div className="[font-family:'Ranade-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-4 whitespace-nowrap">
            Privacy policy
          </div>

          <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[26px] whitespace-nowrap">
            |
          </div>

          <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Copyright @ Kartik Bansal 2022. All Rights Reserved.
          </div>

          <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[26px] whitespace-nowrap">
            |
          </div>

          <div className="[font-family:'Ranade-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-4 whitespace-nowrap">
            Terms of service
          </div>
        </div>
      </footer>
    </div>
  );
};