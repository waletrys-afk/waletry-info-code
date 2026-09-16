

export default function Process({ title, name, text }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
        <span>{text}</span>
      </div>
    </>
  )
}