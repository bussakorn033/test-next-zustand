import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Box } from '../../shared-components/Box';
import { Icon } from '../../shared-components/Icon';
import { TextStyle } from '../../shared-components/TextStyle';

interface EmptyDisplay {
	className?: string;
}

const EmptyDisplay = ({ className }: EmptyDisplay) => {
	const { t } = useTranslation();
	const classnames = classNames(className, 'components-empty-display');
	return (
		<Box className={classnames} direction='column' $alignItems='center' gap={24}>
			<Box direction='column' $alignItems='center' gap={16}>
				<Icon
					data-testid={'ICON_EMPTY_BOX'}
					icon={'empty_box'}
					color={'--color-toast-empty'}
					width={56}
					height={56}
				/>
				<Box direction='column' gap={8} $alignItems='center'>
					<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
						{t('component_empty_display_title')}
					</TextStyle>
				</Box>
			</Box>
		</Box>
	);
};

export default EmptyDisplay;
