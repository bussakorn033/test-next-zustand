import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { TabsProps } from './Tabs.types';
import * as S from './Tabs.styled';

const Tabs: React.FC<TabsProps> = ({ tabsName, activeTab, menu, onChange }) => {
	const [underline, setUnderline] = useState({ left: 0, width: 0 });
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

	useEffect(() => {
		const currentTab = tabRefs.current[activeTab];
		if (currentTab) {
			setUnderline({
				left: currentTab.offsetLeft,
				width: currentTab.offsetWidth
			});
		}
	}, [activeTab, menu]);

	const activeContent = menu.find((tab) => tab.value === activeTab);

	return (
		<Box>
			<S.TabContainer>
				{tabsName && <TextStyle variant='paragraphSmall'>{tabsName}</TextStyle>}
				<Box>
					{menu.map((tab) => (
						<S.TabButton
							key={tab.value}
							ref={(el) => {
								tabRefs.current[tab.value] = el;
							}}
							active={tab.value === activeTab}
							onClick={() => onChange?.(tab.value)}
						>
							<TextStyle variant='h6'>{tab.label}</TextStyle>
						</S.TabButton>
					))}
				</Box>
				<S.Underline left={underline.left} width={underline.width} />
			</S.TabContainer>

			{activeContent && <S.TabPanel key={activeContent.value}>{activeContent.content}</S.TabPanel>}
		</Box>
	);
};

export default Tabs;
