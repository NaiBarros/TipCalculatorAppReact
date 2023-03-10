import styles from "./styles.module.scss"
import cifrao from "../../assets/icon-dollar.svg"
import Input from "../Input";
import iconePessoa from "../../assets/icon-person.svg"

function App() {
  return (

    <div className={styles.container}>
      <section className={styles.inputSection}>
        <Input label="Bill" icon={cifrao} />
        <h1>Select Tip %</h1>
        <ul>
          <li>
            <button>
              5%
            </button>
          </li>
          <li>
            <button>
              10%
            </button>
          </li>
          <li>
            <button>
              15%
            </button>
          </li>
          <li>
            <button>
              25%
            </button>
          </li>
          <li>
            <button>
              50%
            </button>
          </li>
        </ul>

        <Input label="Number of People" icon={iconePessoa} />
      </section>

      <section className={styles.valueSection}>
        <div>
          <div className={styles.valueDivTip}>
            <div>
              <h1>Tip Amount</h1>
              <h2>/ person</h2>
            </div>
            <strong>00.00</strong>
          </div>

          <div className={styles.valueDivTotal}>

            <div>
              <h1>
                Total
              </h1>
              <h2>
                / person
              </h2>
            </div>

            <strong>
              00.00
            </strong>

          </div>

        </div>
        <button>RESET</button>
      </section>
    </div>
  );
}

export default App;
