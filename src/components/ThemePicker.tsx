import { THEME_LIST } from "../themes";
import { useTheme } from "../theme/useTheme";

export function ThemePicker() {
  const { themeId, setTheme } = useTheme();

  return (
    <nav className="theme-index" aria-label="Theme">
      {THEME_LIST.map((theme, i) => (
        <button
          key={theme.id}
          className="spine"
          style={{ background: theme.swatch, animationDelay: `${i * 0.04}s` }}
          aria-current={theme.id === themeId}
          aria-label={`Switch to ${theme.name} theme`}
          onClick={() => setTheme(theme.id)}
        >
          <span className="label">{theme.name}</span>
        </button>
      ))}
    </nav>
  );
}
