import React from 'react';
import { Shield, AlertTriangle, BarChart2, Zap, Database, Lock, RefreshCw, Code, Layers, Key, ExternalLink } from 'lucide-react';

const Definitions: React.FC = () => {
    const terms = [
        {
            term: "Solana",
            definition: "A high-performance blockchain platform known for its speed and low transaction costs, popular for DeFi applications and NFTs.",
            extendedInfo: "Solana can process up to 65,000 transactions per second with sub-second finality and average fees of $0.00025 per transaction. Its Proof of History consensus mechanism timestamps transactions to create a verifiable order of events without requiring all nodes to agree at once, enabling greater scalability than many other blockchains.",
            icon: <Zap size={24} className="text-purple-400" />,
            resources: [
                { name: "Official Solana Website", url: "https://solana.com" },
                { name: "Solana Developer Documentation", url: "https://docs.solana.com" }
            ]
        },
        {
            term: "Mint Authority",
            definition: "The ability to create new tokens in a cryptocurrency. When active, creators can mint additional tokens, potentially diluting value.",
            extendedInfo: "In Solana's SPL token standard, mint authority is a permission that allows an account to create new tokens. When developers retain mint authority, they can increase the token supply at will, which poses a significant risk to investors. Legitimate projects often renounce mint authority or lock it in a time-controlled contract to demonstrate commitment to their tokenomics.",
            icon: <Key size={24} className="text-red-400" />,
            resources: [
                { name: "Solana Token Program Documentation", url: "https://docs.solana.com/developing/programming-model/calling-between-programs#token-program" },
                { name: "Solana Token Program - Mint Authority", url: "https://spl.solana.com/token#authority-delegation" }
            ]
        },
        {
            term: "Rug Pull",
            definition: "A crypto scam where developers abandon a project and run away with investor funds, often after artificially inflating the token's price.",
            extendedInfo: "Rug pulls typically occur in several forms: liquidity removal (where developers withdraw all funds from trading pools), dumping (where team members sell large holdings at once), or backdoor exploits (using hidden code to steal funds). On Solana, rug pulls resulted in over $200M in losses in 2022 alone. Warning signs include anonymous teams, unrealistic promises, and unverified smart contracts.",
            icon: <AlertTriangle size={24} className="text-orange-400" />,
            resources: [
                { name: "CoinMarketCap Glossary - Rug Pull", url: "https://coinmarketcap.com/alexandria/glossary/rug-pull" },
                { name: "Solana Security Tips", url: "https://solana.com/developers/security-best-practices" }
            ]
        },
        {
            term: "DeFi",
            definition: "Decentralized Finance - financial services built on blockchain technology that operate without centralized intermediaries like banks.",
            extendedInfo: "DeFi applications include decentralized exchanges (DEXs), lending platforms, yield farming, and insurance protocols. Unlike traditional finance, DeFi operates 24/7, requires no identity verification, and gives users full custody of their assets. However, this comes with increased responsibility as transactions are irreversible and security vulnerabilities can lead to permanent loss of funds.",
            icon: <Database size={24} className="text-blue-400" />,
            resources: [
                { name: "CoinGecko DeFi Overview", url: "https://www.coingecko.com/en/defi" },
                { name: "Solana Ecosystem Projects", url: "https://solana.com/ecosystem" }
            ]
        },
        {
            term: "Liquidity Pool",
            definition: "A collection of funds locked in a smart contract, used to facilitate trading by providing liquidity to a decentralized exchange.",
            extendedInfo: "Liquidity pools enable trading without traditional order books. Users deposit equal values of two tokens to create a trading pair (like SOL/USDC). Traders swap against these pools, with prices determined by an algorithm maintaining the pool's balance. Liquidity providers earn fees from trades but risk impermanent loss if token prices diverge significantly. Low liquidity pools are more susceptible to price manipulation and slippage.",
            icon: <BarChart2 size={24} className="text-green-400" />,
            resources: [
                { name: "Raydium.io", url: "https://raydium.io/pools/" },
                { name: "Orca.so", url: "https://www.orca.so/" }
            ]
        },
        {
            term: "Smart Contract",
            definition: "Self-executing code deployed on a blockchain that automatically enforces and executes the terms of an agreement when predefined conditions are met.",
            extendedInfo: "On Solana, smart contracts (called programs) are written in Rust, C, or C++ for performance. Unlike Ethereum's account-based model, Solana uses a unique ownership model where programs don't own their data. This architecture enables parallel processing but creates different security considerations. Vulnerabilities in smart contracts can't typically be patched after deployment, making thorough auditing essential.",
            icon: <Code size={24} className="text-yellow-400" />,
            resources: [
                { name: "Solana Program Development", url: "https://docs.solana.com/developing/on-chain-programs/overview" },
                { name: "Anchor Framework", url: "https://www.anchor-lang.com/" }
            ]
        },
        {
            term: "Tokenomics",
            definition: "The economic model and distribution structure of a cryptocurrency, including supply mechanisms, allocation, and utility within its ecosystem.",
            extendedInfo: "Strong tokenomics include transparent allocation (how tokens are distributed among team, investors, and community), clear utility (what the token is used for), and sustainable emission schedules. Red flags include excessive team allocations, short vesting periods, and inflationary mechanics without adequate token burning or utility. Tokenomics directly impact a project's long-term viability and token price stability.",
            icon: <Layers size={24} className="text-indigo-400" />,
            resources: [
                { name: "Solana Token Metadata Program", url: "https://docs.metaplex.com/programs/token-metadata/overview" }
            ]
        },
        {
            term: "Token Vesting",
            definition: "A mechanism that gradually releases tokens to team members, investors, or other stakeholders over a predetermined period to prevent immediate selling.",
            extendedInfo: "Vesting schedules typically include a cliff period (initial waiting time before any tokens are released) followed by gradual unlocking. For example, a 1-year cliff with 4-year vesting means no tokens are received for the first year, then the remaining tokens unlock monthly over the next three years. Proper vesting aligns team incentives with long-term project success and prevents market flooding.",
            icon: <Lock size={24} className="text-pink-400" />,
            resources: [
                { name: "Solana Token Vesting", url: "https://spl.solana.com/token-vesting" }
            ]
        },
        {
            term: "MEV (Maximal Extractable Value)",
            definition: "The profit validators or miners can extract from users by manipulating the order of transactions within a block.",
            extendedInfo: "MEV opportunities include frontrunning (executing trades before known pending transactions), sandwich attacks (placing orders before and after a large trade to profit from price movements), and arbitrage between exchanges. On Solana, MEV is mitigated somewhat by its deterministic transaction ordering, but specialized trading bots still exploit these opportunities, often at the expense of regular users.",
            icon: <RefreshCw size={24} className="text-cyan-400" />,
            resources: [
                { name: "Jito Labs - MEV on Solana", url: "https://www.jito.network/" }
            ]
        },
        {
            term: "Wallet Security",
            definition: "Practices and technologies used to protect cryptocurrency holdings from unauthorized access, theft, or loss.",
            extendedInfo: "Secure wallet management includes using hardware wallets for large holdings, keeping seed phrases offline in multiple secure locations, using burner wallets for interacting with unverified dApps, and regularly auditing token approvals. Phishing attacks targeting crypto users have become increasingly sophisticated, with attackers creating fake versions of popular DeFi interfaces to steal private keys or approval permissions.",
            icon: <Shield size={24} className="text-teal-400" />,
            resources: [
                { name: "Solana Wallet Guide", url: "https://docs.solana.com/wallet-guide" },
                { name: "Phantom Wallet Security", url: "https://phantom.app/blog/security-at-phantom" }
            ]
        }
    ];

    return (
        <div className="content-container">
            <h1>Decentralized Finance Concepts</h1>
            <p className="mb-8">Understanding these key terms is essential for navigating the cryptocurrency space safely. Our trading bot incorporates these concepts to protect users from common risks and scams.</p>

            <div className="grid grid-cols-1 gap-6">
                {terms.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="flex items-center mb-2">
                            <div className="mr-3">{item.icon}</div>
                            <h2 className="text-xl font-bold">{item.term}</h2>
                        </div>
                        <p className="font-medium text-blue-300 mb-3">{item.definition}</p>
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-300">{item.extendedInfo}</p>

                            {/* Resource Links - Now Vertical */}
                            {item.resources && item.resources.length > 0 && (
                                <div className="mt-4 pt-3 border-t border-gray-700">
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Official Resources:</h4>
                                    <div className="flex flex-col space-y-2">
                                        {item.resources.map((resource, idx) => (
                                            <a
                                                key={idx}
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm bg-gray-700 hover:bg-gray-600 text-blue-300 px-4 py-2 rounded-lg transition-colors w-full"
                                            >
                                                <span className="flex-grow">{resource.name}</span>
                                                <ExternalLink size={14} className="ml-2 flex-shrink-0" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Definitions;