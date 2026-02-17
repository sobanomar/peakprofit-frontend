import {
  FaInfoCircle,
  FaMoneyBillWave,
  FaFileContract,
  FaUsers,
  FaDesktop,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiRuleBook } from "react-icons/gi";
import { TbAffiliate } from "react-icons/tb";
import React from "react";

export const FAQArticles = [
  // ─── 1. GETTING STARTED ───────────────────────────────────────────────────
  {
    icon: <FaInfoCircle size={52} className="text-4xl text-[#780dff]" />,
    title: "Getting Started",
    description: "Everything you need to know before you begin",
    articles: [
      {
        title: "What Is Peak Profit Funding™?",
        description: `Peak Profit Funding™ is a proprietary trading firm that funds traders with institutional bank-backed capital to trade global markets.

We provide serious traders access to large capital allocations without requiring them to risk large personal deposits.

There are:
- No hidden rules
- No monthly fees
- No activation fees
- No multi-step phases
- No strategy restrictions

We operate one of the only prop firms with a fully built-in proprietary trading platform.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Which Countries Are Allowed?",
        description: `All countries are allowed to trade with Peak Profit Funding™.

There are no geographic restrictions on funded accounts or payouts.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Markets Can I Trade?",
        description: `We offer access to 2000+ symbols, including:
- Forex pairs (USD/CAD, EUR/USD, GBP/JPY, etc.)
- Crypto markets
- Meme coins
- Major & minor currency pairs

All inside one integrated platform.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How Do I Sign Up & Get Started?",
        description: `Step 1 – Sign Up in the Client Area
Create your account on our website.

Step 2 – Buy a Challenge
Choose your account size (100K or 200K recommended).

Step 3 – Complete Checkout
Enter your card details, billing information, and confirm your email. Payments are encrypted and securely processed via Authorize.net. We do NOT store card numbers, billing data, or payment credentials.

Step 4 – Access Your Client Area
After payment, log into your Client Portal.

Step 5 – Open the Trading Platform
Access your funded dashboard and platform login credentials.

Step 6 – Read the Rules
Understand all risk parameters before placing trades.

Step 7 – Join Our Discord
Connect with our 5,000+ trader community. Then begin trading.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Trouble Verifying Your Account?",
        description: `Many traders miss the verification email.

If you do not receive your login or verification:
- Search for: Verify@peakprofitfunding.com
- Check Junk folder
- Check Spam folder
- Check Promotions tab
- Check "Other" inbox

If still unresolved, contact:
📩 support@peakprofitfunding.com

We respond quickly.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Example Timeline from Sign-Up to Payout",
        description: `Day 1–3 → Trade the Evaluation
Day 4–6 → Hit the 8% profit target
Day 7 → Account review begins
Complete KYC → Live account upgrade
Receive your PEAK PROFIT FUNDED TRADER™ certificate

Live Account:
Complete 5 profitable days (at least 0.5% each)
Request payout → Receive payout`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 2. BECOMING A FUNDED TRADER ─────────────────────────────────────────
  {
    icon: <FiUser size={52} className="text-4xl text-[#780dff]" />,
    title: "Becoming a Funded Trader",
    description: "The path from challenge to live funded account",
    articles: [
      {
        title: "How Do I Become a Peak Profit Funded Trader™?",
        description: `1. Sign up in the Client Area
2. Buy a Challenge
3. Pass the Single-Phase Evaluation
4. Complete KYC verification
5. Receive your official PEAK PROFIT FUNDED TRADER™ certificate
6. Receive your Live Funded Account
7. Start requesting payouts

We offer only a Single-Phase Evaluation — there is no 2-step or 3-step process.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Evaluation Rules (Single Phase)",
        description: `- Profit Target: 8%
- Daily Loss Limit: 2.5%
- Maximum Drawdown: 7%
- Minimum Trading Days: 3
- Consistency Rule: 33%

Breach of any rule = immediate failure. No refunds.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Happens If I Fail the Evaluation?",
        description: `If you breach any Evaluation rule:
- Your evaluation account will be terminated immediately
- The challenge will be marked as failed
- No refunds will be issued

You may purchase a new evaluation and try again. The only amount you risk is the one-time evaluation fee. You are never liable for trading losses beyond that fee.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Funded Account Rules",
        description: `Once you pass the evaluation and go live, the following rules apply:

- Daily Loss Limit: 2%
- Maximum Drawdown: 6%`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Happens If I Fail the Funded Account?",
        description: `If you breach any funded account rule:
- The funded account will be permanently deleted
- You will lose access to that capital allocation
- Any pending profits may be forfeited depending on violation type

You are not liable for any trading losses. You will never owe the firm money. The maximum you can ever lose is your original evaluation fee.`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 3. TRADING ON THE PLATFORM ──────────────────────────────────────────
  {
    icon: <FaDesktop size={52} className="text-4xl text-[#780dff]" />,
    title: "Trading on PEAK MARKETS™",
    description: "Our proprietary platform — built for funded traders",
    articles: [
      {
        title: "What is PEAK MARKETS™?",
        description: `PEAK MARKETS™ is our fully proprietary, in-house trading platform built specifically for funded traders.

Unlike most prop firms that rely on third-party broker software, Peak Profit Funding™ operates on its own integrated trading infrastructure — giving traders greater control, stability, and performance visibility.

This is not a generic broker terminal. This is a performance-focused trading environment designed by traders.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Instruments & Charts Are Available?",
        description: `Integrated directly into PEAK MARKETS™:
- Industry-leading charting from TradingView
- Real-time market data powered by Polygon.io
- 2000+ symbols across Forex & Crypto
- Everything from USD/CAD to high-volatility meme coins

You get institutional-level charting tools without leaving the platform.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Trading Strategies Are Allowed?",
        description: `PEAK MARKETS™ supports:
- Manual trading
- Algorithmic trading & API connections
- Copy trading systems
- High-frequency strategies
- News trading
- Scalping

There are no platform-imposed strategy restrictions. Only risk violations trigger enforcement.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Copy Trading & Automation Policy",
        description: `Copy trading: Allowed
Automation (EAs/bots): Allowed
Multiple accounts: Allowed (up to 40 simultaneously)

Only fraud, abuse, or exploitation is prohibited.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How Can I Track My Performance?",
        description: `Inside PEAK MARKETS™, traders can monitor in real time:
- Equity tracking & daily drawdown status
- Maximum drawdown levels
- Profit factor & win rate
- Risk-to-reward ratio
- Profitable vs losing days
- Equity curve visualization

Your risk compliance is visible at all times. No guessing. No surprises.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Built-In Trade Journal",
        description: `Every trade can be reviewed inside the platform. Traders can log:
- Entry & exit reasoning
- Strategy notes
- Screenshots
- Performance breakdowns

We don't just fund traders — we help them improve.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How Do I Access the Platform?",
        description: `PEAK MARKETS™ is accessible via:
- Desktop browser
- Mobile browser
- Tablet

No third-party software required. Access is 24/7.`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 4. GETTING PAID ─────────────────────────────────────────────────────
  {
    icon: <FaMoneyBillWave size={52} className="text-4xl text-[#780dff]" />,
    title: "Getting Paid",
    description: "Profit splits, payout schedules, and withdrawal methods",
    articles: [
      {
        title: "What Is the Profit Split?",
        description: `First Payout:
50% Trader / 50% Firm

All Future Payouts:
85% Trader / 15% Firm`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "When & How Often Can I Withdraw?",
        description: `- Payout Frequency: Every 7 days
- Minimum Withdrawal: $100
- Maximum Withdrawal: $5,000

To be eligible for a payout you must complete:
- 5 profitable trading days
- Each day must generate at least 0.5% profit
- Days do not need to be consecutive

Payouts are processed quickly once approved. We do not deny payouts unless a trader violates one of our clearly written rules.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "What Payout Methods Are Available?",
        description: `- Crypto
- Bank Wire
- ACH
- Other supported regional options

All countries are supported.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How Is Balance vs Equity Calculated?",
        description: `Balance:
Changes only when trades close.
Formula: Deposit − Withdrawals + Realized P/L

Equity:
Balance + Unrealized (open) P/L

Drawdown rules are always measured using Equity. Balance reflects closed performance only.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Risk Calculation Examples",
        description: `On a $100,000 Account:
- 2% Daily Loss = $2,000
- 6% Max Drawdown = $6,000
- 0.5% Daily Profit Requirement (for payout) = $500
- 8% Evaluation Target = $8,000

On a $200,000 Account:
- 2% Daily Loss = $4,000
- 6% Max Drawdown = $12,000
- 0.5% Daily Profit Requirement = $1,000
- 8% Evaluation Target = $16,000`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 5. BILLING & ACCOUNTS ───────────────────────────────────────────────
  {
    icon: <FaFileContract size={52} className="text-4xl text-[#780dff]" />,
    title: "Billing & Accounts",
    description: "Fees, payments, account limits, and refund policy",
    articles: [
      {
        title: "Why Is There a Challenge Fee?",
        description: `The one-time challenge fee covers:
- Platform technology
- Market data infrastructure
- Risk systems
- Support staff
- Capital allocation structure

There are no recurring fees — it's a single payment only.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "When Do I Receive My Account?",
        description: `Immediately after payment confirmation. Login credentials are sent instantly to your email.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How Many Accounts Can I Have?",
        description: `You may operate up to 40 accounts simultaneously.

Capital allocations are reviewed internally. Account merging is not guaranteed. Total exposure limits are determined at firm discretion.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Is My Payment Secure?",
        description: `Yes. All payments are encrypted and processed through Authorize.net.

Peak Profit Funding™ does not store:
- Card numbers
- Billing credentials
- Payment data`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Refund Policy",
        description: `All purchases are final.
- No refunds
- No partial refunds
- Failed evaluations are not eligible for refunds
- Chargebacks result in a permanent account ban`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 6. RULES & COMPLIANCE ───────────────────────────────────────────────
  {
    icon: <GiRuleBook size={52} className="text-4xl text-[#780dff]" />,
    title: "Rules & Compliance",
    description:
      "Prohibited activity, termination policy, and trader liability",
    articles: [
      {
        title: "What Activity Is Strictly Prohibited?",
        description: `The following results in immediate account termination, profit forfeiture, and a permanent ban:

- Latency exploitation
- Infrastructure abuse
- Identity sharing
- Fraudulent KYC
- Reverse engineering
- Tick manipulation
- Grid martingale abuse
- Payout laundering

No hidden enforcement — all rules are clearly written.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Am I Responsible for Losses on Funded Accounts?",
        description: `No. Peak Profit Funding™ absorbs all trading losses on funded accounts.

Traders are not personally responsible for:
- Drawdown losses
- Market losses
- Volatility losses

The firm's capital is protected by strict risk parameters. Your personal financial risk is limited strictly to the evaluation fee.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Capital Risk Structure",
        description: `To be completely clear:
- You do not deposit trading capital
- You do not borrow money
- You do not assume debt
- You are not personally liable

You trade under a structured risk system. If rules are breached, the account is closed. No debt. No liability.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Important Clarification on Violations",
        description: `Rule violations such as fraud, identity manipulation, or infrastructure exploitation may result in profit forfeiture and a permanent ban.

But even in those cases: you are not financially liable beyond your original evaluation purchase.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Dispute Resolution",
        description: `Any disputes arising from participation in the Peak Profit Funding™ program are handled under the governing law outlined in our Terms & Conditions.

All disputes may be subject to binding arbitration where applicable.`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },

  // ─── 7. COMMUNITY & SUPPORT ──────────────────────────────────────────────
  {
    icon: <FaUsers size={52} className="text-4xl text-[#780dff]" />,
    title: "Community & Support",
    description: "How to get help, connect with traders, and keep learning",
    articles: [
      {
        title: "How Can I Contact Support?",
        description: `Inside your Client Portal:
- Start a live support chat
- Open a support ticket

We operate 24/7 support staff.

You may also reach us at:
📩 support@peakprofitfunding.com

Response times are fast.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Where Is the Community?",
        description: `Join our Discord: https://discord.gg/peakprofit

Connect with 5,000+ traders, get rule clarifications, and access live trading sessions.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Education & Learning Resources",
        description: `Inside our Discord and platform you'll find:
- Live trading sessions
- Rule explanations
- Risk management breakdowns
- Strategy discussions
- Direct support access

We aim to improve traders — not just test them.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Transparency & Proof of Payouts",
        description: `Peak Profit Funding™ publicly showcases:
- Verified payout confirmations
- Trader testimonials
- Performance highlights (with consent)

We believe transparency builds trust.`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },
  {
    icon: <TbAffiliate size={52} className="text-4xl text-[#780dff]" />,
    title: "Affiliate Program",
    description: "Affiliate Program",
    articles: [
      {
        title: "How do I become an affiliate?",
        description: `Go to your Dashboard.
Click on the Affiliate Section.
Fill out the application and submit it.

Once approved, you’ll receive your unique affiliate code and referral link.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How much commission do affiliates earn?",
        description: `Affiliates earn 20% to 25% commission on every funded account sold.
Your exact rate depends on how influential you are and your referral performance.
The bigger your reach, the higher your commission potential.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How do I earn commissions?",
        description: `Share your unique code or referral link.
When someone buys a funded account using your code, you’ll earn a commission.
Commissions apply only to paid funded accounts (not free trials or invalid orders).`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Do affiliates get bonus rewards?",
        description: `Yes, we reward our top partners!

For every milestone you hit in referred members, you’ll earn a bonus payout.
Milestone goals and bonus amounts will be explained in your affiliate dashboard and onboarding email.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "How can I get paid?",
        description: `We offer flexible payout methods:

• Wire Transfer / ACH
• Crypto (USDT, BTC, ETH, etc.)
• Funded Accounts (Want trading capital instead of cash? No problem.)`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "When do payouts happen?",
        description: `Payouts are processed monthly, within the first 7 business days of each month.
Commissions are paid out after successful sales are verified.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Where do I track my affiliate stats?",
        description: `Check your Affiliate Dashboard for real-time data:

• Total sales & commissions
• Referral clicks and conversions
• Bonus milestones
• Payment history`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Where’s my affiliate code?",
        description: `Find your code and referral link in your Affiliate Dashboard, under the Affiliate Tools section.
Use this link/code to ensure your referrals are tracked correctly.`,
        lastUpdated: "Over 3 months ago",
      },
      {
        title: "Still have questions?",
        description: `Contact us at support@peakprofitfunding.com and our team will help you out.`,
        lastUpdated: "Over 3 months ago",
      },
    ],
  },
];
