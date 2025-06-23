import { create } from 'zustand';

const useDefectStore = create((set) => ({
  okQuantity: 0,
  defectedQuantity: 0,
  totalChecked: 0,

  incrementOk: () => set((state) => ({ okQuantity: state.okQuantity + 1 })),
  incrementDefected: () => set((state) => ({ defectedQuantity: state.defectedQuantity + 1 })),
  incrementTotal: () => set((state) => ({ totalChecked: state.totalChecked + 1 })),

  decrementTotal: () => set((state) => ({ totalChecked: Math.max(0, state.totalChecked - 1) })),
  decrementDefected: () => set((state) => ({ defectedQuantity: Math.max(0, state.defectedQuantity - 1) })),

  resetAll: () => set({ okQuantity: 0, defectedQuantity: 0, totalChecked: 0 }),
}));

export default useDefectStore;