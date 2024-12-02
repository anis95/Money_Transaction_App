/**
 * Formats a given number or string into a formatted number string with
 * comma-separated thousands and three digits for the decimal part
 *
 * @param {number | string} value
 * @returns {string}
 */
export const formatNumber = (value: number | string): string => {
  if (!value) return '';

  const numericValue = typeof value === 'number' ? value : parseFloat(value);

  const integerPart = Math.floor(numericValue / 1000).toLocaleString('en-US');
  const decimalPart = (numericValue % 1000).toString().padStart(3, '0');

  return `${integerPart}.${decimalPart}`;
};

/**
 * function that allow just numbers and dots in value
 * @param {string} text
 * @returns {string}
 */
export const allowOnlyNumbersAndDots = (text: string): string =>
  text.replace(/[^0-9.]/g, '');

/**
 * Splits a formatted number string into its main part and the decimal part
 *
 * @param {string} value
 * @returns {object}
 */
export const formatNumberWithStyles = (
  value: string,
): { mainPart: string; decimalPart: string } => {
  const [mainPart, decimalPart] = value.split('.');
  return { mainPart, decimalPart };
};

/**
 * Generates a unique transaction ID by combining the current timestamp with a random number
 * @returns {string}
 */
export const generateTransactionId = (): string => {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 100000);

  return `${timestamp}${randomNumber}`;
};
