import {
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  FileText,
  Scale,
  Lock,
  Zap,
  DollarSign,
  Calendar,
  Target,
} from "lucide-react";

export const rulebookData = {
  sections: [
    {
      id: "demo",
      icon: Target,
      title: "DEMO (EVALUATION) ACCOUNT RULES",
      stats: [
        { icon: TrendingUp, label: "Profit Target", value: "8%" },
        { icon: AlertTriangle, label: "Max Daily Loss", value: "2.5%" },
        { icon: XCircle, label: "Max Drawdown", value: "7%" },
        { icon: Calendar, label: "Min Trading Days", value: "3" },
      ],
      content: [
        {
          type: "success",
          title: "Trading Permissions",
          icon: CheckCircle,
          items: [
            "Crypto Trading: Permitted 24/7",
            "Forex Trading: Prohibited on weekends",
          ],
        },
        {
          type: "warning",
          title: "Consistency Rule",
          description:
            "No single trading day may exceed 33% of total accumulated profit",
        },
        {
          type: "text",
          title: "Additional Demo Conditions:",
          items: [
            "All trading activity must respect internal risk parameters",
            "Breach of any rule results in instant evaluation failure",
            "Evaluation fees are non-refundable under any circumstance",
            "System pricing, execution, and data feeds are simulated and may differ from live markets",
          ],
        },
      ],
    },
    {
      id: "live",
      icon: Zap,
      title: "LIVE (FUNDED) ACCOUNT RULES",
      stats: [
        { icon: AlertTriangle, label: "Daily Loss Limit", value: "2%" },
        { icon: XCircle, label: "Max Drawdown", value: "6%" },
        { icon: DollarSign, label: "Profit Split", value: "85/15%" },
      ],
      content: [
        {
          type: "info",
          title: "Payout Structure",
          items: [
            "First Payout Split: 50% Trader / 50% Firm",
            "Subsequent Payouts: 85% Trader / 15% Firm",
            "Payout Frequency: Every 7 Days",
            "Minimum Payout: $100",
            "Maximum Payout: $5,000",
          ],
        },
        {
          type: "success",
          title: "Minimum Profitable Days for Payout",
          description: "5 trading days with 0.5% profit or greater per day",
          note: "Days do not need to be consecutive",
        },
        {
          type: "warning",
          title: "Post-First Payout Drawdown",
          description: "Locked at original starting balance",
        },
        {
          type: "danger",
          title: "Account Closure",
          description:
            "100% Balance Payout results in automatic account closure",
        },
        {
          type: "text",
          title: "Additional Live Trading Controls:",
          items: [
            "News Trading: Fully permitted",
            "Traders must maintain compliance with drawdown, trading days, and payout criteria at all times",
            "Payouts are processed within 3–5 business days after approval",
            "Traders with 3 compliant consecutive payouts may be considered for scaling",
            "PeakProfit Funding™ reserves full discretion over payout final approval",
          ],
        },
      ],
    },
    {
      id: "copy-trading",
      icon: Users,
      title: "COPY TRADING & STRATEGY USAGE POLICY",
      content: [
        {
          type: "success",
          title: "Copy Trading — Fully Permitted",
          icon: CheckCircle,
          description: "Traders are authorized to use:",
          items: [
            "Personal copy trading systems",
            "Third-party signal providers",
            "Automated trading bots and APIs",
            "Algorithmic trade execution platforms",
          ],
        },
        {
          type: "text",
          title: "All copied trades must comply with:",
          items: [
            "Daily loss limits",
            "Drawdown thresholds",
            "Consistency rules",
            "Payout eligibility standards",
          ],
        },
        {
          type: "warning",
          title: "PeakProfit Funding™ assumes no liability for:",
          items: [
            "Signal accuracy",
            "Execution latency",
            "Mirroring discrepancies",
            "API failures",
            "External provider outages",
          ],
          note: "All copied trades are treated as trader-directed activity.",
        },
        {
          type: "success",
          title: "Strategy Freedom — All Strategies Allowed",
          icon: CheckCircle,
          description:
            "There are zero restrictions on trading strategy type. This includes:",
          gridItems: [
            [
              "Scalping",
              "Day trading",
              "Swing trading",
              "High-frequency trading",
              "Algorithmic systems",
            ],
            [
              "News-based trading",
              "Momentum strategies",
              "Mean reversion",
              "Liquidity-based execution",
              "Statistical arbitrage",
            ],
          ],
          note: "Only risk violations, fraud, or system exploitation trigger enforcement — never the strategy itself.",
        },
      ],
    },
    {
      id: "prohibited",
      icon: XCircle,
      title: "PROHIBITED CONDUCT (NARROWED SCOPE)",
      content: [
        {
          type: "danger",
          title:
            "The following activities result in immediate termination, profit forfeiture, and permanent platform ban:",
          items: [
            "Exploitation of platform latency or infrastructure",
            "Emulator or execution feed manipulation",
            "Identity sharing or multi-party account control",
            "Fraudulent KYC documentation",
            "Payout laundering through multiple identities",
            "Internal system reverse-engineering",
            "Latency arbitrage, tick manipulation, grid martingale abuse",
            "Reverse-engineering of risk systems",
          ],
        },
        {
          type: "info",
          description:
            "Copy trading, automation, and aggressive strategies are explicitly allowed—only abuse or fraud is prohibited.",
        },
        {
          type: "text",
          title: "Additional Prohibited Practices:",
          items: [
            "News Exploitation Detection: While demo allows volatility, exploit-based execution during simulated data spikes will result in disqualification",
            "One IP / One Trader Policy: Multiple traders on a single account or identity sharing is forbidden",
            "Evaluation Reset Policy: Breach of any rule results in immediate failure with no refund eligibility",
          ],
        },
      ],
    },
    {
      id: "risk",
      icon: AlertTriangle,
      title: "RISK & CAPITAL DISCLOSURE",
      content: [
        {
          type: "warning",
          title: "Critical Information",
          items: [
            "All accounts operate in simulated trading environments",
            "Traders are not trading real capital",
            "Traders do not own funded accounts",
            "Payouts are issued as performance-based rewards from firm revenue, not from market profits",
            "Dashboard profits reflect simulated performance metrics",
            "Past results do not guarantee future outcomes",
            "Trading involves substantial financial risk and may result in total loss of evaluation fees",
          ],
        },
      ],
    },
    {
      id: "legal",
      icon: Scale,
      title: "LEGAL & REGULATORY STATUS",
      content: [
        {
          type: "info",
          title: "PeakProfit Funding™:",
          items: [
            "Is not a broker-dealer",
            "Is not a registered investment advisor (RIA)",
            "Does not accept deposits for live trading",
            "Does not provide financial, investment, or portfolio advice",
            "Does not offer securities, futures, forex, or crypto products",
          ],
        },
        {
          type: "text",
          title: "All services are strictly provided for:",
          items: [
            "Educational evaluation",
            "Performance-based reward programs",
          ],
        },
        {
          type: "warning",
          title: "No content on this platform constitutes:",
          items: [
            "Financial advice",
            "Investment solicitation",
            "Portfolio management recommendations",
            "Guarantees of profit",
          ],
        },
      ],
    },
    {
      id: "system",
      icon: Zap,
      title: "SYSTEM, DATA & EXECUTION RISK DISCLAIMER",
      content: [
        {
          type: "warning",
          title: "PeakProfit Funding™ is not liable for:",
          gridItems: [
            [
              "Platform outages",
              "Exchange halts",
              "Liquidity gaps",
              "Trade execution delays",
              "Data feed inaccuracies",
            ],
            [
              "Spread widening",
              "API interruptions",
              "Server maintenance",
              "Force majeure events",
            ],
          ],
          note: "All metrics, pricing, and execution data are provided on a best-effort basis only and are not contractually guaranteed.",
        },
      ],
    },
    {
      id: "kyc",
      icon: Lock,
      title: "KYC, ANTI-FRAUD & COMPLIANCE",
      content: [
        {
          type: "info",
          items: [
            "✓ Government-issued ID verification is required prior to first payout",
            "✓ One funded account per verified individual",
            "✓ PeakProfit Funding™ deploys AML, sanctions screening, and fraud detection protocols",
          ],
        },
        {
          type: "danger",
          title: "Any falsified documentation results in:",
          items: [
            "Account termination",
            "Profit forfeiture",
            "Permanent platform ban",
          ],
        },
      ],
    },
    {
      id: "termination",
      icon: Shield,
      title: "ACCOUNT TERMINATION & PROFIT FORFEITURE AUTHORITY",
      content: [
        {
          type: "danger",
          title: "PeakProfit Funding™ reserves the unrestricted right to:",
          items: [
            "Suspend or terminate any account",
            "Void any profits",
            "Refuse service",
            "Deny payouts",
            "Restrict platform access",
          ],
          description: "if any behavior is deemed to present:",
          secondaryItems: [
            "Financial risk",
            "Legal exposure",
            "Operational threat",
            "Reputational harm",
          ],
        },
      ],
    },
    {
      id: "modifications",
      icon: FileText,
      title: "RULE MODIFICATION & GOVERNING AUTHORITY",
      content: [
        {
          type: "info",
          items: [
            "• All rules, limits, and payout structures are subject to change at any time",
            "• Continued platform usage constitutes automatic acceptance of updated terms",
            "• PeakProfit Funding™ maintains final interpretive authority over all rules",
          ],
        },
      ],
    },
  ],
};
