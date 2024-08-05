import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./index";

describe("When Events is created", () => {
  it("a list of event card is displayed", async () => {
    render(<Form />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success action is called", async () => {
      const onSuccess = jest.fn();
      render(<Form onSuccess={onSuccess} />);
      fireEvent(
        await screen.findByTestId("button-test-id"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Envoyer");
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});

    // Test optionnel pour vérifier si le formulaire est bien soumis

describe.skip("When the form is completed and submit button ", () => {
  it("the form is clear", async () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();
    render(<Form onSuccess={onSuccess} onError={onError} />);
    
    fireEvent.change(await screen.findByLabelText("Nom"), {
      target: { value: "" },
    });
    fireEvent.change(await screen.findByLabelText("Prénom"), { 
      target: { value: "" },
    });
    fireEvent.change(await screen.findByLabelText("Email"), {
          target: { value: "" },
    });
    fireEvent.change(await screen.findByLabelText("Message"), {
      target: { value: "" },
    });
    fireEvent.click(await screen.findByText("Envoyer"));
    expect(onSuccess).toHaveBeenCalled();
  }
)});