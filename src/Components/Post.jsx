import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="./cadura.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Filipe Cadura</strong>
                        <span>Estressado de Plantão</span>
                    </div>
                </div>
                <time title="17 de março" dateTime="2023-04-01 08:15:30">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <iframe src="https://drive.google.com/file/d/1kwixTP2J_aEcw5szazTkxulsdSxMxFxj/preview" width="640" height="480"></iframe>
                <p>PERA AI GUILHERME</p>
                <p> <a href="">#toputo</a></p>
            </div>
        </article >
    );
}