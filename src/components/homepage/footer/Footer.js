import styles from './index.module.css';

export default function Footer() {
    return (
        <section className={[styles.section].join(' ')}>
            <p className={styles.footer}>Beatblock Plus and Beatblock Tools are not associated with BubbleTabby in any way.</p>
            <p className={styles.footer}>For any issues, you can contact us on our <a href='https://discord.gg/nqz73zSqNe'>Discord Server</a>.</p>
        </section>
    );
}
