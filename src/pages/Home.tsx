import React from 'react';
import { Link } from 'react-router-dom';
import {
    Shield,
    CheckCircle,
    BarChart2,
    Eye,
    ArrowRight,
    Book,
} from 'lucide-react';

function Github({ size, className }: { size: number, className: string }) {
    return (
        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.273 9.5 21.006C9.5 20.719 9.5 20.142 9.5 19.274C6.736 19.869 6.139 17.857 6.139 17.857C5.685 16.701 5.028 16.392 5.028 16.392C4.132 15.779 5.095 15.792 5.095 15.792C6.092 15.864 6.616 16.818 6.616 16.818C7.5 18.356 8.976 17.905 9.52 17.638C9.628 16.982 9.859 16.532 10.109 16.292C7.897 16.052 5.57 15.173 5.57 11.477C5.57 10.387 5.967 9.483 6.636 8.756C6.549 8.502 6.195 7.533 6.736 6.154C6.736 6.154 7.57 5.882 9.5 7.177C10.294 6.955 11.152 6.844 12 6.84C12.848 6.844 13.707 6.955 14.5 7.177C16.43 5.882 17.263 6.154 17.263 6.154C17.805 7.533 17.451 8.502 17.364 8.756C18.033 9.483 18.43 10.387 18.43 11.477C18.43 15.186 16.099 16.05 13.879 16.283C14.19 16.577 14.5 17.171 14.5 18.065C14.5 19.345 14.5 20.629 14.5 21.006C14.5 21.275 14.66 21.587 15.167 21.489C19.137 20.164 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
        </svg>
    );
}

const Home: React.FC = () => {
    return (
        <div className="content-container">
            {/* Updated main title with custom styling */}
            <div className="text-center mb-6">
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(90deg, #3a86ff, #8338ec)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    padding: '0.5rem 0'
                }}>
                    Sniping with Integrity:
                </h1>
                <h2 style={{
                    textAlign: 'center',
                    color: '#a0aec0',
                    fontSize: '1.5rem',
                    fontWeight: 'medium',
                    marginBottom: '1.5rem'
                }}>
                    A Deliberation on Governance and Accountability for Solana-Based Crypto Trading Bots
                </h2>
            </div>

          
            {/* My Blockchain Development Story */}
            <div className="card mb-8">
                <h2 className="flex items-center">
                    <Book className="mr-2 text-blue-400" size={24} />
                    My Blockchain Development Journey
                </h2>
                <p className="mb-4">
                    My journey into blockchain development began with a fascination for decentralized finance and the potential for creating more transparent, accessible financial systems. The Solana ecosystem, with its high performance and low transaction costs, presented an ideal environment to explore these possibilities.
                </p>
                <p className="mb-4">
                    I was particularly drawn to the challenge of creating trading bots that could operate ethically in a space often plagued by scams and market manipulation. The fast-paced nature of Solana token launches creates opportunities for automated trading, but also raises important questions about responsibility and accountability.
                </p>
                <p className="mb-4">
                    This project represents the culmination of my exploration into how we can apply ethical frameworks to automated trading systems. By implementing Cornell University's "Holding Bots Accountable" framework, I've created a trading bot that not only performs effectively but does so with transparency and user protection at its core.
                </p>
                <p>
                    The code for this project is available on GitHub, where you can explore the technical implementation of these ethical principles in a working trading bot for the Solana ecosystem.
                </p>
                <p style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#4A90E2',
                    backgroundColor: '#1C1F26',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    textAlign: 'center'
                }}>
                    Note: Parts of this web application were developed using JetBrains Rider with AI assistance to
                    support debugging, UI scaffolding, and code optimization.
                </p>
                
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://github.com/mohama56/Blockchain_Trading_Bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button flex items-center"
                    >
                        <Github size={18} className="mr-2" /> View Trading Bot Repository
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="card hover:border-blue-500 transition-all">
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg mr-4">
                            <Shield className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Rug Pull Protection</h3>
                    </div>
                    <p className="text-gray-400">
                        Our bot automatically detects potential scam tokens by analyzing mint authority,
                        liquidity, contract code, and ownership distribution before executing trades.
                    </p>
                    <Link to="/rug-check" className="flex items-center mt-4 text-blue-400 hover:text-blue-300">
                        Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="card hover:border-blue-500 transition-all">
                    <div className="flex items-center mb-4">
                        <div className="bg-purple-500 bg-opacity-20 p-3 rounded-lg mr-4">
                            <Eye className="text-purple-400" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Deliberation Guide - Managerial Reporting</h3>
                    </div>
                    <p className="text-gray-400">
                        Instead of just executing trades, my bot now gives reasons and context — a direct result of applying my learning into ethical bot design.
                    </p>
                    <Link to="/deliberation" className="flex items-center mt-4 text-blue-400 hover:text-blue-300">
                        Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="card hover:border-blue-500 transition-all">
                    <div className="flex items-center mb-4">
                        <div className="bg-green-500 bg-opacity-20 p-3 rounded-lg mr-4">
                            <BarChart2 className="text-green-400" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold">Performance Tracking</h3>
                    </div>
                    <p className="text-gray-400">
                        Advanced analytics and reporting help you understand bot performance with
                        transparent metrics on execution quality and risk management.
                    </p>
                    <Link to="/visuals" className="flex items-center mt-4 text-blue-400 hover:text-blue-300">
                        Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>

            {/* Crypto Terms Section */}
            <div className="card mb-8">
                <h2>Understanding Crypto Safety</h2>
                <p className="mb-6">
                    Navigating the crypto space safely requires understanding key terminology and security concepts.
                    Our ethical trading bot applies these principles to protect users from common risks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <h3 className="text-lg font-medium mb-2">Mint Authority</h3>
                        <p className="text-sm text-gray-400">
                            The ability to create new tokens in a cryptocurrency. When active, creators can mint
                            additional tokens, potentially diluting value. Our bot verifies this status.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <h3 className="text-lg font-medium mb-2">Rug Pull</h3>
                        <p className="text-sm text-gray-400">
                            A crypto scam where developers abandon a project and run away with investor funds,
                            often after artificially inflating the token's price. Our detection prevents these losses.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <h3 className="text-lg font-medium mb-2">Liquidity Pool</h3>
                        <p className="text-sm text-gray-400">
                            A collection of funds locked in a smart contract, used to facilitate trading.
                            Our bot analyzes the size and stability of these pools to ensure fair trading.
                        </p>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/definitions" className="px-4 py-2 bg-blue-500 bg-opacity-20 rounded-md text-blue-400 hover:bg-opacity-30 transition-all">
                        View All Terminology
                    </Link>
                </div>
            </div>

            {/* Framework Callout */}
            <div className="card bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 md:pr-8">
                        <h2>Ethical AI Governance</h2>
                        <p className="mb-4">
                            This project implements Cornell University's BANA 6020 "Holding Bots Accountable" framework
                            to create responsible, transparent automated trading systems that prioritize user
                            safety and ethical market participation.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 mr-2" size={16} />
                                <span>Role-based accountability with clear obligations</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 mr-2" size={16} />
                                <span>External monitoring and internal safeguards</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 mr-2" size={16} />
                                <span>Explainable decisions with transparent reporting</span>
                            </li>
                        </ul>
                        <Link to="/deliberation" className="button">
                            Explore Accountability Framework
                        </Link>
                    </div>

                    <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
                        <div className="relative p-4 bg-blue-500 bg-opacity-5 rounded-lg border border-blue-500">
                            <Shield className="text-blue-400 mx-auto" size={80} />
                            <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-green-500 bg-opacity-20 p-1 rounded-full border border-green-500">
                                <CheckCircle className="text-green-500" size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Information */}
            <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
                <div className="text-center">
                    <h3 className="text-xl font-medium mb-2">Alamin Mohammed</h3>
                    <p className="text-gray-400 mb-1">Professor Robert Bloomfield</p>
                    <p className="text-gray-400">BANA6020 Managerial Reporting in Business Analytics</p>
                </div>
            </div>
        </div>
    );
};

export default Home;