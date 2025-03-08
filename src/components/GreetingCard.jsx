/* src/components/GreetingCard.jsx */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GreetingCard() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="card"
    >
      <h1>С 8 марта, Нелли 🌺</h1>
      <p>✨С первым дыханием весны приходит самый прекрасный праздник – 8 Марта! Пусть этот день будет наполнен теплотой, заботой и самыми светлыми эмоциями!✨</p>
      <button className="button" onClick={() => setShowMessage(true)}>Тыць</button>
      {showMessage && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '15px', color: '#388e3c' }}
        >
          Даже лудший город в мире завидует прекрасности лудшего человека 💖
        </motion.p>
      )}
    </motion.div>
  );
}
