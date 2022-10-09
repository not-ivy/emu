import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";
import BlankSlate from "../../components/Blankslate";
import Icon from "../../components/Icon";
import { useTheme } from "../../hooks/theme";
import { Theme } from "../../types/theme";

export default function ThemeSetting() {
  const theme = useTheme((state) => state.theme);
  let [themes, setTheme] = useState<string[] | Error | undefined>(undefined);
  let [themesMap, setThemeMap] = useState<Map<string, Theme>>(new Map());
  let [selected, setSelected] = useState<Theme>();

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

  useEffect(() => {
    setSelected(themesMap.get('apollo.svg'))
  }, [themesMap])

  useEffect(() => {
    if (!selected) return;
    document.body.style.background = selected.background;
  }, [selected])

  if (!themes) { return (<BlankSlate title="Loading" body="This won't take long... (1/3)" />) }
  if (themes instanceof Error) { return (<BlankSlate title="Error" body={themes.toString()} />) }
  if (themesMap.size !== themes.length) { return (<BlankSlate title="Loading" body="This won't take long... (2/3)" />) }
  if (!selected) { return (<BlankSlate title="Loading" body="This won't take long... (3/3)" />) }

  return (
    <div className="mx-auto my-4 p-4 rounded-md max-w-screen-md" style={{ background: selected.background, color: selected.f_high }}>
      <div className="flex items-center">
        <Link href='/settings'><HiArrowLeft className="w-6 h-6 mx-3 cursor-pointer" /></Link>
        <h1 className="text-3xl font-medium">Themes</h1>
      </div>
      <hr className="m-4" style={{borderColor: selected.f_med}} />
      <div className="w-full flex flex-col items-center">
        <span className="w-3/4 p-4 text-lg font-medium rounded-md" style={{ background: selected.b_med }}>
        <span style={{ color: selected.f_med }}>Click on the <span style={{ color: selected.f_low }}>*</span>.svg button</span> to see all the themes! <br />
        Then click the checkmark button to accept the theme!
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center my-8 p-2 rounded-md">
          <Icon className="w-10 h-10 m-2" style={{ stroke: selected.b_inv }} />
          <div className="grid grid-cols-4 grid-flow-row rounded-md">
            {Object.keys(selected).filter((value) => value !== 'background').map((key) => (
              <div key={`theme-${key}`} className="h-5 w-5 rounded-full m-2 col-span-1" style={{ background: selected[key].toLowerCase() }} />
            ))}
          </div>
        </div>
        <div className="flex justify-around items-center w-3/4">
          <select className="text-center p-2 appearance-none rounded-md" style={{ background: selected.b_low }} onChange={(ev) => { setSelected(themesMap.get(ev.currentTarget.value)) }}>
            {themes.map((theme) => (<option key={`theme-${theme}`}>{theme}</option>))}
          </select>
          <HiCheckCircle aria-label="Set theme" className="w-6 h-6 cursor-pointer" style={{ color: selected.f_high }} onClick={() => { theme.load(JSON.stringify(selected)) }} />
        </div>
      </div>
    </div>
  )
}