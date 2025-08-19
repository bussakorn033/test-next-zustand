import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { TabsProps } from './Tabs.types';
import * as S from './Tabs.styled';
import classNames from 'classnames';

const Tabs: React.FC<TabsProps> = ({
	className,
	tabsName,
	activeTab,
	menu,
	onChange,
	variant = 'default'
}) => {
	const classnames = classNames(className, 'ds-ui-tabs');
	const [underline, setUnderline] = useState({ left: 0, width: 0 });
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

	useEffect(() => {
		const updateUnderline = () => {
			const currentTab = tabRefs.current[activeTab];
			if (currentTab) {
				setUnderline({
					left: currentTab.offsetLeft,
					width: currentTab.offsetWidth
				});
			}
		};
		updateUnderline();

		let rafId: number | null = null;
		const handleResize = () => {
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
			rafId = requestAnimationFrame(updateUnderline);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			if (rafId !== null) {
				cancelAnimationFrame(rafId);
			}
		};
	}, [activeTab, menu]);

	const activeContent = menu.find((tab) => tab?.value === activeTab);

	return variant === 'default' ? (
		<Box className={classnames}>
			<S.TabContainer>
				{tabsName && <TextStyle variant='paragraphSmall'>{tabsName}</TextStyle>}
				<Box>
					{menu.map((tab) => (
						<S.TabButton
							data-testid={tab?.id}
							key={tab?.value}
							ref={(el) => {
								if (tab?.value !== undefined) {
									if (tab?.value !== undefined) {
										tabRefs.current[tab?.value] = el;
									}
								}
							}}
							$active={tab?.value === activeTab}
							$cursor={tab?.value ? 'pointer' : 'default'}
							onClick={() => (tab?.value ? onChange?.(tab?.value) : undefined)}
						>
							<TextStyle variant='h6'>{tab?.label}</TextStyle>
						</S.TabButton>
					))}
				</Box>
				<S.Underline left={underline.left} width={underline.width} />
			</S.TabContainer>

			{activeContent && <S.TabPanel key={activeContent.value}>{activeContent.content}</S.TabPanel>}
		</Box>
	) : (
		<Box className={classnames} width='100%'>
			<S.TabContainerSpaceBetween>
				{tabsName && <TextStyle variant='paragraphSmall'>{tabsName}</TextStyle>}
				<Box display='flex' direction='row' $alignItems='center' flex={1}>
					{menu.map((tab) => (
						<S.TabButtonSpaceBetween
							data-testid={tab?.id}
							key={tab?.value}
							ref={(el) => {
								if (tab?.value !== undefined) {
									tabRefs.current[tab?.value] = el;
								}
							}}
							$active={tab?.value === activeTab}
							$cursor={tab?.value ? 'pointer' : 'default'}
							onClick={() => (tab?.value ? onChange?.(tab?.value) : undefined)}
						>
							<TextStyle variant='h6' $textAlign='center'>
								{tab?.label}
							</TextStyle>
						</S.TabButtonSpaceBetween>
					))}
				</Box>
				<S.Underline left={underline.left} width={underline.width} />
			</S.TabContainerSpaceBetween>

			{activeContent && <S.TabPanel key={activeContent.value}>{activeContent.content}</S.TabPanel>}
		</Box>
	);
};

export default Tabs;
