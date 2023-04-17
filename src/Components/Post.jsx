import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://instagram.fpnz4-1.fna.fbcdn.net/v/t51.2885-15/307221793_619081323185693_7923157717664767882_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.fpnz4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=I8yGdz7jidQAX_mVqNY&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkyOTQ1MTU2NTIwMzA2NDAzNA%3D%3D.2-ccb7-5&oh=00_AfDYlvg5EidJAjB3rXimqYnebV2aXk-5apwFYQhfopXEag&oe=6442F0B3&_nc_sid=1527a3' />
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