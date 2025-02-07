import React, { useState, useEffect } from 'react';

const withLoadingSpinner = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setLoading] = useState(true);

        useEffect(() => {
            // Simulate data fetching
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000); // 2 seconds delay
            
            return () => clearTimeout(timer);
        }, []);

        return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
    };
};

// Example usage
const MyComponent = () => <div>Data Loaded!</div>;
const EnhancedComponent = withLoadingSpinner(MyComponent);
export default EnhancedComponent
