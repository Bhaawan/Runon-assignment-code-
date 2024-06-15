// components/VariantTable.js
import { useVariantContext } from '../context/VariantContext';

const VariantTable = () => {
    const { variants } = useVariantContext();

    const totalAvailable = variants.reduce((sum, variant) => sum + variant.available, 0);
    const priceRange = variants.reduce((range, variant) => {
        if (variant.price < range.min) range.min = variant.price;
        if (variant.price > range.max) range.max = variant.price;
        return range;
    }, { min: Infinity, max: -Infinity });

    return (
        <div>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {variants.map((variant, index) => (
                        <tr key={index}>
                            <td>{variant.size}</td>
                            <td>{variant.color}</td>
                            <td>{variant.price}</td>
                            <td>{variant.available}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <p>Total Available: {totalAvailable}</p>
                <p>Price Range: {priceRange.min} - {priceRange.max}</p>
            </div>
        </div>
    );
};

export default VariantTable;
