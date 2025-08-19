import { DayPicker, MonthGrid, MonthGridProps, useDayPicker } from 'react-day-picker';
import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import { Icon } from '@/shared-components/Icon';
import { calendarCss } from './DatePicker.styled';
import { Button } from '@/shared-components/Button';
import { useState } from 'react';
import useCustomTranslation from '@/hooks/useCustomTranslation';

type DatePickerProps = {
	value?: Date;
	onChange?: (date: Date | undefined) => void;
	onClose?: () => void;
};

const CustomMonthGrid = (
	props: MonthGridProps,
	{
		isClickMonth,
		isClickYear,
		setClickMonthAndYear,
		currentMonth,
		startMonth,
		renderMonth,
		setRenderMonth
	}: {
		isClickMonth: boolean;
		isClickYear: boolean;
		setClickMonthAndYear: (month: boolean, year: boolean) => void;
		currentMonth: Date;
		startMonth: Date;
		renderMonth: Date;
		setRenderMonth: (date: Date) => void;
	}
) => {
	const { goToMonth } = useDayPicker();

	const month = currentMonth.getMonth();
	const year = currentMonth.getFullYear();

	const yearsList = Array.from({ length: 15 }, (_, i) => startMonth.getFullYear() + i);
	const monthsList = Array.from({ length: 12 }, (_, i) => i);

	return isClickMonth ? (
		<Box display='grid' column={3} gap={16} width={308} $alignItems='center' $justifyContent='center'>
			{monthsList.map((m) => (
				<Button
					key={m}
					onClick={() => {
						goToMonth(new Date(year, m));
						setRenderMonth(new Date(year, m));
						setClickMonthAndYear(false, false);
					}}
					variant={renderMonth.getMonth() === m ? 'primary-no-padding' : 'ghost-main-no-padding'}
					$borderRadius='md'
					sizeIcon={24}
					colorIcon='--color-primary'
					style={{
						height: '100%',
						width: '100%',
						alignSelf: 'center',
						padding: '4px !important'
					}}
				>
					<TextStyle variant='labelMedium' color='--text-primary-dark'>
						{new Date(year, m).toLocaleString('th-TH', { month: 'long' })}
					</TextStyle>
				</Button>
			))}
		</Box>
	) : isClickYear ? (
		<Box display='grid' column={3} gap={16} width={308} $alignItems='center' $justifyContent='center'>
			{yearsList.map((y) => (
				<Button
					key={y}
					onClick={() => {
						goToMonth(new Date(y, month));
						setRenderMonth(new Date(y, month));
						setClickMonthAndYear(false, false);
					}}
					variant={renderMonth.getFullYear() === y ? 'primary-no-padding' : 'ghost-main-no-padding'}
					$borderRadius='md'
					sizeIcon={24}
					colorIcon='--color-primary'
					style={{
						height: '100%',
						width: '100%',
						alignSelf: 'center',
						padding: '4px !important'
					}}
				>
					<TextStyle variant='labelMedium' color='--text-primary-dark'>
						{y + 543}
					</TextStyle>
				</Button>
			))}
		</Box>
	) : (
		<MonthGrid {...props} />
	);
};

const CustomMonthsDropdown = ({
	currentMonth,
	setClickMonthAndYear,
	isClickMonth
}: {
	currentMonth: Date;
	setClickMonthAndYear: (month: boolean, year: boolean) => void;
	isClickMonth: boolean;
}) => {
	return (
		<Box height={32} $zIndex={1000} $alignItems='center'>
			<Button
				variant={'ghost-main-no-padding'}
				$borderRadius='md'
				iconRight='arrow_down'
				sizeIcon={24}
				colorIcon='--color-primary'
				style={{ height: '100%', alignSelf: 'center', padding: '4px !important' }}
				onClick={() => {
					setClickMonthAndYear(!isClickMonth, false);
				}}
			>
				<TextStyle variant='labelMedium' color='--text-primary-dark'>
					{currentMonth.toLocaleString('th-TH', { month: 'long' })}
				</TextStyle>
			</Button>
		</Box>
	);
};

const CustomYearDropdown = ({
	currentMonth,
	setClickMonthAndYear,
	isClickYear
}: {
	currentMonth: Date;
	setClickMonthAndYear: (month: boolean, year: boolean) => void;
	isClickYear: boolean;
}) => {
	return (
		<Box height={32} $zIndex={1000} $alignItems='center'>
			<Button
				variant={'ghost-main-no-padding'}
				$borderRadius='md'
				iconRight='arrow_down'
				sizeIcon={24}
				colorIcon='--color-primary'
				style={{ height: '100%', alignSelf: 'center', padding: '4px !important' }}
				onClick={() => {
					setClickMonthAndYear(false, !isClickYear);
				}}
			>
				<TextStyle variant='labelMedium' color='--text-primary-dark'>
					{currentMonth.getFullYear() + 543}
				</TextStyle>
			</Button>
		</Box>
	);
};

export const DatePicker = ({ value, onChange, onClose }: DatePickerProps) => {
	const { t } = useCustomTranslation();
	const [isClickMonth, setIsClickMonth] = useState<boolean>(false);
	const [isClickYear, setIsClickYear] = useState<boolean>(false);
	const [renderMonth, setRenderMonth] = useState<Date>(value ?? new Date());
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);

	const setClickMonthAndYear = (month: boolean, year: boolean) => {
		setIsClickMonth(month);
		setIsClickYear(year);
	};

	return (
		<Box
			border='all'
			$borderRadius='lg'
			$borderWidth={1}
			$borderColor='--color-border-light'
			$bgColor='--color-box-bg-light'
			width='fit-content'
			p={16}
			direction='column'
		>
			<Box display='flex' $justifyContent='space-between' $alignItems='center' pb={24} ml={16} mr={16}>
				<TextStyle variant='h5' color='--text-primary-dark'>
					{t('create_contract_calendar_title')}
				</TextStyle>
				<Box width={24} height={24} onClick={() => onClose?.()}>
					<Icon icon='close' />
				</Box>
			</Box>

			<DayPicker
				mode='single'
				captionLayout='dropdown'
				startMonth={new Date(new Date().getFullYear() - 15, 0)}
				endMonth={new Date(new Date().getFullYear(), 11)}
				selected={selectedDate}
				month={renderMonth}
				showOutsideDays
				hideNavigation={isClickMonth || isClickYear}
				onNextClick={() => {
					setRenderMonth(new Date(renderMonth.getFullYear(), renderMonth.getMonth() + 1));
				}}
				onPrevClick={() => {
					setRenderMonth(new Date(renderMonth.getFullYear(), renderMonth.getMonth() - 1));
				}}
				onSelect={(day) => {
					onChange?.(day);
					setSelectedDate(day);
				}}
				components={{
					MonthsDropdown: () => (
						<CustomMonthsDropdown
							currentMonth={renderMonth}
							setClickMonthAndYear={setClickMonthAndYear}
							isClickMonth={isClickMonth}
						/>
					),
					YearsDropdown: () => (
						<CustomYearDropdown
							currentMonth={renderMonth}
							setClickMonthAndYear={setClickMonthAndYear}
							isClickYear={isClickYear}
						/>
					),
					MonthGrid: (props) =>
						CustomMonthGrid(props, {
							isClickMonth,
							isClickYear,
							setClickMonthAndYear,
							currentMonth: renderMonth || new Date(),
							startMonth: new Date(new Date().getFullYear() - 14, 0),
							renderMonth: renderMonth,
							setRenderMonth
						})
				}}
			/>
			<style>{calendarCss}</style>
		</Box>
	);
};
