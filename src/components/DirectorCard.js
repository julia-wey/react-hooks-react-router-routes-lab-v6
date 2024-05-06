
function DirectorCard({name, movies}) {
    return (
        <article>
            <h2>{name}</h2>
            <li>{movies}</li>
        </article>
    )
}
export default DirectorCard;