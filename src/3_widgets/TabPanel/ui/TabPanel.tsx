import { classNames } from '6_shared/lib/classNames/ClassNames';
import './TabPanel.css';
import { useState } from 'react';

interface Tab {
	label: string,
	content: React.ReactNode,
}

interface TabPanelProps {
	className?: string;
	tabs: Tab[] ////////////////////////////////
}

export const TabPanel: React.FC<TabPanelProps> = (props) => {
	const { className, tabs } = props;
	const [activeTab, setActiveTab] = useState(tabs[0].label);

	const handleTabClick = (label: string) => {
		setActiveTab(label);
	};

	return (
		<div className="tabs">
			<div className="tab-list">
				{tabs.map((tab) => (
					<button
						key={tab.label}
						className={`tab ${tab.label === activeTab ? 'active' : ''}`}
						onClick={() => handleTabClick(tab.label)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="tab-content">
				{tabs.map((tab) => (
					<div
						key={tab.label}
						className={`tab-panel ${tab.label === activeTab ? 'active' : ''}`}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}