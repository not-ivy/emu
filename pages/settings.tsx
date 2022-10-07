import { useEffect, useState } from "react";
import BlankSlate from "../components/Blankslate";
import { useTheme } from "../hooks/theme";
import { Theme } from "../types/theme";

export default function Settings() {
  const theme = useTheme((state) => state.theme);
  let [themes, setTheme] = useState<string[] | Error | undefined>(undefined);
  let [themesMap, setThemeMap] = useState<Map<string, Theme>>(new Map());

  useEffect(() => {
    fetch('/themes.json')
      .then((res) => res.json())
      .then((data) => setTheme(data))
      .catch((err) => setTheme(err))
  }, [])

  useEffect(() => {
    if (!themes || themes instanceof Error) return;
    themes.forEach((t) => {
      fetch(`/themes/${t}`)
        .then((data) => data.text())
        .then((text) => setThemeMap(new Map(themesMap.set(t, theme.parse(text)))))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themes])

  if (!themes) { return (<BlankSlate title="Loading" body="This won't take long..." />) }
  if (themes instanceof Error) { return (<BlankSlate title="Error" body={themes.toString()} />) }
  if (themesMap.size !== themes.length) { return <></> }

  return (
    <div className="flex flex-col">
      {
        themes.map((t) => (
          <div className="flex" key={`theme-${t}`}>
            <input type="radio" value={t} />
            <span>{t}</span>
            <div className="flex">
              {Object.keys(themesMap.get(t)).map((key, index) => (
                <div key={`theme-${t}-${key}`} className={`h-5 w-5 rounded-full`} style={{ background: themesMap.get(t)[key].toLowerCase() }} />
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}