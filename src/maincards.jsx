

export default function Card({img, title, text}) {
  return (
    <>
      <div className="main-card">
        <i className={img}></i>
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </>
  )
}