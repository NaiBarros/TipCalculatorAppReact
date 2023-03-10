export default function Input(props) {
  return (
    <div>
      <div>
        <h1>
          {props.label}
        </h1>
        <h1>
          Error
        </h1>
      </div>
      <div>
        <img src={props.icon} />
        <input />
      </div>
    </div>

  )
}