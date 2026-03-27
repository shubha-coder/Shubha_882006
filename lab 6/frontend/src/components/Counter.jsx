import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Minus } from 'lucide-react';

const API_URL = 'http://localhost:5000/api/counter';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const res = await axios.get(API_URL);
      setCount(res.data.count);
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  const increment = async () => {
    try {
      const res = await axios.post(`${API_URL}/increment`);
      setCount(res.data.count);
    } catch (error) {
      console.error('Error incrementing:', error);
    }
  };

  const decrement = async () => {
    try {
      const res = await axios.post(`${API_URL}/decrement`);
      setCount(res.data.count);
    } catch (error) {
      console.error('Error decrementing:', error);
    }
  };

  return (
    <div className="counter-container">
      <h2 className="count-display">{count}</h2>
      <div className="counter-actions">
        <button className="btn-icon decrement" onClick={decrement} aria-label="Decrement">
          <Minus size={32} />
        </button>
        <button className="btn-icon increment" onClick={increment} aria-label="Increment">
          <Plus size={32} />
        </button>
      </div>
    </div>
  );
}
