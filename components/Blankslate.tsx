export default function BlankSlate(props: { title: string, body: string }) {
  const { title, body } = props;
  return (
    <div className="p-8 text-purple-200">
      <h3 className="text-center m-4 text-2xl font-medium">{title}</h3>
      <p className="text-center">{body}</p>
    </div>
  )
}