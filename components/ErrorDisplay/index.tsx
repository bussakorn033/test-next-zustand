import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
// import { useActivityLog } from 'host/use-activity-log';
import { Box } from '../../shared-components/Box';
import { Button } from '../../shared-components/Button';
import { Icon } from '../../shared-components/Icon';
import { TextStyle } from '../../shared-components/TextStyle';

interface ErrorDisplay {
	className?: string;
	moduleName?: string;
	onRefresh?: () => void;
}

const ErrorDisplay = ({ className, moduleName, onRefresh = undefined }: ErrorDisplay) => {
	const { t } = useTranslation();
	// const { writeActlog } = useActivityLog();
	const classnames = classNames(className, 'components-error-display');

	const handleRefresh = () => {
		if (moduleName) {
			// writeActlog('1000001', 'Refresh', [
			// 	{
			// 		flex: 'Module',
			// 		value: moduleName
			// 	}
			// ]);
		}
		if (onRefresh) {
			onRefresh();
		}
	};

	return (
		<Box className={classnames} direction='column' $alignItems='center' gap={24}>
			<Box direction='column' $alignItems='center' gap={16}>
				<Icon
					data-testid={'ICON_ALERT_CIRCLE'}
					icon={'alert_circle'}
					color={'--color-toast-error'}
					width={48}
					height={48}
				/>
				<Box direction='column' gap={8} $alignItems='center'>
					<TextStyle variant='h5' color='--color-primary' $textAlign='center'>
						{t('component_error_display_title')}
					</TextStyle>
					<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
						{t('component_error_display_sub_title')}
					</TextStyle>
				</Box>
			</Box>
			{typeof onRefresh === 'function' && (
				<Button
					data-testid='BUTTON_ERROR_DISPLAY_REFRESH'
					variant='ghost-primary'
					onClick={handleRefresh}
				>
					<TextStyle variant='labelMedium' tag='span'>
						{t('component_error_display_action_refresh')}
					</TextStyle>
				</Button>
			)}
		</Box>
	);
};

export default ErrorDisplay;
