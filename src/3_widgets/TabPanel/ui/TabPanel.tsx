import { classNames } from '6_shared/lib/classNames/ClassNames';
import { Tabs } from '6_shared/ui/Tabs/Tabs';
import { UsersTable } from '5_entities/UsersTable';
import { EnterTopic } from '4_features/EnterTopic';
import { GeneralStructure } from '4_features/GeneralStructure';
import { GeneralInformation } from '4_features/GeneralInformation';
import { SettingGoals } from '4_features/SettingGoals';
import cls from './TabPanel.module.css';
interface TabPanelProps {
	className?: string;
}

export const TabPanel = (props: TabPanelProps) => {
	const { className } = props;
	const tabs = []

	tabs.push({ label: `Тестовая вкладка`, content:  <UsersTable /> })
	tabs.push({ label: `Ввод тем`, content:  <EnterTopic />})
	tabs.push({ label: `Общая структура`, content:  <GeneralStructure />})
	tabs.push({ label: `Общие сведения`, content:  <GeneralInformation />})
	tabs.push({ label: `Установка целей`, content:  <SettingGoals />})

	return (
 		<Tabs className={cls.tabPanel} tabs={tabs} />
 	);
}