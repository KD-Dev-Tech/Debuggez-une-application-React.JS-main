// import { render, screen, fireEvent } from "@testing-library/react"; // Import the fireEvent function
import { render, screen,} from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("janvier");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});

// describe("When slider is created", () => {
//   it("pauses the slider when space is pressed", async () => { 
//     const { getByTestId } = render(<Slider data={data} />);
//     const slider = getByTestId('slider-testid'); // Récupérer le slider

//     // Simule l'appui sur la touche espace
//     fireEvent.keyDown(slider, { key: ' ', code: 'Space', keyCode: 32, charCode: 32 });

//     // Vérifier que le slider est en pause
//     expect(slider).toHaveClass('paused'); 
//   });
// });

