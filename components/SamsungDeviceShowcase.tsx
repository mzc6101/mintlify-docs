import React, { useState } from 'react';

interface Device {
  id: string;
  name: string;
  image: string;
  specs: {
    display: string;
    processor: string;
    memory: string;
    camera: string;
  };
  sdks: string[];
}

const devices: Device[] = [
  {
    id: 'galaxy-s24',
    name: 'Galaxy S24 Ultra',
    image: '📱',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      memory: '12GB RAM, 1TB Storage',
      camera: '200MP Main + 50MP Telephoto'
    },
    sdks: ['Galaxy AI SDK', 'S Pen SDK', 'Camera SDK', 'Samsung Health SDK']
  },
  {
    id: 'galaxy-watch',
    name: 'Galaxy Watch7',
    image: '⌚',
    specs: {
      display: '1.5" Super AMOLED',
      processor: 'Exynos W1000',
      memory: '2GB RAM, 32GB Storage',
      camera: 'Health Sensors'
    },
    sdks: ['Health SDK', 'Watch Face SDK', 'Fitness SDK', 'Voice SDK']
  },
  {
    id: 'galaxy-buds',
    name: 'Galaxy Buds3 Pro',
    image: '🎧',
    specs: {
      display: 'LED Status Indicator',
      processor: 'Dual-core Audio Processor',
      memory: '512MB Internal',
      camera: 'Proximity Sensors'
    },
    sdks: ['Audio SDK', 'Voice SDK', 'SmartThings SDK', 'AI SDK']
  }
];

export default function SamsungDeviceShowcase() {
  const [selectedDevice, setSelectedDevice] = useState<Device>(devices[0]);
  const [activeTab, setActiveTab] = useState<'specs' | 'sdks'>('specs');

  return (
    <div className="samsung-showcase">
      <style jsx>{`
        .samsung-showcase {
          background: linear-gradient(135deg, #1428A0 0%, #4A6CF7 100%);
          border-radius: 16px;
          padding: 2rem;
          color: white;
          margin: 2rem 0;
          box-shadow: 0 20px 40px rgba(20, 40, 160, 0.2);
        }
        
        .device-selector {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .device-card {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          min-width: 150px;
          backdrop-filter: blur(10px);
        }
        
        .device-card:hover {
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .device-card.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: #fff;
        }
        
        .device-emoji {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .device-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .device-details {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }
        
        .device-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .device-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #fff, #E0E7FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .device-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }
        
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        
        .tab {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 25px;
          padding: 0.7rem 1.5rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .tab:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .tab.active {
          background: white;
          color: #1428A0;
          font-weight: 600;
        }
        
        .content {
          min-height: 200px;
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .spec-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          border-left: 4px solid #4A6CF7;
        }
        
        .spec-label {
          font-weight: 600;
          color: #E0E7FF;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }
        
        .spec-value {
          font-size: 1rem;
          font-weight: 500;
        }
        
        .sdk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        
        .sdk-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .sdk-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .sdk-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .sdk-badge {
          background: #4A6CF7;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .samsung-showcase {
            padding: 1.5rem;
          }
          
          .device-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .device-card {
            width: 100%;
            max-width: 300px;
          }
          
          .specs-grid,
          .sdk-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="device-selector">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`device-card ${selectedDevice.id === device.id ? 'active' : ''}`}
            onClick={() => setSelectedDevice(device)}
          >
            <span className="device-emoji">{device.image}</span>
            <div className="device-name">{device.name}</div>
          </div>
        ))}
      </div>

      <div className="device-details">
        <div className="device-header">
          <span className="device-icon">{selectedDevice.image}</span>
          <h3 className="device-title">{selectedDevice.name}</h3>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            Device Specs
          </button>
          <button
            className={`tab ${activeTab === 'sdks' ? 'active' : ''}`}
            onClick={() => setActiveTab('sdks')}
          >
            Available SDKs
          </button>
        </div>

        <div className="content">
          {activeTab === 'specs' && (
            <div className="specs-grid">
              {Object.entries(selectedDevice.specs).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <div className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="spec-value">{value}</div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sdks' && (
            <div className="sdk-grid">
              {selectedDevice.sdks.map((sdk) => (
                <div key={sdk} className="sdk-item">
                  <div className="sdk-name">{sdk}</div>
                  <div className="sdk-badge">Available</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
