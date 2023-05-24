import styles from './page.module.css'
import {UnusedClientComponent} from "@/UnusedClientComponent";
import {HeaderClientComponent} from "@/HeaderClientComponent";

export default function Home() {
  const object = {
    title: "Hello world",
    component: UnusedClientComponent
  }

  /**
   * UnusedClientComponent is referenced in a server component, but:
   * 1. It's not passed to client component via props
   * 2. No client component imports and uses this component.
   *
   * And yet, UnusedClientComponent is added to the client bundle.
   */

  return (
    <main className={styles.main}>
      <HeaderClientComponent
        title={object.title}
      />
    </main>
  )
}
