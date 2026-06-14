"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Play,
  X,
  Youtube,
} from "lucide-react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
];

const heroFrames = [
  {
    title: "Making Brands Part of Everyday Culture",
    image: "/Hero.svg",
    eyebrow: "Creative Culture",
  },
  // {
  //   title: "Fueling your favourite movies and artists",
  //   image: "/image 3.png",
  //   eyebrow: "Pop culture engine",
  // },
  // {
  //   title: "Making conversations travel faster",
  //   image: "/image 2.png",
  //   eyebrow: "Social-first storytelling",
  // },
];

const stats = [
  { value: "200+", label: "Campaigns" },
  { value: "100M+", label: "Impressions" },
  { value: "60M+", label: "Engagements" },
];

const campaigns = [
  { title: "Kisi Ka Bhai Kisi Ki Jaan", image: "/card.png", tone: "bg-[#7ED957]" },
  { title: "The Kashmir Files", image: "/card1.png", tone: "bg-[#ffcf33]" },
  { title: "Sirf Ek Bandaa Kaafi Hai", image: "/card2.png", tone: "bg-[#40d6ff]" },
  { title: "Farzi", image: "/cook1.webp", tone: "bg-[#ff6fb1]" },
  { title: "Citadel", image: "/cook2.webp", tone: "bg-[#9b7cff]" },
  { title: "Culpa Tuya", image: "/cook3.webp", tone: "bg-[#7ED957]" },
  { title: "Gadar 2", image: "/cook4.webp", tone: "bg-[#ffcf33]" },
  { title: "Haddi", image: "/cook5.webp", tone: "bg-[#40d6ff]" },
];

const clients = [
  { tag: "#Metaverse", by: "Zee5", image: "/clients/zee5.jpeg" },
  { tag: "#Polly Doll", by: "Netflix", image: "/clients/netflix.svg",className: "p-2" },
  { tag: "#Alec Art", by: "Amazon Prime", image: "/clients/AmazonPrime.svg",className: "p-2" },
  { tag: "#Toxic Poeth", by: "MX Player", image: "/clients/mxPlayer.png",className: "p-2" },
  { tag: "#Saphyre", by: "Boat", image: "/clients/boat.svg",className: "p-2" },
  { tag: "#Charcuterie", by: "BookMyShow", image: "/clients/bookmyshow.svg",className: "p-2" },
  { tag: "#Paradise", by: "Amazon Mini TV", image: "/clients/amt.svg",className: "p-2" },
  { tag: "#abcd", by: "Pocket FM", image: "/clients/pocketFM.png",className: "p-2" },
  { tag: "#efgh", by: "Tata Neu", image: "/clients/tataneu.svg",className: "p-2" },
  { tag: "#ijkl", by: "Flipkart", image: "/clients/flipkart.svg",className: "p-2" },
  { tag: "#mnop", by: "Sony liv", image: "/clients/sonyliv.png" },
];

const services = [
  {
    number: "01.",
    title: "Meme Marketing",
    image: "/cook4.webp",
    body: "We help brands tap into internet culture through content that feels native to social media and sparks genuine engagement.",
  },
  {
    number: "02.",
    title: "Influencer Marketing",
    image: "/cook5.webp",
    body: "From niche creators to large-scale influencers, we connect brands with the right voices to drive awareness, credibility, and results.",
  },
  {
    number: "03.",
    title: "Social Media Management",
    image: "/Hero.svg",
    body: "We manage content, publishing, strategy, and audience engagement to ensure your brand remains active, consistent, and relevant.",
  },
  {
    number: "04.",
    title: "Content Marketing",
    image: "/image 2.png",
    body: "We create content that informs, entertains, and builds long-term trust with your audience.",
  },
  {
    number: "05.",
    title: "Digital Marketing",
    image: "/image 2.png",
    body: "We design and execute campaigns that increase visibility, generate leads, and support business growth.",
  },
  {
    number: "06.",
    title: "Celebrity PR",
    image: "/image 2.png",
    body: "We help brands build stronger market presence through strategic celebrity associations, collaborations, and media visibility opportunities.",
  },
];

const work = [
  { title: "Hook-step ignition", image: "/cook1.webp" },
  { title: "Creator seeding sprint", image: "/cook2.webp" },
  { title: "Meme page takeover", image: "/cook3.webp" },
  { title: "Festival social pulse", image: "/cook4.webp" },
];

const achievements = [
  {
    title: "Best Web Original Award",
    label: "BANDAA",
    image: "/vijay.avif",
  },
  {
    title: "Best Use of Memes & Emojis",
    label: "Applause Entertainment TANAAV",
    image: "/alia.jpg",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

function PillButton({
  children,
  href,
  onClick,
  variant = "solid",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
}) {
  const className =
    variant === "solid"
      ? "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#7ED957] px-6 py-3 text-sm font-bold uppercase text-[#10012B] shadow-[0_12px_30px_rgba(126,217,87,0.24)]"
      : "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase text-white";

  const content = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={className}
        href={href}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}

function SectionHeading({
  kicker,
  title,
  align = "center",
}: {
  kicker?: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      {kicker ? (
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase text-[#7ED957]">
          <span className="h-2 w-2 rounded-full bg-[#7ED957]" />
          {kicker}
        </p>
      ) : null}
      <h2 className="text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [showAllCampaigns, setShowAllCampaigns] = useState(false);
  const [showAllClients, setShowAllClients] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  const visibleCampaigns = showAllCampaigns ? campaigns : campaigns.slice(0, 4);
  const visibleClients = showAllClients ? clients : clients.slice(0, 4);
  const activeHero = heroFrames[heroIndex];
  const activeWork = work[workIndex];

  const closeMenu = () => setMenuOpen(false);
  const nextWork = () => setWorkIndex((index) => (index + 1) % work.length);
  const prevWork = () => setWorkIndex((index) => (index - 1 + work.length) % work.length);

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-[#10012B] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(126,217,87,0.16),transparent_24%),linear-gradient(135deg,#10012B_0%,#21003f_48%,#3b0064_100%)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10012B]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
            {/* <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-[#7ED957] text-xl font-black text-[#10012B]">
              CC
            </span>
            <span className="leading-none">
              <span className="block text-lg font-black uppercase">Creative</span>
              <span className="block text-lg font-black uppercase text-[#7ED957]">Culture</span>
            </span> */}
            <div className="text-center md:text-left">
                <Image src={'./logo.svg'} alt='logo' width={150} height={88}/>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase text-white/78 hover:text-[#7ED957]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <PillButton href="mailto:business.creativeculture@gmail.com">Mail Us</PillButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-[8px] border border-white/15 text-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#180038] lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-5 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="border-b border-white/10 py-4 text-sm font-bold uppercase text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="mailto:business.creativeculture@gmail.com"
                  onClick={closeMenu}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#7ED957] px-6 py-3 text-sm font-bold uppercase text-[#10012B]"
                >
                  Mail Us
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <section className="relative mx-auto grid min-h-[82svh] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold uppercase text-[#7ED957]">
            <span className="h-2 w-2 rounded-full bg-[#7ED957]" />
            Digital Marketing Agency
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <p className="mb-2 text-sm font-bold uppercase text-white/55">
                {activeHero?.eyebrow}
              </p>
              <h1 className="max-w-4xl text-3xl font-black uppercase leading-[0.9] text-white md:text-4xl lg:text-6xl">
                {activeHero?.title}
              </h1>
            </motion.div>
          </AnimatePresence>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            Creative Culture builds shareable campaigns for movies, shows, festivals,
            artists, and brands that want to move from a post into public conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillButton href="#campaigns">View Campaigns</PillButton>
            <PillButton href="#services" variant="outline">
              Our Services
            </PillButton>
          </div>
        </motion.div>

        <div className="relative min-h-[500px] lg:min-h-[650px]">
          <div className="absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7ED957]/45" />
          <div className="absolute left-[10%] top-[4%] h-24 w-24 rounded-full border border-white/20" />
          <div className="absolute bottom-[10%] right-[5%] h-36 w-36 rounded-full border border-dashed border-white/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeHero.image}
              initial={{ opacity: 0, rotate: -5, scale: 0.94 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 5, scale: 0.94 }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 top-1/2 h-[70%] w-[76%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[8px] border border-white/14 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
            >
              <Image
                src={activeHero.image}
                alt={activeHero.title}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 54vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-[15%] h-48 w-36 overflow-hidden rounded-[8px] border border-white/15 bg-[#7ED957] p-2 shadow-2xl"
          >
            <div className="relative h-full overflow-hidden rounded-[6px]">
              <Image src="/cook1.webp" alt="Campaign visual" fill sizes="144px" className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[8%] right-[10%] h-44 w-52 overflow-hidden rounded-[8px] border border-white/15 bg-[#ffcf33] p-2 shadow-2xl"
          >
            <div className="relative h-full overflow-hidden rounded-[6px]">
              <Image src="/card1.png" alt="Campaign planning" fill sizes="208px" className="object-cover" />
            </div>
          </motion.div>

          <div className="absolute right-[8%] top-[8%] rounded-[8px] bg-white px-5 py-4 text-[#10012B] shadow-2xl">
            <p className="text-3xl font-black">100M+</p>
            <p className="text-xs font-bold uppercase">Impressions</p>
          </div>

          <div className="absolute bottom-0 left-[8%] flex gap-2">
            {heroFrames.map((frame, index) => (
              <button
                type="button"
                aria-label={`Show ${frame.eyebrow}`}
                aria-pressed={heroIndex === index}
                key={frame.title}
                onClick={() => setHeroIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  heroIndex === index ? "w-10 bg-[#7ED957]" : "w-2.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <div className="marquee-band border-y border-[#7ED957]/35 bg-[#7ED957] py-4 text-[#10012B]">
        <div className="animate-marquee flex w-max items-center gap-8">
          {["Meme Marketing", "Social Media Marketing", "Content Marketing", "Influencer Seeding", "Pop Culture Strategy", "Movie Launches"].map(
            (item) => (
              <span key={item} className="flex items-center gap-8 text-3xl font-black uppercase md:text-5xl">
                {item}
                <span className="h-8 w-8 rotate-45 rounded-[6px] bg-[#10012B]" />
              </span>
            ),
          )}
        </div>
      </div> */}
      <Banner />
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <SectionHeading kicker="About" title="Building Brands People Talk About" align="left" />
          <div className="grid gap-6 text-lg leading-8 text-white/72">
            <p>
              Creative Culture helps brands stay relevant through culture-driven marketing strategies.
              From viral content and influencer partnerships to social media growth and celebrity collaborations,
              we create meaningful connections between brands and their audiences.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/18 pl-5">
                  <p className="text-5xl font-black text-[#7ED957]">{stat.value}</p>
                  <p className="mt-2 text-sm font-bold uppercase text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="campaigns" className="bg-[#180038] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title="Campaign Showcase" />
            <PillButton onClick={() => setShowAllCampaigns((show) => !show)} variant="outline">
              {showAllCampaigns ? "View Less" : "View More"}
            </PillButton>
          </div>

          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence>
              {visibleCampaigns.map((campaign, index) => (
                <motion.article
                  layout
                  key={campaign.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="group overflow-hidden rounded-[8px] border border-white/12 bg-white/6"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute left-4 top-4 h-10 w-10 rounded-full ${campaign.tone}`} />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10012B] to-transparent p-5 pt-20">
                      <h3 className="text-2xl font-black uppercase leading-none">{campaign.title}</h3>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="clients" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading title="Our Clients" align="left" />
          <PillButton onClick={() => setShowAllClients((show) => !show)}>
            {showAllClients ? "View Less" : "View More"}
          </PillButton>
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {visibleClients.map((client) => (
              <motion.article
                layout
                key={client.tag}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="group overflow-hidden rounded-[8px] border border-white/12 bg-white/6"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client?.by}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`transition duration-500 group-hover:scale-105 object-center object-contain bg-white ${client?.className || ""}`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black">{client?.by}</h3>
                  {/* <p className="mt-1 text-sm font-bold uppercase text-[#7ED957]">{client.by}</p> */}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="services" className="bg-[#230047] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading kicker="Our Services!" title="Built for launches that create buzz." align="left" />
          <div className="mt-12 grid gap-5">
            {services.map((service, index) => (
              <motion.button
                type="button"
                key={service.title}
                onClick={() => setActiveService(index)}
                whileHover={{ x: 4 }}
                className={`grid w-full gap-5 rounded-[8px] border p-5 text-left transition md:grid-cols-[120px_1fr_220px] md:items-center ${
                  activeService === index
                    ? "border-[#7ED957] bg-[#7ED957] text-[#10012B]"
                    : "border-white/12 bg-white/6 text-white hover:border-[#7ED957]/60"
                }`}
              >
                <span className="text-4xl font-black">{service.number}</span>
                <span>
                  <span className="block text-3xl font-black uppercase md:text-5xl">{service.title}</span>
                  <span className={`mt-3 block max-w-3xl text-base leading-7 ${activeService === index ? "text-[#10012B]/78" : "text-white/68"}`}>
                    {service.body}
                  </span>
                </span>
                <span className="relative h-36 overflow-hidden rounded-[8px]">
                  <Image src={service.image} alt={service.title} fill sizes="220px" className="object-cover" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading kicker="Work" title="Sneakpeek" align="left" />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous work"
              onClick={prevWork}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white hover:border-[#7ED957] hover:text-[#7ED957]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next work"
              onClick={nextWork}
              className="grid h-12 w-12 place-items-center rounded-full bg-[#7ED957] text-[#10012B] hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWork.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-white/12"
            >
              <Image src={activeWork.image} alt={activeWork.title} fill sizes="60vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10012B] to-transparent p-8 pt-28">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#7ED957] px-4 py-2 text-xs font-black uppercase text-[#10012B]">
                  <Play className="h-3 w-3 fill-current" />
                  Work Sneakpeek
                </p>
                <h3 className="text-4xl font-black uppercase md:text-6xl">{activeWork.title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {work.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onClick={() => setWorkIndex(index)}
                className={`grid grid-cols-[96px_1fr] items-center gap-4 rounded-[8px] border p-3 text-left ${
                  workIndex === index ? "border-[#7ED957] bg-white/10" : "border-white/12 bg-white/5"
                }`}
              >
                <span className="relative h-24 overflow-hidden rounded-[8px]">
                  <Image src={item.image} alt="" fill sizes="96px" className="object-cover" />
                </span>
                <span className="text-xl font-black uppercase">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <Banner/>

          {/* achievement */}
      {<section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <Testimonial />
  
      </section>  }
            {/* mail us  */}
      <section className="relative px-5 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black uppercase leading-none md:text-5xl">
            Ready to Scale Your Presence?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Creative Culture helps brands stay relevant in a fast-moving digital world.
          </p>
          <div className="mt-9">
            <PillButton href="mailto:business.creativeculture@gmail.com?subject=Creative%20Culture%20Campaign%20Enquiry">
              Mail Us
            </PillButton>
          </div>
        </div>
      </section>

      {/* <footer className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-[#7ED957] font-black text-[#10012B]">
              CC
            </span>
            <span className="text-sm font-black uppercase">Creative Culture</span>
          </a>
          <p className="text-sm text-white/55">
            Copyright 2026 Creative Culture. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                aria-label={label}
                href="#home"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#7ED957] hover:border-[#7ED957] hover:bg-[#7ED957] hover:text-[#10012B]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer> */}
      <div className="border-t border-white/10 px-5 lg:px-20">
        <Footer />
      </div>
    </main>
  );
}
