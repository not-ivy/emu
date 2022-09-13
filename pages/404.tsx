import Icon from "../components/Icon";

export default function Error404() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Icon className="w-16 stroke-purple-200 pr-8" />
      <p className="border-l border-purple-200 text-purple-200 pl-8">404<br />That page could not be found.</p>
    </div>
  )
}