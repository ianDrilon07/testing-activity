import { multiplyNumbers } from "@/components/helpers"

describe('Multiply Numbers', () => {
    it('multiply the arguments proprly', () => {
        expect(multiplyNumbers(1, 2)).toBe(2)
    })
})