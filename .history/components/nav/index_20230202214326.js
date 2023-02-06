export default function Nav(
    {
        degree = "none",
        color = "purple",
        font = 10,
        image = 'icon/personTwo.png'
    }
) {
    return (
        <div style={{ backgroundcolor: color, fontSize: font }}>

            <ul>
                <li>
                    {degree}
                </li>

            </ul>
        </div>
    )
}