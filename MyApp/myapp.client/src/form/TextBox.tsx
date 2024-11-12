function TextBox({ label, value, handleChange }: { label: string, value:string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {

    return (
        <div>
            <p><label>{label}</label>: <input type="text" value={value} onChange={handleChange} /> {value}</p>
        </div>
    );
}

export default TextBox;