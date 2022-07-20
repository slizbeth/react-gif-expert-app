export const GifItem = ({ tittle, url }) => {

    return (
        <div className="card">
            <img src={ url } alt={ tittle } />
            <p>{ tittle }</p>
        </div>
    )

}
