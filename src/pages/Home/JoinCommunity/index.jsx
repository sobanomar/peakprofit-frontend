import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";
import { Radio, Users, TrendingUp } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import StatCard from "./StatCard";
import MainHeading from "../../../components/MainHeading";

// --- STAT CARD COMPONENT ---

// --- MAIN SECTION ---
const JoinCommunity = () => {
  const [stats, setStats] = useState({ members: 0, online: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://discord.com/api/v9/invites/peakprofit?with_counts=true",
        );
        setStats({
          members: response.data.approximate_member_count || 3092,
          online: response.data.approximate_presence_count || 284,
        });
      } catch (error) {
        console.error("Discord API Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="relative text-white py-32 px-6 z-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            The Inner Circle
          </span>
          <MainHeading>TRADE WITH THE ELITE</MainHeading>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start winning. Join{" "}
            <span className="text-white font-bold">Peak Profit</span> and trade
            alongside {stats.members.toLocaleString()}+ professionals.
          </p>
        </motion.div>

        {/* Stats Grid with Staggered Children */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <StatCard
            icon={Users}
            value={stats.members}
            label="Active Members"
            colorClass="text-blue-400"
          />
          <StatCard
            icon={TrendingUp}
            value={200000}
            label="Successful Trades"
            colorClass="text-purple-400"
            showPlus={true}
          />
          <StatCard
            icon={Radio}
            value={stats.online}
            label="Live Now"
            colorClass="text-green-400"
            isLive={true}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full block"
        >
          <motion.a
            href="https://discord.gg/peakprofit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiquidGlassButton
              width={400}
              height={80}
              className="md:text-xl lg:text-2xl w-60 sm:w-72 md:w-88 lg:w-[450px] h-14 lg:h-24 border border-white/10 font-extrabold"
            >
              <span className="flex items-center justify-center gap-4">
                <FaDiscord className="text-2xl lg:text-4xl text-[#5865F2]" />
                JOIN OUR DISCORD
              </span>
            </LiquidGlassButton>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunity;
