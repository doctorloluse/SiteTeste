import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/diego3.png' />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="17 de março" dateTime="2023-04-01 08:15:30">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <iframe src="https://drive.google.com/file/d/1kwixTP2J_aEcw5szazTkxulsdSxMxFxj/preview" width="640" height="480"></iframe>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href=''>jane.design/doctorcare</a></p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article >
    );
}