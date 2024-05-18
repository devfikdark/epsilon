import { useState, useEffect } from "react";

// Define the type for the data object
type DataObject = { [key: string]: any };

// Define the type for the parameters of the useSearch hook
interface UseSearchParams<T> {
  searchValue: string;
  retrieve: T[];
}

// Define the type for the return value of the useSearch hook
interface UseSearchResult<T> {
  filteredData: T[];
  loading: boolean;
}

// Convert the custom hook to TypeScript
export const useSearch = <T extends DataObject>({ searchValue, retrieve }: UseSearchParams<T>): UseSearchResult<T> => {
  const [filteredData, setFilteredData] = useState<T[]>([]);
  const [originalData, setOriginalData] = useState<T[]>([]);
  const [searchIndex, setSearchIndex] = useState<{ allValues: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const crawl = (data: DataObject, allValues: string[] = []): string[] => {
      for (let key in data) {
        if (typeof data[key] === "object") {
          crawl(data[key], allValues);
        } else {
          allValues.push(`${data[key]} `);
        }
      }
      return allValues;
    };

    const fetchData = async () => {
      const dataSet = retrieve;
      setOriginalData(dataSet);
      setFilteredData(dataSet);

      const searchIdx = dataSet.map((data) => {
        const allValues = crawl(data);
        return { allValues: allValues.toString() };
      });

      setSearchIndex(searchIdx);
      setLoading(false);
    };

    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchValue) {
      const reqData = searchIndex.map((data, index) => {
        if (data.allValues.toLowerCase().includes(searchValue.toLowerCase())) {
          return originalData[index];
        }
        return null;
      });

      setFilteredData(reqData.filter((data): data is T => data !== null));
    } else {
      setFilteredData(originalData);
    }
  }, [searchValue, originalData, searchIndex]);

  return { filteredData, loading };
};
