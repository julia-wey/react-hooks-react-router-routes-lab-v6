

function ActorCard({name, movies}) {
    return (
        <article>
            <h2>{name}</h2>
            <li>{movies}</li>
        </article>
    )
}

export default ActorCard;