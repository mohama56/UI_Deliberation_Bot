import React from 'react';
import {
    Shield,
    Check,
    AlertTriangle,
    BarChart2,
    Activity,
    Cpu,
    Lock,
    Terminal,
    ArrowRight,
    Search,
    Eye,
    FileText,
    User
} from 'lucide-react';

const Visuals: React.FC = () => {
    // SVG path for connection lines
    const ConnectionLine: React.FC<{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        color?: string;
        dashed?: boolean;
    }> = ({x1, y1, x2, y2, color = "#3a86ff", dashed = false}) => (
        <path
            d={`M ${x1},${y1} L ${x2},${y2}`}
            stroke={color}
            strokeWidth="2"
            strokeDasharray={dashed ? "5,5" : "none"}
            fill="none"
        />
    );

    // Component for architecture box
    const ArchBox: React.FC<{
        icon: React.ReactNode;
        title: string;
        description: string;
        borderColor?: string;
        className?: string;
    }> = ({icon, title, description, borderColor = "border-blue-500", className = ""}) => (
        <div
            className={`p-4 bg-gray-800 bg-opacity-80 rounded-lg border ${borderColor} shadow-lg flex flex-col items-center ${className}`}>
            <div className="mb-2">{icon}</div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-xs text-gray-400 text-center">{description}</p>
        </div>
    );

    return (
        <div className="content-container">
            <h1>Visual Documentation</h1>
            <p>
                These diagrams illustrate how our trading bot implements the accountability framework,
                from its technical architecture to its security protocols.
            </p>

            {/* Performance Metrics */}
            <div className="card">
                <h2>Performance Metrics</h2>
                <p>Visualizations of the bot's trading performance and risk assessment accuracy.</p>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    {/* Profit Chart */}
                    <div className="bg-gray-900 p-4 rounded-lg border border-blue-500">
                        <h3 className="text-sm font-medium text-gray-400 mb-4">Profit Performance</h3>
                        <div className="h-48 relative">
                            {/* Simple line chart mockup */}
                            <svg className="w-full h-full" viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">
                                {/* Grid Lines */}
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <line
                                        key={`h-${i}`}
                                        x1="0"
                                        y1={i * 30}
                                        x2="300"
                                        y2={i * 30}
                                        stroke="#2a2a3a"
                                        strokeWidth="1"
                                    />
                                ))}
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <line
                                        key={`v-${i}`}
                                        x1={i * 60}
                                        y1="0"
                                        x2={i * 60}
                                        y2="120"
                                        stroke="#2a2a3a"
                                        strokeWidth="1"
                                    />
                                ))}

                                {/* Profit Line */}
                                <path
                                    d="M 0,120 L 60,100 L 120,110 L 180,80 L 240,60 L 300,30"
                                    stroke="#3a86ff"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <path
                                    d="M 0,120 L 60,100 L 120,110 L 180,80 L 240,60 L 300,30 L 300,120 L 0,120"
                                    fill="url(#profit-gradient)"
                                    opacity="0.3"
                                />

                                {/* Gradient Definition */}
                                <defs>
                                    <linearGradient id="profit-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#3a86ff" stopOpacity="1"/>
                                        <stop offset="100%" stopColor="#3a86ff" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Labels */}
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>Day 1</span>
                                <span>Day 10</span>
                                <span>Day 20</span>
                                <span>Day 30</span>
                            </div>
                        </div>
                    </div>

                    {/* Risk Assessment Accuracy */}
                    <div className="bg-gray-900 p-4 rounded-lg border border-purple-500">
                        <h3 className="text-sm font-medium text-gray-400 mb-4">Rug Pull Detection Accuracy</h3>
                        <div className="h-48 flex items-center justify-center">
                            {/* Donut chart mockup */}
                            <svg width="150" height="150" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#2a2a3a" strokeWidth="10"/>
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="transparent"
                                    stroke="#8338ec"
                                    strokeWidth="10"
                                    strokeDasharray="282.7"
                                    strokeDashoffset="28.27"
                                    transform="rotate(-90 50 50)"
                                />
                                <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="16"
                                      fill="white" fontWeight="bold">90%
                                </text>
                            </svg>

                            <div className="ml-4 space-y-2">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                    <span className="text-xs">Correctly Identified</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-2"></div>
                                    <span className="text-xs">False Positives</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trading Interface */}
            <div className="card">
                <h2>Trading Interface</h2>
                <p>Screenshot of the bot's monitoring dashboard and trading logs.</p>
                <div className="mt-6 bg-gray-900 p-6 rounded-lg border border-blue-500">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-blue-400">Solana Trading Dashboard</h3>
                        <div className="flex space-x-4">
                            <div
                                className="px-3 py-1 bg-green-500 bg-opacity-20 rounded text-green-400 text-xs font-medium">Connected
                            </div>
                            <div
                                className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded text-blue-400 text-xs font-medium">Auto-Trading:
                                ON
                            </div>
                        </div>
                    </div>

                    {/* Mockup Dashboard Content */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Active Trades</h4>
                            <p className="text-2xl font-bold text-white">3</p>
                            <div className="h-1 w-full bg-gray-700 mt-2">
                                <div className="h-1 bg-green-500 w-1/3"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Success Rate</h4>
                            <p className="text-2xl font-bold text-white">87.4%</p>
                            <div className="h-1 w-full bg-gray-700 mt-2">
                                <div className="h-1 bg-blue-500 w-4/5"></div>
                            </div>
                        </div>
                        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Safety Score</h4>
                            <p className="text-2xl font-bold text-white">92/100</p>
                            <div className="h-1 w-full bg-gray-700 mt-2">
                                <div className="h-1 bg-purple-500 w-11/12"></div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction Logs */}
                    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700">
                        <h4 className="text-sm font-medium text-gray-400 mb-3">Recent Transactions</h4>
                        <div className="space-y-3">
                            {[
                                {
                                    time: "12:45:32",
                                    token: "WIF/SOL",
                                    type: "BUY",
                                    amount: "0.42 SOL",
                                    status: "success"
                                },
                                {
                                    time: "12:32:18",
                                    token: "BOME/SOL",
                                    type: "SELL",
                                    amount: "0.85 SOL",
                                    status: "success"
                                },
                                {
                                    time: "12:15:07",
                                    token: "KITKAT/SOL",
                                    type: "REJECTED",
                                    amount: "0.30 SOL",
                                    status: "warning"
                                },
                                {
                                    time: "11:58:24",
                                    token: "BONK/SOL",
                                    type: "BUY",
                                    amount: "0.15 SOL",
                                    status: "success"
                                },
                            ].map((tx, index) => (
                                <div key={index}
                                     className="flex justify-between items-center border-b border-gray-700 pb-2">
                                    <div className="flex items-center space-x-3">
                                        <p className="text-xs text-gray-500">{tx.time}</p>
                                        <p className="text-sm font-medium">{tx.token}</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">{tx.amount}</p>
                                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                                            tx.type === "BUY" ? "bg-green-500 bg-opacity-20 text-green-400" :
                                                tx.type === "SELL" ? "bg-blue-500 bg-opacity-20 text-blue-400" :
                                                    "bg-yellow-500 bg-opacity-20 text-yellow-400"
                                        }`}>
                                            {tx.type}
                                        </div>
                                        <div className={`w-2 h-2 rounded-full ${
                                            tx.status === "success" ? "bg-green-500" : "bg-yellow-500"
                                        }`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Verification Process */}
            <div className="card">
                <h2>Security Verification Process</h2>
                <p>Flowchart illustrating the steps the bot takes to verify token security before trading.</p>

                <div className="relative h-[600px] mt-6 bg-gray-900 rounded-lg p-4">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10">
                        {Array(12 * 6).fill(0).map((_, i) => (
                            <div key={i} className="border border-blue-500"></div>
                        ))}
                    </div>

                    {/* Flow Chart */}
                    <div className="flex flex-col items-center relative z-10">
                        {/* Start Node */}
                        <div
                            className="p-3 bg-blue-500 bg-opacity-30 rounded-lg border border-blue-500 text-center mb-8 w-48">
                            <p className="text-sm font-medium">New Token Detected</p>
                        </div>

                        {/* Arrow Down */}
                        <div className="h-8 w-px bg-blue-500 mb-4 relative">
                            <ArrowRight className="text-blue-500 absolute -bottom-4 -left-2 rotate-90" size={16}/>
                        </div>

                        {/* Process 1 */}
                        <div
                            className="p-4 bg-gray-800 rounded-lg border border-green-500 shadow-lg w-80 mb-8 text-center">
                            <Search className="text-green-400 mx-auto mb-2" size={20}/>
                            <h3 className="text-base font-semibold mb-1">Initial Contract Analysis</h3>
                            <p className="text-xs text-gray-400">Check mint authority status, tokenomics, and contract
                                structure</p>
                        </div>

                        {/* Arrow Down */}
                        <div className="h-8 w-px bg-blue-500 mb-4 relative">
                            <ArrowRight className="text-blue-500 absolute -bottom-4 -left-2 rotate-90" size={16}/>
                        </div>

                        {/* Process 2 */}
                        <div
                            className="p-4 bg-gray-800 rounded-lg border border-purple-500 shadow-lg w-80 mb-8 text-center">
                            <Eye className="text-purple-400 mx-auto mb-2" size={20}/>
                            <h3 className="text-base font-semibold mb-1">Liquidity Verification</h3>
                            <p className="text-xs text-gray-400">Analyze liquidity pool size, distribution, and lock
                                status</p>
                        </div>

                        {/* Arrow Down */}
                        <div className="h-8 w-px bg-blue-500 mb-4 relative">
                            <ArrowRight className="text-blue-500 absolute -bottom-4 -left-2 rotate-90" size={16}/>
                        </div>

                        {/* Process 3 */}
                        <div
                            className="p-4 bg-gray-800 rounded-lg border border-yellow-500 shadow-lg w-80 mb-8 text-center">
                            <User className="text-yellow-400 mx-auto mb-2" size={20}/>
                            <h3 className="text-base font-semibold mb-1">Ownership Analysis</h3>
                            <p className="text-xs text-gray-400">Check token distribution and whale wallet activity</p>
                        </div>

                        {/* Arrow Down */}
                        <div className="h-8 w-px bg-blue-500 mb-4 relative">
                            <ArrowRight className="text-blue-500 absolute -bottom-4 -left-2 rotate-90" size={16}/>
                        </div>

                        {/* Decision Node */}
                        <div
                            className="p-4 bg-gray-800 rounded-lg border border-accent shadow-lg w-60 mb-8 text-center">
                            <AlertTriangle className="text-accent mx-auto mb-2" size={20}/>
                            <h3 className="text-base font-semibold mb-1">Risk Assessment</h3>
                            <p className="text-xs text-gray-400">All security criteria met?</p>

                            {/* Yes/No Branches */}
                            <div className="flex justify-between mt-4">
                                <div className="flex flex-col items-center">
                                    <p className="text-xs text-green-400">Yes</p>
                                    <div className="h-8 w-px bg-green-500 mt-1"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-xs text-red-400">No</p>
                                    <div className="h-8 w-px bg-red-500 mt-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Final Nodes */}
                        <div className="flex justify-between w-80">
                            <div
                                className="p-3 bg-green-500 bg-opacity-20 rounded-lg border border-green-500 text-center w-32">
                                <Check className="text-green-400 mx-auto mb-1" size={16}/>
                                <p className="text-xs font-medium">Proceed with Trade</p>
                            </div>
                            <div
                                className="p-3 bg-red-500 bg-opacity-20 rounded-lg border border-red-500 text-center w-32">
                                <AlertTriangle className="text-red-400 mx-auto mb-1" size={16}/>
                                <p className="text-xs font-medium">Reject Trade</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h2>Bot Architecture</h2>
                <p>This diagram shows how the trading bot components interact with the Solana blockchain and implement
                    accountability measures.</p>

                {/* Architecture Diagram */}
                <div className="relative h-[500px] mt-6 bg-gray-900 rounded-lg p-4 overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10">
                        {Array(12 * 6).fill(0).map((_, i) => (
                            <div key={i} className="border border-blue-500"></div>
                        ))}
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                        <ConnectionLine x1={200} y1={140} x2={350} y2={140} dashed={true}/>
                        <ConnectionLine x1={600} y1={140} x2={450} y2={140} dashed={true}/>
                        <ConnectionLine x1={400} y1={190} x2={400} y2={240}/>
                        <ConnectionLine x1={400} y1={310} x2={400} y2={360}/>
                        <ConnectionLine x1={400} y1={90} x2={400} y2={40} color="#ff006e"/>
                        <ConnectionLine x1={250} y1={40} x2={120} y2={40} color="#ff006e" dashed={true}/>
                        <ConnectionLine x1={550} y1={40} x2={680} y2={40} color="#ff006e" dashed={true}/>
                    </svg>

                    {/* Architectural Components */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Accountability Layer */}
                        <div className="mb-6 w-full flex justify-center">
                            <div className="flex">
                                {/* Real-time Monitoring */}
                                <ArchBox
                                    icon={<Activity className="text-purple-400" size={24}/>}
                                    title="Real-time Monitoring"
                                    description="Performance metrics and alerts for suspicious activity"
                                    borderColor="border-purple-500"
                                    className="mx-3 w-64"
                                />

                                {/* Accountability Framework */}
                                <ArchBox
                                    icon={<Shield className="text-accent" size={24}/>}
                                    title="Accountability Framework"
                                    description="Cornell's 'Holding Bots Accountable' principles"
                                    borderColor="border-accent"
                                    className="mx-3 w-64"
                                />

                                {/* Audit Logs */}
                                <ArchBox
                                    icon={<FileText className="text-purple-400" size={24}/>}
                                    title="Audit Logs"
                                    description="Immutable transaction history and decisions"
                                    borderColor="border-purple-500"
                                    className="mx-3 w-64"
                                />
                            </div>
                        </div>

                        {/* Core Bot Engine */}
                        <ArchBox
                            icon={<Cpu className="text-primary" size={24}/>}
                            title="Core Bot Engine"
                            description="Decision-making and trade execution"
                            borderColor="border-primary"
                            className="w-96 mb-6"
                        />

                        {/* Blockchain & UI Layer */}
                        <div className="w-full flex justify-center mb-6">
                            <div className="flex">
                                {/* Blockchain Integration */}
                                <ArchBox
                                    icon={<Search className="text-green-400" size={24}/>}
                                    title="Blockchain Integration"
                                    description="Solana network interaction"
                                    borderColor="border-green-500"
                                    className="mx-3 w-64"
                                />

                                {/* User Interface */}
                                <ArchBox
                                    icon={<Terminal className="text-green-400" size={24}/>}
                                    title="User Interface"
                                    description="Control panel and reports"
                                    borderColor="border-green-500"
                                    className="mx-3 w-64"
                                />
                            </div>
                        </div>

                        {/* Data Analysis Layer */}
                        <ArchBox
                            icon={<BarChart2 className="text-blue-400" size={24}/>}
                            title="Data Analysis Layer"
                            description="Market pattern recognition and risk calculation"
                            borderColor="border-blue-500"
                            className="w-96 mb-6"
                        />

                        {/* Security Layer */}
                        <ArchBox
                            icon={<Lock className="text-yellow-400" size={24}/>}
                            title="Security Layer"
                            description="Rug pull detection and trade verification"
                            borderColor="border-yellow-500"
                            className="w-96"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visuals;