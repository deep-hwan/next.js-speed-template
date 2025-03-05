interface LocalStorageOptions {
  key: string;
}

interface UseLocalStorage {
  set: (value: string, options?: LocalStorageOptions) => void;
  get: () => string | null;
  remove: (options?: LocalStorageOptions) => void;
}

const useLocalStorage: (key: string) => UseLocalStorage = key => {
  const set = (value: string, options: LocalStorageOptions = { key }) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(options.key, value);
    }
  };

  const get = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null; // Return null or a default value when on the server
  };

  const remove = (options: LocalStorageOptions = { key }) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(options.key);
    }
  };

  return { set, get, remove };
};

export { useLocalStorage };
