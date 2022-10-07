import Icon from "./Icon";

export default function BlankSlate(props: { title: string, body: string }) {
  const { title, body } = props;
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full text-hr-f-high max-w-screen-sm">
        <h3 className="text-center m-4 text-3xl font-medium">{title}</h3>
        <p className="text-center">{body}</p>
        <hr className="border-hr-b-med border-2 w-full mx-auto m-4 expand" />
        <div className="flex justify-center items-center">
          <Icon className="w-8 h-8 m-4 stroke-hr-f-med" />
          <span className="font-semibold">Puroto</span>
        </div>
      </div>
    </div>
  )
}