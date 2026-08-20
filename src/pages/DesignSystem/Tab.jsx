import { useState } from 'react';

export default function Tab() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div className="bg-surface-container rounded-xl p-cell-padding border-2 border-surface-variant">
      <div className="flex border-b-2 border-surface-variant">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-label-bold text-label-bold ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
