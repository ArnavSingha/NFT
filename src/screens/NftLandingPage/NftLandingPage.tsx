import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { value: "32k+", label: "Artwork" },
  { value: "20k+", label: "Auctions" },
  { value: "10k+", label: "Artists" },
];

const trendingArtworks = [
  {
    artist: "Ferhat Deniz",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22742.svg",
    topClass: "top-[2395px]",
    leftClass: "left-[764px]",
    artistTopClass: "top-[2334px]",
    artistLeftClass: "left-[763px]",
    titleTopClass: "top-[2368px]",
    titleLeftClass: "left-[764px]",
    priceTopClass: "top-[2364px]",
    priceLeftClass: "left-[1263px]",
  },
  {
    artist: "Sebastian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22743.svg",
    topClass: "top-[2545px]",
    leftClass: "left-[121px]",
    artistTopClass: "top-[2484px]",
    artistLeftClass: "left-[120px]",
    titleTopClass: "top-[2518px]",
    titleLeftClass: "left-[121px]",
    priceTopClass: "top-[2514px]",
    priceLeftClass: "left-[620px]",
  },
  {
    artist: "Polina Kondrashova",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22744.svg",
    topClass: "top-[2991px]",
    leftClass: "left-[762px]",
    artistTopClass: "top-[2930px]",
    artistLeftClass: "left-[761px]",
    titleTopClass: "top-[2964px]",
    titleLeftClass: "left-[762px]",
    priceTopClass: "top-[2960px]",
    priceLeftClass: "left-[1261px]",
  },
  {
    artist: "Javier Miranda",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22745.svg",
    topClass: "top-[3141px]",
    leftClass: "left-[119px]",
    artistTopClass: "top-[3080px]",
    artistLeftClass: "left-[118px]",
    titleTopClass: "top-[3114px]",
    titleLeftClass: "left-[119px]",
    priceTopClass: "top-[3110px]",
    priceLeftClass: "left-[618px]",
  },
  {
    artist: "Erick Butler",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22746.svg",
    topClass: "top-[3587px]",
    leftClass: "left-[760px]",
    artistTopClass: "top-[3526px]",
    artistLeftClass: "left-[759px]",
    titleTopClass: "top-[3560px]",
    titleLeftClass: "left-[760px]",
    priceTopClass: "top-[3556px]",
    priceLeftClass: "left-[1259px]",
  },
  {
    artist: "Milad Fakurian",
    title: "Golden Flower",
    price: "2.3 ETH",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22747.svg",
    topClass: "top-[3737px]",
    leftClass: "left-[117px]",
    artistTopClass: "top-[3676px]",
    artistLeftClass: "left-[116px]",
    titleTopClass: "top-[3710px]",
    titleLeftClass: "left-[117px]",
    priceTopClass: "top-[3706px]",
    priceLeftClass: "left-[616px]",
  },
];

const popularArtists = [
  {
    name: "Ferhat Deniz",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-434-1.svg",
    imageTopClass: "top-[4545px]",
    imageLeftClass: "left-[177px]",
    nameTopClass: "top-[4740px]",
    nameLeftClass: "left-[147px]",
  },
  {
    name: "Sebastian",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-435.svg",
    imageTopClass: "top-[4545px]",
    imageLeftClass: "left-[471px]",
    nameTopClass: "top-[4740px]",
    nameLeftClass: "left-[467px]",
  },
  {
    name: "Javier Miranda",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-436.svg",
    imageTopClass: "top-[4545px]",
    imageLeftClass: "left-[784px]",
    nameTopClass: "top-[4740px]",
    nameLeftClass: "left-[735px]",
  },
  {
    name: "Erick Butler",
    image: "https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-437.svg",
    imageTopClass: "top-[4545px]",
    imageLeftClass: "left-[1114px]",
    nameTopClass: "top-[4740px]",
    nameLeftClass: "left-[1093px]",
  },
];

const footerLinks = [
  { label: "Explore", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const timerData = [
  { value: "18", label: "Hours" },
  { value: "57", label: "Minutes" },
  { value: "14", label: "Seconds" },
];

export const NftLandingPage = (): JSX.Element => {
  return (
    <div
      className="bg-[#0d0b0c] overflow-hidden w-full min-w-[1440px] min-h-[6004px] relative"
      data-model-id="0:7"
    >
      <img
        className="absolute top-[4673px] left-0 w-[935px] h-[1331px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-431.svg"
      />
      <img
        className="absolute top-[5726px] left-[735px] w-[1159px] h-[995px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-434.svg"
      />
      <img
        className="absolute top-[3477px] left-[720px] w-[720px] h-[1174px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-431-1.svg"
      />
      <img
        className="absolute top-[1949px] left-[734px] w-[706px] h-[1531px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-433.svg"
      />
      <img
        className="absolute top-[2502px] left-0 w-[918px] h-[1841px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-432.svg"
      />
      <img
        className="absolute top-0 left-[458px] w-[982px] h-[1207px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-429.svg"
      />
      <img
        className="absolute top-0 left-0 w-[1160px] h-[984px]"
        alt="Rectangle"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-45.png"
      />
      <img
        className="absolute top-[3001px] left-[720px] w-[68px] h-px"
        alt="Line"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/line-13.svg"
      />
      <p className="absolute top-[510px] left-[120px] h-[27px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-light text-lg tracking-[0.29px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Create, Explore,&nbsp;&nbsp;&amp; Collect Digital Art NFTs
      </p>
      <h1 className="absolute top-[220px] left-[120px] w-[588px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-light text-7xl tracking-[0] leading-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Discover Rare
        <br />
        Collections Of
        <br />
        Art &amp; NFT&apos;s
      </h1>
      <img
        className="absolute top-[45px] left-[120px] w-9 h-[31px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
        alt="Union"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/union.png"
      />
      <nav className="top-[45px] left-[829px] w-[491px] absolute h-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms]">
        <div className="top-0 left-[319px] w-[174px] absolute h-12">
          <img
            className="absolute top-0 left-0 w-[172px] h-12"
            alt="Nav btn bg"
            src="https://c.animaapp.com/mjosycgnvF8OpL/img/nav-btn-bg.svg"
          />
          <Button
            variant="ghost"
            className="top-[15px] right-[26px] h-[18px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base tracking-[0.20px] leading-[18px] absolute flex items-center justify-center text-black text-center whitespace-nowrap bg-transparent hover:bg-transparent p-0"
          >
            Connect Wallet
          </Button>
        </div>
        <div className="inline-flex items-center gap-[50px] absolute top-[15px] right-[222px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="relative flex items-center justify-center w-fit [font-family:'Clash_Display-Regular',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-[18px] whitespace-nowrap hover:text-pink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <Button className="absolute top-[593px] left-[120px] w-[226px] h-[59px] bg-transparent hover:bg-transparent p-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <img
          className="absolute top-0 left-0 w-56 h-[59px]"
          alt="Btn bg"
          src="https://c.animaapp.com/mjosycgnvF8OpL/img/btn-bg.svg"
        />
        <span className="absolute top-[17px] left-[54px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          EXPLORE
        </span>
      </Button>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`w-fit absolute top-[812px] ${
            index === 0 ? "left-[120px]" : index === 1 ? "left-[318px]" : "left-[518px]"
          } h-[73px] flex flex-col gap-[5px] translate-y-[-1rem] animate-fade-in opacity-0 ${
            index === 0 ? "[--animation-delay:800ms]" : index === 1 ? "[--animation-delay:900ms]" : "[--animation-delay:1000ms]"
          }`}
        >
          <div className="flex items-center justify-center h-12 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-5xl tracking-[0.20px] leading-[48px] whitespace-nowrap">
            {stat.value}
          </div>
          <div className="flex items-center justify-center h-5 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
            {stat.label}
          </div>
        </div>
      ))}

      <div className="absolute top-[198px] left-[775px] w-[545px] h-[653px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms]">
        <img
          className="absolute top-2 left-0 w-[511px] h-[645px]"
          alt="Hero img"
          src="https://c.animaapp.com/mjosycgnvF8OpL/img/hero-img.png"
        />
        <Card className="absolute top-0 left-[168px] w-[389px] h-[566px] border-0 bg-transparent">
          <CardContent className="p-0">
            <div className="absolute top-[419px] left-0 w-[377px] h-[148px] border-2 border-solid border-transparent backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] [border-image:linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.1)_100%)_1] bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.2)_100%)]" />
            <img
              className="absolute top-0 left-0 w-[377px] h-[419px] border-[2.55px] border-solid border-white object-cover"
              alt="Img"
              src="https://c.animaapp.com/mjosycgnvF8OpL/img/img.png"
            />
            <p className="absolute top-[502px] left-[25px] [font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              Current Bid
            </p>
            <p className="absolute top-[439px] left-[201px] [font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.9px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              Remaining Time
            </p>
            <p className="absolute top-[528px] left-[46px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[17.0px] whitespace-nowrap">
              2.8 ETH
            </p>
            <p className="absolute top-[465px] left-[201px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[17.0px] whitespace-nowrap">
              18h : 57m : 14s
            </p>
            <img
              className="absolute top-[526px] left-[25px] w-3 h-5"
              alt="Ethereum"
              src="https://c.animaapp.com/mjosycgnvF8OpL/img/ethereum.svg"
            />
            <Button className="absolute top-[505px] left-[196px] w-[157px] h-[41px] bg-transparent hover:bg-transparent p-0">
              <img
                className="absolute top-0 left-0 w-[155px] h-[41px]"
                alt="Rectangle"
                src="https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-333.svg"
              />
              <span className="top-3.5 right-[37px] h-3.5 [font-family:'Clash_Display-Medium',Helvetica] font-medium text-[13.6px] tracking-[0.12px] leading-[13.6px] absolute flex items-center justify-center text-black text-center whitespace-nowrap">
                PLACE A BID
              </span>
            </Button>
            <p className="absolute top-[440px] left-[71px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[11.3px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              Laura
            </p>
            <p className="absolute top-[460px] left-[71px] [font-family:'Poppins',Helvetica] font-medium text-[#eeeeee] text-[11.3px] tracking-[0] leading-[17.0px] whitespace-nowrap">
              0.21 Weth
            </p>
            <img
              className="absolute top-[439px] left-[25px] w-[37px] h-[37px] object-cover"
              alt="Ellipse"
              src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-426.png"
            />
          </CardContent>
        </Card>
      </div>
      <p className="absolute top-[2229px] left-[120px] w-[548px] h-[81px] flex items-center justify-center opacity-80 [font-family:'Poppins',Helvetica] font-normal text-light text-lg tracking-[0.29px] leading-[normal]">
        Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2 className="absolute top-[2145px] left-[120px] h-16 flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[1.00px] leading-[64px] whitespace-nowrap">
        Trending This Week
      </h2>
      {trendingArtworks.map((artwork, index) => (
        <React.Fragment key={index}>
          <img
            className={`absolute ${artwork.topClass} ${artwork.leftClass} w-[556px] h-[450px] object-cover`}
            alt="Rectangle"
            src={artwork.image}
          />
          <h3
            className={`${artwork.artistTopClass} ${artwork.artistLeftClass} h-7 [font-family:'Clash_Display-Medium',Helvetica] font-medium text-[28px] tracking-[0.45px] leading-7 absolute flex items-center justify-center text-white whitespace-nowrap`}
          >
            {artwork.artist}
          </h3>
          <p
            className={`${artwork.titleTopClass} ${artwork.titleLeftClass} absolute h-3 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-white text-xs tracking-[0.19px] leading-3 whitespace-nowrap`}
          >
            {artwork.title}
          </p>
          <Badge
            variant="secondary"
            className={`${artwork.priceTopClass} ${artwork.priceLeftClass} absolute h-4 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-pink text-base tracking-[0.26px] leading-4 whitespace-nowrap bg-transparent hover:bg-transparent border-0`}
          >
            {artwork.price}
          </Badge>
        </React.Fragment>
      ))}

      <Button className="inline-flex items-start gap-2.5 px-6 py-[15px] absolute top-[4133px] left-[1128px] bg-white hover:bg-white/90 rounded h-auto transition-colors">
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-black text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap">
          Explore More
        </span>
        <img
          className="relative w-6 h-6"
          alt="Akar icons arrow up"
          src="https://c.animaapp.com/mjosycgnvF8OpL/img/akar-icons-arrow-up-right.svg"
        />
      </Button>
      <img
        className="absolute top-[904px] left-0 w-[1030px] h-[1340px]"
        alt="Ellipse"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/ellipse-430.svg"
      />
      <p className="absolute top-[1505px] left-[825px] h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-transparent text-base tracking-[0.20px] leading-5 whitespace-nowrap">
        <span className="text-[#cccccc] tracking-[0.03px]">Created by </span>
        <span className="text-[#dd24e1] tracking-[0.03px]">Jonathan Borba</span>
      </p>
      <div className="absolute top-[1601px] left-[1068px] w-[241px] h-[98px]">
        <p className="absolute top-0 left-0 h-5 flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
          Auction Ends In
        </p>
        {timerData.map((timer, index) => (
          <div
            key={index}
            className={`absolute top-[29px] ${
              index === 0 ? "left-0 w-[45px]" : index === 1 ? "left-[81px] w-[60px]" : "left-[177px] w-[66px]"
            } h-[69px] flex flex-col gap-1.5`}
          >
            <p
              className={`flex items-center justify-center h-[45px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap ${
                index === 0 ? "w-9" : index === 1 ? "w-11" : "w-[37px]"
              }`}
            >
              {timer.value}
            </p>
            <p
              className={`flex items-center justify-center h-[18px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0.20px] leading-[17.5px] whitespace-nowrap ${
                index === 0 ? "w-[41px]" : index === 1 ? "w-14" : "w-[62px]"
              }`}
            >
              {timer.label}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute top-[1601px] left-[824px] w-[150px] h-[98px] flex flex-col">
        <p className="flex items-center justify-center ml-px w-[93px] h-5 [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
          Current Bid
        </p>
        <p className="flex items-center justify-center ml-px w-[143px] h-[45px] mt-[9px] [font-family:'Poppins',Helvetica] font-medium text-white text-4xl tracking-[0.20px] leading-[45px] whitespace-nowrap">
          1.09 ETH
        </p>
        <p className="flex items-center justify-center w-[51px] h-5 mt-1 [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0.20px] leading-5 whitespace-nowrap">
          $1,835
        </p>
      </div>
      <h2 className="absolute top-[1305px] left-[825px] w-[335px] h-[180px] flex items-center justify-center [font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-7xl tracking-[0.20px] leading-[90px]">
        Bitcoin Art Work
      </h2>
      <img
        className="absolute top-[1234px] left-[121px] w-[596px] h-[646px] rounded-[20px] object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/rectangle-22748.png"
      />
      <img
        className="absolute top-[1600px] left-[1016px] w-0.5 h-[100px]"
        alt="Line"
        src="https://c.animaapp.com/mjosycgnvF8OpL/img/line-36.svg"
      />
      <Button className="inline-flex items-start gap-2.5 px-6 py-[15px] absolute top-[1764px] left-[825px] bg-white hover:bg-white/90 rounded h-auto transition-colors">
        <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-black text-base text-center tracking-[0.20px] leading-6 whitespace-nowrap">
          View Art Work
        </span>
        <img
          className="relative w-6 h-6"
          alt="Akar icons arrow up"
          src="https://c.animaapp.com/mjosycgnvF8OpL/img/akar-icons-arrow-up-right.svg"
        />
      </Button>
      {popularArtists.map((artist, index) => (
        <React.Fragment key={index}>
          <img
            className={`absolute ${artist.imageTopClass} ${artist.imageLeftClass} w-40 h-40 object-cover`}
            alt="Ellipse"
            src={artist.image}
          />
          <h3
            className={`${artist.nameTopClass} ${artist.nameLeftClass} h-9 [font-family:'Clash_Display-Regular',Helvetica] font-normal text-4xl text-center tracking-[0.20px] leading-9 absolute flex items-center justify-center text-white whitespace-nowrap`}
          >
            {artist.name}
          </h3>
        </React.Fragment>
      ))}

      <h2 className="absolute top-[4445px] left-[120px] h-16 flex items-center justify-center [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[1.00px] leading-[64px] whitespace-nowrap">
        Popular Artists
      </h2>

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
            <Link
              key={index}
              to={link.href}
              className="h-auto p-0 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-5 whitespace-nowrap hover:text-pink transition-colors"
            >
              {link.label}
            </Link>
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