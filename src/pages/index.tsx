import { ExperienceBar } from "../components/ExperienceBar";
import { Avatar } from '../components/Avatar';
import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChalenges";
import { Countdown } from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Avatar/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
