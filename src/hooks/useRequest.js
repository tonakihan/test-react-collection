/* Hook принимает callback, обраватывает выхлоп запроса и возвращает данные.
 */
import { useEffect, useState } from "react";

function useRequest(request_CB, dependencies) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.log("useRequest");
    request_CB()
      .then(response => setData(response.data))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, dependencies)

  return [data, loading, error];
}

export default useRequest;