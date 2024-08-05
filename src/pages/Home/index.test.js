import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {

  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByText("Catégories");
  })
  it("a list a people is displayed", async () => {
    render(<Home />); 
    await screen.findByText("Une équipe d’experts dédiés à l’ogranisation de vos événements");
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Contactez-nous");
    await screen.findByText("Notre derniére prestation");       
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    // Attendre que tous les éléments de la liste des événements soient rendus
  const eventCards = await screen.findAllByText("Notre derniére prestation");
    // Vérifier que le dernier élément de la liste est affiché
  expect(eventCards[eventCards.length - 1]).toBeInTheDocument();
  })
});
