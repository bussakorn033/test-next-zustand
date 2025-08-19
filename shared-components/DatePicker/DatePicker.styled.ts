export const calendarCss = `
  .rdp-dropdowns {
    padding: 4px 12px;
  }
  .rdp-dropdown_root {
    color: var(--text-primary-dark);
    background-color: white;
    -webkit-appearance: none;
    font-weight: var(--font-weight-regular, 400);
    font-family: var(--font-family-primary, 'Ekachon', system-ui, sans-serif);
    font-size: var(--font-size-16, 16px);
    font-style: var(--font-style-normal, normal);
    line-height: var(--line-height-24, 24px);
    letter-spacing: var(--letter-spacing-wide, 0.4px);
    cursor: pointer;
  }
  .rdp-chevron {
    fill: var(--text-primary-dark);
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-left: 8px;
  }
  .rdp-weekday,
  .rdp-day_button {
    font-size: var(--font-size-16, 16px);
    font-weight: var(--font-weight-regular, 400);
    line-height: var(--line-height-24, 24px);
    letter-spacing: var(--letter-spacing-wide, 0.4px);
    color: var(--text-primary-dark);
    font-family: var(--font-family-primary, 'Ekachon', system-ui, sans-serif);
    opacity: 1;
  }
  .rdp-today .rdp-day_button {
    border: 1px solid var(--color-border-dark, #002D63);
    border-radius: 50%;
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
  .rdp-selected {
    background-color: var(--color-accent, #0050F0);
    border-radius: 50%;
  }
  .rdp-selected .rdp-day_button {
    color: var(--color-button-text-primary, #FFFFFF);
    border: unset;
  }
`;
