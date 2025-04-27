import { classNames } from '6_shared/lib/classNames/ClassNames';
import { useState } from 'react';
import cls from './Tabs.module.css';

interface Tab {
	label: string,
	content: React.ReactNode,
}

interface TabsProps {
	className?: string;
	tabs: Tab[] //
}

export const Tabs: React.FC<TabsProps> = (props) => {
	const { className, tabs } = props;
	const [activeTab, setActiveTab] = useState(tabs[0].label);

	const handleTabClick = (label: string) => {
		setActiveTab(label);
	};

	return (
		<div className={cls.tabs}>
			<div className={classNames(cls['tab-list'],{},[className])} >
				{tabs.map((tab) => (
					<button
						key={tab.label}
						className={classNames(cls.tab,{[cls.active]:tab.label === activeTab},[])}
						onClick={() => handleTabClick(tab.label)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className={cls['tab-content']}>
				{tabs.map((tab) => (
					<div
						key={tab.label}
						className={classNames(cls['tab-panel'],{[cls.active]:tab.label === activeTab},[])}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}