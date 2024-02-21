import { create } from 'zustand';

interface loadingState {
  isLoading: boolean;
  actions: {
    setIsLoading: (status: boolean) => void;
  };
}

const useLoadingStore = create<loadingState>((set, get) => ({
  isLoading: false,
  // state와 action을 분리
  actions: {
    setIsLoading: (state) => set((prevState) => ({ isLoading: state })),
  },
}));

// 스토어를 전체 구독할 경우, 불필요한 렌더링이 일어나기 때문에
// 개별적으로 export 하여 최적화
export const useLoading = () => useLoadingStore((state) => state.isLoading);
export const useLoadingActions = () =>
  useLoadingStore((state) => state.actions);
