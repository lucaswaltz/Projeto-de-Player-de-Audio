
function musics({ music, titleRef, artistRef }) {

    return (

        <li>
            <img src={music.cover} />
            <strong>{music.title}</strong>
            <span>{music.description}</span>
        </li>
    )

}

export default musics