import { create } from 'zustand';

interface TestState {
  test: number;
  actions: {
    increase: (num: number) => void;
  };
}

const useTestStore = create<TestState>((set, get) => ({
  test: 0,
  // state와 action을 분리
  actions: {
    increase: (num) => set((state) => ({ test: state.test + num })),
  },
}));

// 스토어를 전체 구독할 경우, 불필요한 렌더링이 일어나기 때문에
// 개별적으로 export 하여 최적화
export const useTest = () => useTestStore((state) => state.test);
export const useTestActions = () => useTestStore((state) => state.actions);
