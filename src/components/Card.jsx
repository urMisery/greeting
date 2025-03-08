import { useState } from "react";
import "./Card.css";

export default function Card(){
    const [showMessage, setShowwMessage] = useState(false);

    return(
        <div className="card">
            <h1>С 8 марта, Нелли 🌺</h1>
            <button onClick = {() => setShowwMessage(true)}>Тыць</button>
            {showMessage && <p className="message">✨С первым дыханием весны приходит самый прекрасный праздник – 8 Марта! Пусть этот день будет наполнен теплотой, заботой и самыми светлыми эмоциями!✨</p>} 
        </div>
    );
}