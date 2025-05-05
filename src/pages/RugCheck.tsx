import React from 'react';
import {
    AlertTriangle,
    Shield,
    Check,
    X,
    Lock,
    BarChart2,
    Users,
    FileText,
    Eye,
    Zap
} from 'lucide-react';

const RugCheck: React.FC = () => {
    const rugCheck = [
        {
            check: "Mint Authority Status",
            description: "Verifies if token creators can still mint unlimited new tokens, which could be used to dilute value and crash the price.",
            icon: <Lock size={24} className="text-red-400" />,
            method: "We scan the token mint account on Solana to verify if mint authority has been disabled or renounced by the creator, preventing unlimited supply inflation.",
            status: "Critical"
        },
        {
            check: "Liquidity Analysis",
            description: "Examines the size and distribution of liquidity pools to ensure there's enough trading depth and that liquidity isn't controlled by a single entity.",
            icon: <BarChart2 size={24} className="text-blue-400" />,
            method: "Our bot analyzes liquidity pool accounts to check total depth, LP token distribution, and time-lock status to ensure fair trading conditions.",
            status: "High"
        },
        {
            check: "Contract Verification",
            description: "Confirms that the token's smart contract code is publicly verified and doesn't contain malicious functions like hidden fees or transfer restrictions.",
            icon: <FileText size={24} className="text-yellow-400" />,
            method: "We verify the program account that controls the token for any unusual or suspicious functions that could indicate potential rug-pull mechanics.",
            status: "High"
        },
        {
            check: "Ownership Concentration",
            description: "Analyzes token distribution to identify if a small number of wallets control a large percentage of the supply, which poses a dump risk.",
            icon: <Users size={24} className="text-purple-400" />,
            method: "Our bot scans all token accounts to identify whale wallets and calculates a centralization risk score based on token concentration patterns.",
            status: "Medium"
        }
    ];

    // Timeline stages for the rug pull visualization
    const timelineStages = [
        {
            position: "top-0 left-1/2 transform -translate-x-1/2 -ml-32 md:-ml-48",
            direction: "right",
            color: "blue",
            title: "Token Creation",
            description: "Developer creates a new token on Solana using platforms like Pump.fun with minimal effort."
        },
        {
            position: "top-1/4 left-1/2 transform -translate-x-1/2 ml-32 md:ml-48",
            direction: "left",
            color: "green",
            title: "Initial Hype",
            description: "Marketing campaign on social media creates hype, drawing in investors who buy the token."
        },
        {
            position: "top-1/2 left-1/2 transform -translate-x-1/2 -ml-32 md:-ml-48",
            direction: "right",
            color: "green",
            title: "Price Increase",
            description: "More investors join, driving up the token price and total market cap rapidly."
        },
        {
            position: "top-3/4 left-1/2 transform -translate-x-1/2 ml-32 md:ml-48",
            direction: "left",
            color: "red",
            title: "Developer Cash Out",
            description: "Developers suddenly sell their large holdings, removing liquidity from the market."
        },
        {
            position: "bottom-0 left-1/2 transform -translate-x-1/2 -ml-32 md:-ml-48",
            direction: "right",
            color: "red",
            title: "Price Collapse",
            description: "Token price crashes to near-zero in seconds, leaving investors with worthless tokens."
        }
    ];

    // Case study data
    const caseStudyTokens = [
        {
            name: "SafeMoon (Example)",
            rugStatus: "Confirmed",
            mintAuth: "Active",
            liquidity: "Unlocked",
            contract: "Unverified",
            ownership: "Concentrated (65%)"
        },
        {
            name: "HealthyDeFi (Example)",
            rugStatus: "Safe",
            mintAuth: "Renounced",
            liquidity: "Locked 1yr",
            contract: "Verified",
            ownership: "Distributed"
        },
        {
            name: "QuickProfit (Example)",
            rugStatus: "Suspicious",
            mintAuth: "Renounced",
            liquidity: "Unlocked",
            contract: "Verified",
            ownership: "Concentrated (40%)"
        }
    ];

    return (
        <div className="content-container">
            <h1>Why Rug Checks Matter</h1>
            <p>
                In the fast-paced world of Solana trading, automated security checks are essential
                to protect users from scams and malicious tokens. Our bot performs these critical checks
                before committing to any trade.
            </p>

            {/* Visual Explanation of Rug Pulls */}
            <div className="card">
                <h2>What is a Rug Pull?</h2>
                <p>A visual explanation of how rug pulls operate and harm investors.</p>

                <div className="relative mt-6 h-96 bg-gray-900 rounded-lg p-4 overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10">
                        {Array(12 * 6).fill(0).map((_, i) => (
                            <div key={i} className="border border-blue-500"></div>
                        ))}
                    </div>

                    {/* Timeline Visualization */}
                    <div className="relative h-full z-10">
                        {/* Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>

                        {/* Timeline Stages */}
                        {timelineStages.map((stage, index) => (
                            <div key={index} className={`absolute ${stage.position} w-64 md:w-96`}>
                                <div className="relative">
                                    <div className={`absolute top-6 ${stage.direction === "right" ? "right-0" : "left-0"} w-24 h-0.5 bg-${stage.color}-500`}></div>
                                    <div className={`absolute top-6 ${stage.direction === "right" ? "right-0" : "left-0"} w-3 h-3 rounded-full bg-${stage.color}-500`}></div>
                                    <div className={`bg-gray-800 p-3 rounded-lg border border-${stage.color}-500`}>
                                        <h3 className={`text-sm font-medium text-${stage.color}-400 mb-1 flex items-center`}>
                                            <span className={`bg-${stage.color}-500 text-white rounded-full w-5 h-5 inline-flex items-center justify-center mr-2`}>
                                                {stage.number}
                                            </span>
                                            {stage.title}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            {stage.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Security Verification Dashboard */}
            <div className="card mt-6">
                <h2>Security Verification Dashboard</h2>
                <p>
                    Our trading bot runs these critical checks on every token before executing a trade.
                    Each verification mechanism was designed with the accountability framework in mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Mint Authority Check */}
                    <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500">
                        <div className="flex items-start">
                            <div className="p-2 bg-gray-900 rounded-full mr-3">
                                <Lock className="text-yellow-400" size={24} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Mint Authority</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-red-500 bg-opacity-20 text-red-400 rounded">
                                        Critical Priority
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Verifies if token creators can still mint unlimited new tokens, which could be used to dilute value and crash the price.
                                </p>

                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="text-xs font-medium text-gray-300 mb-2">Verification Method:</h4>
                                    <p className="text-xs text-gray-400">
                                        We scan the token mint account on Solana to verify if mint authority has been disabled or renounced by the creator, preventing unlimited supply inflation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Liquidity Analysis */}
                    <div className="bg-gray-800 p-4 rounded-lg border border-blue-500">
                        <div className="flex items-start">
                            <div className="p-2 bg-gray-900 rounded-full mr-3">
                                <BarChart2 className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Liquidity Analysis</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded">
                                        High Priority
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Examines the size and distribution of liquidity pools to ensure there's enough trading depth and that liquidity isn't controlled by a single entity.
                                </p>

                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="text-xs font-medium text-gray-300 mb-2">Verification Method:</h4>
                                    <p className="text-xs text-gray-400">
                                        Our bot analyzes liquidity pool accounts to check total depth, LP token distribution, and time-lock status to ensure fair trading conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contract Verification */}
                    <div className="bg-gray-800 p-4 rounded-lg border border-green-500">
                        <div className="flex items-start">
                            <div className="p-2 bg-gray-900 rounded-full mr-3">
                                <FileText className="text-green-400" size={24} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Contract Verification</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded">
                                        High Priority
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Confirms that the token's smart contract code is publicly verified and doesn't contain malicious functions like hidden fees or transfer restrictions.
                                </p>

                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="text-xs font-medium text-gray-300 mb-2">Verification Method:</h4>
                                    <p className="text-xs text-gray-400">
                                        We verify the program account that controls the token for any unusual or suspicious functions that could indicate potential rug-pull mechanics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ownership Concentration */}
                    <div className="bg-gray-800 p-4 rounded-lg border border-purple-500">
                        <div className="flex items-start">
                            <div className="p-2 bg-gray-900 rounded-full mr-3">
                                <Users className="text-purple-400" size={24} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Ownership Concentration</h3>
                                    <span className="text-xs font-medium px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded">
                                        Medium Priority
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">
                                    Analyzes token distribution to identify if a small number of wallets control a large percentage of the supply, which poses a dump risk.
                                </p>

                                <div className="bg-gray-900 p-3 rounded">
                                    <h4 className="text-xs font-medium text-gray-300 mb-2">Verification Method:</h4>
                                    <p className="text-xs text-gray-400">
                                        Our bot scans all token accounts to identify whale wallets and calculates a centralization risk score based on token concentration patterns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study */}
            <div className="card mt-6">
                <h2>Case Study: Rug Pull Detection</h2>
                <p>
                    Below are examples of how our rug check system evaluates different tokens.
                    These case studies demonstrate the effectiveness of our accountability-focused approach.
                </p>

                <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-gray-800 text-left">
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Token</th>
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Status</th>
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Mint Authority</th>
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Liquidity</th>
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Contract</th>
                            <th className="p-3 text-sm font-medium text-gray-300 border-b border-gray-700">Ownership</th>
                        </tr>
                        </thead>
                        <tbody>
                        {caseStudyTokens.map((token, index) => (
                            <tr key={index} className={`border-b border-gray-700 ${
                                token.rugStatus === 'Confirmed' ? 'bg-red-900 bg-opacity-20' :
                                    token.rugStatus === 'Suspicious' ? 'bg-yellow-900 bg-opacity-20' :
                                        'bg-green-900 bg-opacity-20'
                            }`}>
                                <td className="p-3 text-sm">{token.name}</td>
                                <td className="p-3">
                                        <span className={`inline-flex items-center text-xs font-medium px-2 py-1 rounded ${
                                            token.rugStatus === 'Confirmed' ? 'bg-red-500 bg-opacity-20 text-red-400' :
                                                token.rugStatus === 'Suspicious' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                                                    'bg-green-500 bg-opacity-20 text-green-400'
                                        }`}>
                                            {token.rugStatus === 'Confirmed' ? <X size={14} className="mr-1" /> :
                                                token.rugStatus === 'Suspicious' ? <AlertTriangle size={14} className="mr-1" /> :
                                                    <Check size={14} className="mr-1" />}
                                            {token.rugStatus}
                                        </span>
                                </td>
                                <td className="p-3 text-sm">{token.mintAuth}</td>
                                <td className="p-3 text-sm">{token.liquidity}</td>
                                <td className="p-3 text-sm">{token.contract}</td>
                                <td className="p-3 text-sm">{token.ownership}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Accountability Integration */}
            <div className="card mt-6">
                <h2>Rug Check & Accountability Integration</h2>
                <p>
                    Our rug check system is a key component of the bot's accountability framework.
                    Here's how security verification aligns with the principles from Cornell's guide.
                </p>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-4 rounded-lg border border-blue-500">
                        <div className="flex items-center mb-3">
                            <Shield className="text-blue-400 mr-2" size={20} />
                            <h3 className="text-base font-medium">Role Accountability</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            The bot's role includes protecting users from scams. Our rug check system
                            fulfills this obligation by providing comprehensive security verification
                            before any transaction.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-500">
                        <div className="flex items-center mb-3">
                            <Eye className="text-purple-400 mr-2" size={20} />
                            <h3 className="text-base font-medium">Outside Verification</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            Each rug check provides transparent logs that users can review,
                            allowing external verification of the bot's security decisions
                            and establishing trust through transparency.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-green-500">
                        <div className="flex items-center mb-3">
                            <Zap className="text-green-400 mr-2" size={20} />
                            <h3 className="text-base font-medium">Inside Design</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                            The rug check algorithms are designed with ethical constraints
                            and explainable logic, allowing users to understand why a token
                            was flagged or approved for trading.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visual Risk Assessment */}
            <div className="card mt-6">
                <h2>Visual Risk Assessment</h2>
                <p>
                    Our bot calculates a comprehensive risk score for each token based on the four security checks.
                    This visualization helps traders understand the potential risks at a glance.
                </p>

                <div className="mt-6 bg-gray-900 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-lg font-semibold">Token Risk Assessment Dashboard</h3>
                        <div className="bg-blue-500 bg-opacity-10 rounded-full px-3 py-1 text-xs text-blue-400">
                            Example Visualization
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Risk Score Visualization */}
                        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg flex items-center">
                            <div className="mr-4 relative">
                                <svg width="100" height="100" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="#2a2a3a" strokeWidth="10" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="transparent"
                                        stroke="#3a86ff"
                                        strokeWidth="10"
                                        strokeDasharray="282.7"
                                        strokeDashoffset="198"
                                        transform="rotate(-90 50 50)"
                                    />
                                    <text x="50" y="55" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">
                                        32
                                    </text>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium mb-1">Risk Score</h4>
                                <p className="text-xs text-gray-400 mb-3">Lower is better (0-100)</p>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                                    <span className="text-xs text-gray-400">Low Risk (0-33)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                                    <span className="text-xs text-gray-400">Medium Risk (34-66)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                                    <span className="text-xs text-gray-400">High Risk (67-100)</span>
                                </div>
                            </div>
                        </div>

                        {/* Component Scores */}
                        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                            <h4 className="text-sm font-medium mb-3">Component Scores</h4>

                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs">Mint Authority</span>
                                        <span className="text-xs text-green-400">Safe</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '10%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs">Liquidity</span>
                                        <span className="text-xs text-yellow-400">Caution</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full">
                                        <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs">Contract</span>
                                        <span className="text-xs text-green-400">Safe</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full">
                                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '15%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs">Ownership</span>
                                        <span className="text-xs text-yellow-400">Caution</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-700 rounded-full">
                                        <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Scan Results */}
                    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium mb-3">Recent Security Scans</h4>
                        <div className="space-y-3">
                            {[
                                { time: "13:45:12", token: "SOL/USDC", risk: "Low", status: "Approved" },
                                { time: "13:32:05", token: "BONK/SOL", risk: "Low", status: "Approved" },
                                { time: "13:21:18", token: "NEWTOKEN/SOL", risk: "High", status: "Rejected" },
                                { time: "13:15:03", token: "MEME/SOL", risk: "Medium", status: "Warning" },
                            ].map((scan, index) => (
                                <div key={index} className="flex justify-between items-center border-b border-gray-700 pb-2">
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-500 mr-3">{scan.time}</span>
                                        <span className="text-sm">{scan.token}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`px-2 py-1 rounded text-xs mr-3 ${
                                            scan.risk === "Low" ? "bg-green-500 bg-opacity-20 text-green-400" :
                                                scan.risk === "Medium" ? "bg-yellow-500 bg-opacity-20 text-yellow-400" :
                                                    "bg-red-500 bg-opacity-20 text-red-400"
                                        }`}>
                                            {scan.risk} Risk
                                        </span>
                                        <span className={`px-2 py-1 rounded text-xs ${
                                            scan.status === "Approved" ? "bg-green-500 bg-opacity-20 text-green-400" :
                                                scan.status === "Warning" ? "bg-yellow-500 bg-opacity-20 text-yellow-400" :
                                                    "bg-red-500 bg-opacity-20 text-red-400"
                                        }`}>
                                            {scan.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RugCheck;