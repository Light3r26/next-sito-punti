'use client'

import Image from 'next/image'
import styles from './homeAnimatedBg.module.css'

export default function homeAnimatedBg() {
  return (
    <section className={styles.scene}>
      {/* Background statico */}
      <div className={styles.background}>
        <Image
          src="/scene/background.jpg"
          alt=""
          fill
          priority
        />
      </div>

      {/* Nuvole */}
      <div className={styles.clouds}>
        <Image
          src="/scene/clouds.png"
          alt=""
          fill
        />
      </div>

      {/* Nave */}
      <div className={styles.ship}>
        <Image
          src="/scene/ship.png"
          alt=""
          fill
        />
      </div>

      {/* Onde medio piano */}
      <div className={styles.wavesMid}>
        <Image
          src="/scene/waves-mid.png"
          alt=""
          fill
        />
      </div>

      {/* Personaggio */}
      <div className={styles.character}>
        <Image
          src="/scene/character.png"
          alt=""
          fill
        />
      </div>

      {/* Onde primo piano */}
      <div className={styles.wavesFront}>
        <Image
          src="/scene/waves-front.png"
          alt=""
          fill
        />
      </div>
    </section>
  )
}