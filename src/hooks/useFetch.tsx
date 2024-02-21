import React, { useState, useEffect } from 'react';
import { ApiService } from '@services/apis/api-base';
import { useLoadingActions } from '@store/loadingStore';

function useFetch<IRes, IDependency>(option: {
  body?: any;
  url: string;
  dependency?: IDependency;
  method: 'get' | 'post' | 'delete' | 'put';
}): { data: IRes | null; refetch: () => void } {
  const [data, setData] = useState<IRes | null>(null);

  const { setIsLoading } = useLoadingActions();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await ApiService<IRes>(option.url, option.body)[
        option.method
      ];
      if (res.data.rsltCd === '00') {
        setData({ ...res.data.data });
      }
    } catch (e) {
      // 예외처리 정리할 것
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [option.dependency]);

  return { data, refetch: fetchData };
}

export default useFetch;
