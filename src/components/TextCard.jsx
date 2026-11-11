
const TextCard = ({ heading, description, className, head_class, desc_class }) => {
    return (
        <div className={className}>
            <h2 className={head_class}>{heading}</h2>
            <p className={desc_class}>{description}</p>
        </div>
    )
}

export default TextCard
