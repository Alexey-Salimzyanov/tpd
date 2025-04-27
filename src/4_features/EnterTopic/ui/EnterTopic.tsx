import { classNames } from '6_shared/lib/classNames/ClassNames';
import { ShowTopicsSelection } from './ShowTopicsSelection/ShowTopicsSelection';
import { HoursForDistributionTable } from './HoursForDistributionTable/HoursForDistributionTable';
import { TopicTable } from './TopicTable/TopicTable';

interface EnterTopicProps {
	className?: string;
}

export const EnterTopic = (props: EnterTopicProps) => {
	const { className } = props;

	return (
		<div >
			<div style={{display: 'flex', gap: '5px'}}>
				<ShowTopicsSelection/>
				<HoursForDistributionTable/>
			</div>
			<TopicTable/>
		</div>
 );
}