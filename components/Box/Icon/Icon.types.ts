export interface DSIconProps {
  /**
   * ID of component
   */
  id?: string
  lable?: string
  className?: string
  icon: string | undefined
  /**
   * small : 16px, medium: 24px, large: 36px, xxlarge: 56px
   */
  size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
  /**
   * hero and vector can not apply color
   */
  variant: 'solid' | 'outline' | 'hero' | 'vector' | 'warning' | 'success'
  /**
   * Get color name <a href="/?path=/story/colors--page" target="_blank">here</a> 🎨
   */
  color?: string
  component?: any
  disabled?: boolean
  width?: number
  height?: number
}
