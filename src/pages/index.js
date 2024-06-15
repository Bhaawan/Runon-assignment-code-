// pages/index.js
import VariantForm from './components/VariantForm';
import VariantTable from './components/VariantTable';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Variant Management</h1>
            <VariantForm />
            <VariantTable />
        </div>
    );
};

export default Home;
