
import { Check } from "lucide-react";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const themes = [
    { id: "blue", color: "bg-gradient-to-r from-blue-700 to-blue-500", name: "Deep Blue" },
    { id: "purple", color: "bg-gradient-to-r from-purple-700 to-indigo-600", name: "Royal Purple" },
    { id: "green", color: "bg-gradient-to-r from-emerald-700 to-emerald-500", name: "Emerald" },
    { id: "orange", color: "bg-gradient-to-r from-orange-600 to-amber-500", name: "Sunset" },
    { id: "dark", color: "bg-gradient-to-r from-slate-900 to-slate-700", name: "Dark" },
    { id: "neon", color: "bg-gradient-to-r from-fuchsia-600 to-pink-600", name: "Neon" },
  ];

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-4 text-lg">Select Theme</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {themes.map((t) => (
          <button
            key={t.id}
            className={`h-12 rounded-lg ${t.color} flex items-center justify-center ${
              theme === t.id ? "ring-2 ring-offset-2 ring-primary ring-offset-black/40" : ""
            } transition-all hover:scale-105`}
            onClick={() => setTheme(t.id)}
            title={t.name}
          >
            {theme === t.id && <Check size={16} className="text-white" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
