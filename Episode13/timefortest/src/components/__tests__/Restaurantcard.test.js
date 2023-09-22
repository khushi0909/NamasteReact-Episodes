
import {render,screen} from "@testing-library/react"
import Restrauntcard from "../Restrauntcard"
import MOCK_DATA from "../../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant card component with props data",()=>{


    render(<Restrauntcard resData={MOCK_DATA}/>)

    const name = screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();

})