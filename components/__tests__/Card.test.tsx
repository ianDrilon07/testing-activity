import { render } from "@testing-library/react"
import { Card } from "@/components/index"

describe('Card Component', () => {

    const props = {
        header: 'Test header',
        description: 'Test description',
        link: 'https://www.example.com'
      }

    it('should render a header, description and link correctly', () => {
        const { getByText, getByRole } = render(<Card {...props}/>);

        expect(getByText(props.header)).toBeInTheDocument()
        expect(getByText(props.description)).toBeInTheDocument()
        expect(getByRole('link')).toHaveAttribute('href', props.link);
    })
})