import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const features = [
    {
        title: "Easy Mod Installation",
        description: "Install mods with just a drag and drop.",
        image: "drag-and-drop.png"
    },
    {
        title: "Mod Menu",
        description: "Toggle and configure your mods with the BeatblockPlus in-game mod menu.",
        image: "mod-menu.png"
    },
    {
        title: "Enhanced Gameplay",
        description: "Modify the game's code, textures, sounds and more!",
        image: "gameplay.png"
    },
    {
        title: "Community Creations",
        description: "Access a growing collection of mods and content created by the community.",
        image: "community.png"
    }
]

export default function Features() {
    return (
        <section className={['center', styles.section].join(' ')}>
            <h1 className={['center', styles.tagline].join(' ')}>The complete toolkit for Beatblock mod development</h1>
            <div className={styles.features}>
            {features.map((props, idx) => (
                <Feature key={idx} index={idx} {...props} />
            ))}
            </div>
        </section>
    );
}

function Feature({ title, description, image, index }) {
    const isEven = index % 2 === 0;
    const featureClass = [styles.feature, isEven ? styles.normalRow : styles.reversedRow].join(' ');

    return (
        <div className={featureClass}>
            {/* Image Box Container */}
            <div className={styles.visualBox}>
                <img src={useBaseUrl(`/img/features/${image}`)} alt={title} className={styles.boxImage} />
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
                <p className={styles.title}>{ title }</p>
                <p className={styles.description}>{ description }</p>
            </div>
        </div>
    );
}