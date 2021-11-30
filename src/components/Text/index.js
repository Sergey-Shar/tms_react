
const Text = ({ text, align, color, fontSize, underLine }) => {
    const units = 'rem'
    return (
        <div className="text" style={{
            textAlign: align,
            color: color,
            fontSize: fontSize + units,
            textDecoration: underLine ? "underline" : "none"
        }}>
            {text}
        </div>
    )

}
export default Text