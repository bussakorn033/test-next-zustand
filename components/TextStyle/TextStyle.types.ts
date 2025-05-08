export interface DSTextStyleProps extends React.HTMLAttributes<HTMLHeadingElement>{
  id?: string
  /**
   * Text variation
   */
  variant?:
    | 'specialH1'
    | 'specialH2'
    | 'pageTitle'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'paragraphBig'
    | 'paragraphMedium'
    | 'paragraphSmall'
    | 'paragraphXSmall'
    | 'subtitle'
    | 'labelSelection'
    | 'labelSelectionSmall'
    | 'labelSelectionXSmall'
    | 'labelList'
    | 'labelListMedium'
    | 'valueList'
    | 'valueListMedium'
    | 'valueMedium'
    | 'valueSmall'
    | 'valueBig'
    | 'placeholder'
    | 'labelInput'
    | 'buttonBig'
    | 'buttonMedium'
    | 'buttonSmall'
    | 'clickableLabel'
    | 'linkBig'
    | 'linkMedium'
    | 'linkSmall'
    | 'allCap'
    | 'labelXSmall'
    | 'valueListMediumBold'
    | 'span'
  /**
   * Text Color <a href="/?path=/story/colors--page" target="_blank">Color name</a>
   */
  color?: 
    | 'color-primary'
    | 'color-secondary'
    | 'color-success'
    | 'color-danger'
    | 'color-warning'
    | 'color-info'
  className?: string
  /**
   * Custom DOM tag
   */
  tag?: string
  children?: React.ReactNode
  limitLine?: number
  whiteSpace?: 
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap'
  wordBreak?: 
    | 'normal'
    | 'break-all'
    | 'keep-all'
    | 'break-word'
  textAlign?: 'left' | 'center' | 'right' 
}
