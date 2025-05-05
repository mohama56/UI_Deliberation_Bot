import * as React from 'react';

import delib1 from '../assets/Delib1.png';
import delib23 from '../assets/Delib2&3.png';
import delib34 from '../assets/Delib3&4.png';
import delib56 from '../assets/Delib5&6.png';


const Deliberation: React.FC = () => {
    return (
        <div className="content-container">
            <h1>Accountability Framework</h1>
            <p className="mb-6">
                Our trading bot implements Cornell's "Holding Bots Accountable" framework through
                a comprehensive approach to ethical and responsible automation.
            </p>

            {/* Cornell Deliberation Framework Images */}
            <div className="card mb-8">
                <h2 className="mb-6 text-2xl font-bold text-blue-400">Cornell Deliberation Framework</h2>

                <div className="space-y-8">
                    {/* Image 1 */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <img
                            src={delib1}
                            alt="Cornell Deliberation Framework - Part 1"
                            className="w-full rounded-lg shadow-lg"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <img
                            src={delib23}
                            alt="Cornell Deliberation Framework - Parts 2 & 3"
                            className="w-full rounded-lg shadow-lg"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <img
                            src={delib34}
                            alt="Cornell Deliberation Framework - Parts 3 & 4"
                            className="w-full rounded-lg shadow-lg"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <img
                            src={delib56}
                            alt="Cornell Deliberation Framework - Parts 5 & 6"
                            className="w-full rounded-lg shadow-lg"
                            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Cornell University's "Holding Bots Accountable" Framework
                </p>
            </div>
        </div>
    );
};

export default Deliberation;