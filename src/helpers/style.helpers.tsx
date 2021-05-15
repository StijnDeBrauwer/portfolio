import {Fonts, Colors} from 'src/assets';

/**
 * Helper function that will add css variables to document
 *
 * @param key the key e.g. '--test-var'
 * @param value the value of our css variable e.g. '#FFFFFF'
 */
const addStyleVariableToStylesheet = (key: string, value: string) => {
  if (!key.startsWith('--')) {
    key = `--${key}`;
  }

  document.documentElement.style.setProperty(key, value);
};

/**
 * Add all key - values that are added in the Fonts constant
 */
const addFontVariablesToStylesheet = () => {
  const {sizes, families} = Fonts;

  for (const size in sizes) {
    addStyleVariableToStylesheet(
      `--font-size-${size}`,
      sizes[size as keyof typeof sizes]
    );
  }

  for (const family in families) {
    const fontFamily: Record<string, string> =
      families[family as keyof typeof families];
    for (const type in fontFamily) {
      addStyleVariableToStylesheet(
        `--font-family-${family}-${type}`,
        fontFamily[type]
      );
    }
  }
};

const addColorVariablesToStylesheet = () => {
  for (const color in Colors) {
    addStyleVariableToStylesheet(
      `--color-${color}`,
      Colors[color as keyof typeof Colors]
    );
  }
};

export const initCssVariables = () => {
  addFontVariablesToStylesheet();
  addColorVariablesToStylesheet();
};
