export interface TextStyleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  id?: string;
  /**
   * Text variation following design system
   * @default paragraphMedium
   */
  variant?: // Desktop Headings
  | "h2" // 32px bold, 44px
    | "h4" // 24px bold, 34px
    | "h6" // 16px bold, 24px

    // Paragraphs
    | "paragraphMedium" // 16px regular, 24px
    | "paragraphSmall" // 14px regular, 20px
    | "paragraphXSmall" // 12px regular, 16px

    // Labels
    | "labelMedium" // 16px regular, 24px
    | "labelSmall" // 14px regular, 20px
    | "labelSmallBold" // 14px bold, 20px
    | "labelXSmall" // 12px regular, 16px
    | "labelXSmallBold" // 12px bold, 16px

    // Values
    | "valueSmall" // 14px regular, 20px

    // Buttons
    | "buttonMedium" // 16px bold, 24px
    | "buttonBig" // 20px bold, 32px

    // Special Cases
    | "pageTitle" // 20px bold, 24px
    | "allCapSmall" // 12px regular, 16px, uppercase

    // Mobile Specific
    | "mobileH4" // 14px bold, 20px
    | "mobileLabelSmallBold" // 14px bold, 24px
    | "span"; // 14px bold, 24px
  /**
   * Custom styles
   */
  className?: string;
  tag?: string;
  children?: React.ReactNode;

  /**
   * Text truncation
   * @default 0 (no truncation)
   */
  limitLine?: number;

  /**
   * White space handling
   * @default "pre-line"
   */
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

  /**
   * Word break behavior
   */
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";

  /**
   * Text alignment
   */
  textAlign?: "left" | "center" | "right";

  /**
   * Text color from CSS variables
   */
  color?: string;

  /**
   * Text decoration
   */
  textDecoration?: "none" | "underline" | "line-through" | "overline";
}
