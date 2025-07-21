import { create } from 'zustand'
const useCalculatorStore = create((set) => ({
    num1: 0,
    num2: 0,
    result: 0,
    setNum1: (value) => set({ num1: value }),
    setNum2: (value) => set({ num2: value }),
    calculate: (operation) => set((state) => {
        const { num1, num2 } = state
        let result = 0
        switch (operation) {
            case 'add':
                result = (num1 + num2)
                break;
            case 'sub':
                result = (num1 - num2)
                break;
            case 'mul':
                result = (num1 * num2)
                break;
            case 'div':
                result = (num1 / num2)
                break;
            default:
                result = (0)
        }
        return { result }
    }),
}))
export default useCalculatorStore
