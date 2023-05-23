import styles from './page.module.css'
import { exampleConfig } from "@/exampleConfig";
import {trimConfig} from "@/trimConfig";

export default function Home() {
  const baseConfig = trimConfig(exampleConfig);

  return (
    <main className={styles.main}>
      { baseConfig.string }<br/>
      { baseConfig.number }
    </main>
  )
}
