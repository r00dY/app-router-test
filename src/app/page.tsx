import styles from './page.module.css'
import { exampleConfig } from "@/exampleConfig";
import {trimConfig} from "@/trimConfig";
import {BaseConfigRenderer} from "@/BaseConfigRenderer";

export default function Home() {
  const baseConfig = trimConfig(exampleConfig);

  return (
    <main className={styles.main}>
      <BaseConfigRenderer baseConfig={baseConfig} />
    </main>
  )
}
