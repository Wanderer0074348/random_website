'use client';

import { useEffect, useState } from 'react';

const TerminalHero = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    browser: 'Loading...',
    os: 'Loading...',
    deviceType: 'Loading...',
    platform: 'Loading...',
    resolution: 'Loading...',
    language: 'Loading...',
    cores: 'Loading...',
    memory: 'Loading...',
    userAgent: 'Loading...',
    cookies: 'Loading...',
    javascript: 'Loading...',
    timezone: 'Loading...'
  });

  // Smaller penguin ASCII art
  const asciiArt = [
    "              a8888b.",
    "             d888888b.",
    "             8P\"YP\"Y88",
    "             8|o||o|88",
    "             8'    .88",
    "             8`._.' Y8.",
    "            d/      `8b.",
    "           dP   .    Y8b.",
    "          d8:'  \"  `::88b",
    "         d8\"         'Y88b",
    "        :8P    '      :888",
    "         8a.   :     _a88P",
    "       ._/\"Yaa_:   .| 88P|",
    "       \\    YP\"    `| 8P  `.",
    "       /     \\.___.d|    .'",
    "       `--..__)8888P`._.'",
  ];

  useEffect(() => {
    // Get browser info
    const getBrowser = () => {
      const userAgent = window.navigator.userAgent;
      let browserName;
      if (userAgent.match(/chrome|chromium|crios/i)) browserName = "Chrome";
      else if (userAgent.match(/firefox|fxios/i)) browserName = "Firefox";
      else if (userAgent.match(/safari/i)) browserName = "Safari";
      else if (userAgent.match(/opr\//i)) browserName = "Opera";
      else if (userAgent.match(/edg/i)) browserName = "Edge";
      else browserName = "Unknown";
      
      const version = userAgent.match(/(version|chrome|firefox|safari|opr|edge|edg)\/?\s*(\d+)/i);
      return `${browserName} ${version ? version[2] : ''}`;
    };

    // Get OS info
    const getOS = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes('Win')) return 'Windows';
      if (userAgent.includes('Mac')) return 'MacOS';
      if (userAgent.includes('Linux')) return 'Linux';
      if (userAgent.includes('Android')) return 'Android';
      if (userAgent.includes('iOS')) return 'iOS';
      return 'Unknown OS';
    };

    // Get device type
    const getDeviceType = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
        ? 'Mobile'
        : 'Desktop';
    };

    // Update device info
    if (typeof window !== 'undefined') {
      setDeviceInfo({
        browser: getBrowser(),
        os: getOS(),
        deviceType: getDeviceType(),
        platform: window.navigator.platform,
        resolution: `${window.screen.width}x${window.screen.height}`,
        language: window.navigator.language,
        cores: window.navigator.hardwareConcurrency || 'Unknown',
        memory: window.navigator.deviceMemory ? `${window.navigator.deviceMemory}GB` : 'Unknown',
        userAgent: window.navigator.userAgent.split('/')[0],
        cookies: window.navigator.cookieEnabled ? "Enabled" : "Disabled",
        javascript: "Enabled",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    }

    setVisible(true);
  }, []);

  const systemInfo = [
    { label: "Browser", value: deviceInfo.browser },
    { label: "OS", value: deviceInfo.os },
    { label: "Device", value: deviceInfo.deviceType },
    { label: "Platform", value: deviceInfo.platform },
    { label: "Resolution", value: deviceInfo.resolution },
    { label: "Language", value: deviceInfo.language },
    { label: "Time Zone", value: deviceInfo.timezone }
  ];

  return (
    <div className="w-full flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-8 relative">
        {/* Terminal Column */}
        <div 
          className={`w-full lg:w-1/2 backdrop-blur-sm bg-black/30 rounded-lg border border-ubuntu 
            transition-all duration-500 transform hover:shadow-[0_0_15px_rgba(233,84,32,0.3)]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="p-4 md:p-8 relative">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 bg-black/40 rounded-t-lg p-3">
              <div className="w-3 h-3 rounded-full bg-[#FF605C] hover:brightness-110 transition-all"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD44] hover:brightness-110 transition-all"></div>
              <div className="w-3 h-3 rounded-full bg-[#00CA4E] hover:brightness-110 transition-all"></div>
              <span className="ml-2 text-white/60 text-sm font-mono">terminal@user: ~</span>
            </div>

            {/* Command Prompt with Typing Effect */}
            <div className="mb-6 font-mono text-white/60 flex items-center">
              <span className="text-ubuntu mr-2">$</span>
              <span className="typing-animation">neofetch</span>
            </div>

            {/* Terminal Content */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
              {/* ASCII Art with Glow Effect */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-ubuntu/20 to-transparent 
                  rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative font-mono text-ubuntu whitespace-pre text-xs md:text-sm">
                  <pre className="leading-[1.15] overflow-x-auto scrollbar-thin scrollbar-thumb-ubuntu/30">
                    {asciiArt.map((line, index) => (
                      <div 
                        key={index} 
                        className={`transition-all duration-500 delay-${index * 50} hover:text-white`}
                      >
                        {line}
                      </div>
                    ))}
                  </pre>
                </div>
              </div>

              {/* System Information with Hover Effects */}
              <div className="font-mono text-white/80 flex flex-col justify-center space-y-2">
                {systemInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-300 flex items-center gap-3 p-2 rounded-lg
                      hover:bg-white/5 ${isHovered ? 'hover:translate-x-1' : ''}`}
                  >
                    <span className="text-ubuntu w-24 md:w-28 flex items-center">
                      <span className="w-2 h-2 bg-ubuntu rounded-full mr-2 opacity-75"></span>
                      {info.label}
                    </span>
                    <span className="text-white/80 break-all">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Club Info Column */}
        <div 
          className={`w-full lg:w-1/2 backdrop-blur-sm bg-black/30 rounded-lg border border-ubuntu 
            transition-all duration-500 transform hover:shadow-[0_0_15px_rgba(233,84,32,0.3)]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="p-4 md:p-8 flex flex-col justify-center h-full relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-ubuntu/20 via-transparent to-ubuntu/20" />
              <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px]" />
            </div>

            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-mono 
                transform transition-all duration-300 hover:scale-105">
                We are
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ubuntu mb-6 font-mono 
                transform transition-all duration-300 hover:scale-105">
                Linux Users Group
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-mono leading-relaxed 
                border-l-2 border-ubuntu pl-4">
                Empowering open-source innovation through community collaboration and knowledge sharing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
