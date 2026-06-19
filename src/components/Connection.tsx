"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";

type BuddyAccount = {
  name: string;
  followers: string;
  initials?: string;
  image?: string;
  avatarClass: string;
  featured?: boolean;
};

const orbitItems = [
  {
    label: "Women",
    position: "left-[5%] top-[38%] -translate-y-1/2 -rotate-[12deg]",
  },
  {
    label: "Regional",
    position: "left-[18%] top-[13%] -rotate-[22deg]",
  },
  {
    label: "Premium Meme",
    position: "left-1/2 top-[2%] -translate-x-1/2 rotate-[-18deg]",
  },
  {
    label: "Meme Page",
    position: "right-[18%] top-[13%] rotate-[18deg]",
  },
  {
    label: "Creators",
    position: "right-[4%] top-[38%] -translate-y-1/2 rotate-[16deg]",
  },
  {
    label: "Suggested",
    position: "right-[3%] bottom-[28%] rotate-[-18deg]",
  },
  {
    label: "Premium Bollywood",
    position: "right-[18%] bottom-[9%] rotate-[-15deg]",
  },
  {
    label: "Bollywood",
    position: "left-1/2 bottom-[-2%] -translate-x-1/2 rotate-[-7deg]",
  },
  {
    label: "Premium Twitter",
    position: "left-[18%] bottom-[9%] rotate-[-12deg]",
  },
  {
    label: "Twitter",
    position: "left-[5%] bottom-[28%] rotate-[-14deg]",
  },
];

const buddyGroups: Record<string, BuddyAccount[]> = {
  Women: [
    {
      name: "girltribe",
      followers: "1.8M Followers",
      initials: "GT",
      avatarClass: "bg-[#ffedf2] text-[#d7245d]",
    },
    {
      name: "womenwhowin",
      followers: "945K Followers",
      initials: "WW",
      avatarClass: "bg-[#3b1232] text-[#ffd7ea]",
    },
    {
      name: "shethepeople",
      followers: "760K Followers",
      initials: "SP",
      avatarClass: "bg-[#fbf2ff] text-[#7035a8]",
    },
    {
      name: "hercircle",
      followers: "512K Followers",
      initials: "HC",
      avatarClass: "bg-[#ffe7c7] text-[#a64f00]",
    },
    {
      name: "feminaindia",
      followers: "2.1M Followers",
      initials: "FI",
      avatarClass: "bg-[#121212] text-[#f8bb33]",
      featured: true,
    },
  ],
  Regional: [
    {
      name: "marathimemes",
      followers: "820K Followers",
      initials: "MM",
      avatarClass: "bg-[#fff2cc] text-[#854d0e]",
    },
    {
      name: "southcinemaclub",
      followers: "1.4M Followers",
      initials: "SC",
      avatarClass: "bg-[#0f172a] text-[#93c5fd]",
    },
    {
      name: "bengalibuzz",
      followers: "690K Followers",
      initials: "BB",
      avatarClass: "bg-[#eef9ff] text-[#0369a1]",
    },
    {
      name: "gujjugram",
      followers: "540K Followers",
      initials: "GG",
      avatarClass: "bg-[#ecfccb] text-[#4d7c0f]",
    },
    {
      name: "punjabiwindow",
      followers: "1.1M Followers",
      initials: "PW",
      avatarClass: "bg-[#2b1700] text-[#f7b632]",
      featured: true,
    },
  ],
  "Premium Meme": [
    {
      name: "naughtyworld",
      followers: "11.4M Followers",
      initials: "NW",
      avatarClass: "bg-[#111827] text-white",
    },
    {
      name: "Trolls official",
      followers: "11.4M Followers",
      initials: "TO",
      avatarClass: "bg-[#fef3c7] text-[#92400e]",
    },
    {
      name: "ghanta",
      followers: "8.8M Followers",
      initials: "GH",
      avatarClass: "bg-[#dbeafe] text-[#1d4ed8]",
    },
    {
      name: "adultsociety",
      followers: "7.5M Followers",
      initials: "AS",
      avatarClass: "bg-[#fee2e2] text-[#b91c1c]",
    },
    {
      name: "log kya sochenge",
      followers: "7.5M Followers",
      initials: "LS",
      avatarClass: "bg-[#18181b] text-[#f8bb33]",
      featured: true,
    },
  ],
  "Meme Page": [
    {
      name: "Comedyculture.in",
      followers: "4.3M Followers",
      image: "/connections/creativeCultr.jpg",
      avatarClass: "bg-[#fae8ff] text-[#a21caf]",
    },
    {
      name: "INDIANS",
      followers: "9M Followers",
      image: "/connections/indians.jpg",
      avatarClass: "bg-[#f8bb33] text-[#14343c]",
    },
    {
      name: "The Trending Indian",
      followers: "1M Followers",
      image: "/connections/tti.jpg",
      avatarClass: "bg-[#172554] text-[#bfdbfe]",
    },
    {
      name: "Hindustan",
      followers: "1.6M Followers",
      image: "/connections/hindustan.jpg",
      avatarClass: "bg-[#f1f5f9] text-[#334155]",
    },
    {
      name: "GlamSham",
      followers: "620K Followers",
      image: "/connections/glamsham.jpg",
      avatarClass: "bg-[#111111] text-[#f87171]",
      featured: true,
    },
  ],
  Creators: [
    {
      name: "Peeping Moon",
      followers: "1.2M Followers",
      image: "/connections/peepingmoonofficial.jpg",
      avatarClass: "bg-[#ecfeff] text-[#0e7490]",
    },
    {
      name: "papisociety",
      followers: "1.7M Followers",
      image: "/connections/papisociety.jpg",
      avatarClass: "bg-[#fff7ed] text-[#c2410c]",
    },
    {
      name: "trolls nation",
      followers: "600K Followers",
      image: "/connections/trolls.jpg",
      avatarClass: "bg-[#111827] text-[#f9fafb]",
    },
    {
      name: "chutiyaspotted",
      followers: "860K Followers",
      image: "/connections/chutiya.spotted.jpg",
      avatarClass: "bg-[#ede9fe] text-[#6d28d9]",
    },
    {
      name: "trollsgyaan",
      followers: "1.4M Followers",
      initials: "TG",
      avatarClass: "bg-[#dbeafe] text-[#1d4ed8]",
      featured: true,
    },
  ],
  Suggested: [
    {
      name: "scrawledstories",
      followers: "2.3M Followers",
      initials: "SS",
      avatarClass: "bg-[#171719] text-[#d4b887]",
    },
    {
      name: "thescribbledstories",
      followers: "5M Followers",
      initials: "TS",
      avatarClass: "bg-[#16304a] text-white",
    },
    {
      name: "bookofteenager",
      followers: "821K Followers",
      initials: "BT",
      avatarClass: "bg-[#f3f8fb] text-[#111827]",
    },
    {
      name: "the_indian_web_series",
      followers: "390K Followers",
      image: "/connections/indians.jpg",
      avatarClass: "bg-[#151515] text-white",
    },
    {
      name: "Suggested community",
      followers: "228K Followers",
      initials: "Rc",
      avatarClass: "bg-[#1c1d22] text-[#f94b43]",
      featured: true,
    },
  ],
  "Premium Bollywood": [
    {
      name: "bollywoodbubble",
      followers: "2.9M Followers",
      initials: "BB",
      avatarClass: "bg-[#fff1f2] text-[#be123c]",
    },
    {
      name: "pinkvilla",
      followers: "5.7M Followers",
      initials: "PV",
      avatarClass: "bg-[#fce7f3] text-[#be185d]",
    },
    {
      name: "filmfare",
      followers: "8.8M Followers",
      initials: "FF",
      avatarClass: "bg-[#111111] text-[#f8bb33]",
    },
    {
      name: "instantbollywood",
      followers: "7.5M Followers",
      initials: "IB",
      avatarClass: "bg-[#fee2e2] text-[#991b1b]",
    },
    {
      name: "viralbhayani",
      followers: "6.2M Followers",
      initials: "VB",
      avatarClass: "bg-[#0f172a] text-[#facc15]",
      featured: true,
    },
  ],
  Bollywood: [
    {
      name: "bollywoodnow",
      followers: "1.3M Followers",
      initials: "BN",
      avatarClass: "bg-[#fffbeb] text-[#b45309]",
    },
    {
      name: "cinematalkies",
      followers: "890K Followers",
      initials: "CT",
      avatarClass: "bg-[#e0f2fe] text-[#0369a1]",
    },
    {
      name: "moviebuffindia",
      followers: "675K Followers",
      initials: "MB",
      avatarClass: "bg-[#111827] text-[#f9fafb]",
    },
    {
      name: "bollyupdates",
      followers: "512K Followers",
      initials: "BU",
      avatarClass: "bg-[#fef2f2] text-[#dc2626]",
    },
    {
      name: "filmycircle",
      followers: "420K Followers",
      initials: "FC",
      avatarClass: "bg-[#f8bb33] text-[#14343c]",
      featured: true,
    },
  ],
  "Premium Twitter": [
    {
      name: "trendulkar",
      followers: "1.1M Followers",
      initials: "TR",
      avatarClass: "bg-[#dbeafe] text-[#1d4ed8]",
    },
    {
      name: "thetweetofgod",
      followers: "6.0M Followers",
      initials: "TG",
      avatarClass: "bg-[#111111] text-white",
    },
    {
      name: "desitwitter",
      followers: "845K Followers",
      initials: "DT",
      avatarClass: "bg-[#ecfeff] text-[#0891b2]",
    },
    {
      name: "tweetingculture",
      followers: "622K Followers",
      initials: "TC",
      avatarClass: "bg-[#fef3c7] text-[#92400e]",
    },
    {
      name: "viralthreads",
      followers: "510K Followers",
      initials: "VT",
      avatarClass: "bg-[#0f172a] text-[#93c5fd]",
      featured: true,
    },
  ],
  Twitter: [
    {
      name: "socialsamosa",
      followers: "284K Followers",
      initials: "SS",
      avatarClass: "bg-[#fef2f2] text-[#b91c1c]",
    },
    {
      name: "trendspotter",
      followers: "730K Followers",
      initials: "TS",
      avatarClass: "bg-[#dbeafe] text-[#1d4ed8]",
    },
    {
      name: "popculturein",
      followers: "455K Followers",
      initials: "PC",
      avatarClass: "bg-[#f3e8ff] text-[#7e22ce]",
    },
    {
      name: "tweetdeckindia",
      followers: "388K Followers",
      initials: "TD",
      avatarClass: "bg-[#f8bb33] text-[#14343c]",
    },
    {
      name: "culturethread",
      followers: "260K Followers",
      initials: "CT",
      avatarClass: "bg-[#171719] text-[#d4b887]",
      featured: true,
    },
  ],
};

function OrbitBadge({
  label,
  position,
  selected,
  onSelect,
}: {
  label: string;
  position: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.84 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.36 }}
      className={`absolute ${position}`}
    >
      <button
        type="button"
        aria-label={`Show ${label} buddies`}
        aria-pressed={selected}
        onClick={onSelect}
        className={`relative grid h-16 w-16 place-items-center rounded-full bg-[#5454C5] text-center font-black leading-[0.95] text-[#14343c] shadow-[0_12px_28px_rgba(234,156,22,0.22)] sm:h-[80px] sm:w-[80px] ${
          selected
            ? "ring-[10px] ring-white/80"
            : "ring-2 ring-[#5454C5] hover:ring-4 hover:ring-white/60"
        } ${selected ? "text-[7px] sm:text-[9px]" : "text-[9px] sm:text-[11px]"} transition focus:outline-none focus-visible:ring-[10px] focus-visible:ring-white`}
      >
        <span className="absolute inset-1 rounded-full border-[3px] border-[#0c5a66]" />
        <span className="absolute inset-2 rounded-full border border-[#ffe07a]" />
        <span className="relative z-10 max-w-[52px] text-white font-medium">{label}</span>
      </button>
    </motion.div>
  );
}

function RecommendationHub({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 grid h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#300F52] text-white shadow-[0_28px_70px_rgba(28,22,12,0.18)]"
    >
      <div className="flex flex-col items-center justify-center text-center gap-5">
        <div className="relative grid h-16 w-16 place-items-center rounded-full bg-[#f31c3a] shadow-[0_8px_22px_rgba(243,28,58,0.3)] sm:h-20 sm:w-20">
          <span className="absolute inset-1 rounded-full border-2 border-dashed border-white/70" />
          <ThumbsUp className="relative z-10 h-8 w-8 fill-white text-white sm:h-10 sm:w-10" />
          <span className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[9px] border-t-[13px] border-x-transparent border-t-[#f31c3a]" />
        </div>
        <p className=" text-center text-sm font-black leading-tight sm:text-xl">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

function AccountAvatar({ account }: { account: BuddyAccount }) {
  if (account.image) {
    return (
      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#151515] ring-1 ring-black/5">
        <Image
          src={account.image}
          alt=""
          fill
          sizes="44px"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black ring-1 ring-black/5 ${account.avatarClass}`}
    >
      {account.initials}
    </span>
  );
}

function BuddyPill({
  account,
  index,
}: {
  account: BuddyAccount;
  index: number;
}) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.38, delay: index * 0.05 }}
      className={`flex min-h-[66px] items-center gap-3 rounded-full bg-white px-4 py-3 shadow-[0_10px_26px_rgba(32,29,22,0.09)] ring-1 ring-black/5 ${
        account.featured ? "sm:col-span-2 sm:mx-auto sm:min-w-[290px]" : ""
      }`}
    >
      <AccountAvatar account={account} />
      <span className="min-w-0">
        <span className="block truncate text-sm font-black text-[#34414b] sm:text-base">
          {account.name}
        </span>
        <span className="block text-xs font-semibold text-[#8b8b86]">
          {account.followers}
        </span>
      </span>
    </motion.li>
  );
}

export default function Connection() {
  const [selectedCategory, setSelectedCategory] = useState("Suggested");
  const activeAccounts =
    buddyGroups[selectedCategory] ?? buddyGroups.Suggested;

  return (
    <section
      id="buddies"
      className="relative overflow-hidden bg-[#10012B] px-5 py-20 mt-4 text-[#5454C5] lg:px-8"
    >
      <div className="absolute right-0 top-1/2 hidden h-16 w-2 -translate-y-1/2 rounded-l-full bg-[#f7b632] lg:block" />

      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.38 }}
          className="text-center text-4xl font-black tracking-normal text-[#5454C5] md:text-5xl"
        >
          Our Buddies
        </motion.h2>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <div className="absolute inset-[10%] rounded-full border border-dashed border-[#a9a399]" />
            <RecommendationHub label={selectedCategory} />
            {orbitItems.map((item) => (
              <OrbitBadge
                key={item.label}
                {...item}
                selected={selectedCategory === item.label}
                onSelect={() => setSelectedCategory(item.label)}
              />
            ))}
          </div>

          <ul className="mx-auto grid w-full max-w-[540px] gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {activeAccounts.map((account, index) => (
                <BuddyPill
                  key={`${selectedCategory}-${account.name}`}
                  account={account}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
}
