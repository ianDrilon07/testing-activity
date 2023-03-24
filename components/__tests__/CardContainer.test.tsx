import { render } from "@testing-library/react";
import { CardContainer } from "@/components/index"

describe("Card Container Component", () => {
    const cards = [
        {
            header: 'Card 1',
            description: 'Test description 1',
            link: 'https://www.example.com1'
        },
        {
            header: 'Card 2',
            description: 'Test description 2 ',
            link: 'https://www.example.com2'
        },
        {
            header: 'Card 3',
            description: 'Test description 3',
            link: 'https://www.example.com3'
        },
    ]

    const { getByLabelText } = render(<CardContainer cards={cards}/>)

    it("renders card correctly", () => {
        const cardElement = getByLabelText('card-container');
        expect(cardElement.children.length).toBe(3)
    })
})