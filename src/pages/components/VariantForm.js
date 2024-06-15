// components/VariantForm.js
import { useState } from 'react';
import { useVariantContext } from '../context/VariantContext';

const VariantForm = () => {
    const { addVariant } = useVariantContext();
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVariant = { size, color, price, available };
        addVariant(newVariant);
        setSize('');
        setColor('');
        setPrice(0);
        setAvailable(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div>
                <label>Size</label>
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
            </div>
            <div>
                <label>Color</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            <div>
                <label>Available</label>
                <input type="number" value={available} onChange={(e) => setAvailable(Number(e.target.value))} />
            </div>
            <button type="submit">Add Variant</button>
        </form>
    );
};

export default VariantForm;
