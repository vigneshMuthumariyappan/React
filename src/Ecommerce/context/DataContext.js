import { createContext,useState,useEffect,useCallback } from "react";
import api from '../api/fetch'
import { useParams } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const[items, setItem] = useState([]);
    const {id} = useParams();
    const navCategory = useCallback(async (id) => {
        try {
            let endpoint = 'products/category/' + id;
            if (!id) endpoint = 'products'
            const response = await api.get(endpoint);
            setItem(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);
    useEffect(() => {
        navCategory(id);
    }, [id, navCategory])

    return (
        <DataContext.Provider value={{
            items
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;