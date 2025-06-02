import { Component, computed, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SentenceCasePipe } from "../../../optimus-pipes/src/lib/pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "../../../optimus-pipes/src/lib/pipes/truncate/truncate.pipe";
import { availablePipes } from "./pipes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [FormsModule, SentenceCasePipe, TruncatePipe],
})
export class AppComponent {
  public userInput = signal("hello_world_example");
  public selectedPipeName = signal(availablePipes[0].name);
  public currentSelectPipe = computed(() => {
    return this.availablePipes.find(
      ({ name }) => name === this.selectedPipeName()
    );
  });

  currentInitialInput = computed(() => {
    const selectedPipe = availablePipes.find(
      p => p.name === this.selectedPipeName()
    );
    return selectedPipe ? selectedPipe.initialInput : "testInput";
  });

  public selectedPipeExists = computed(() => {
    return this.availablePipes.find(
      ({ name }) => name === this.selectedPipeName()
    );
  });

  protected readonly availablePipes = availablePipes;

  constructor() {
    effect(() => {
      const selectedPipe = this.currentSelectPipe();
      if (selectedPipe) {
        this.userInput.set(this.currentInitialInput());
      }
    });
  }
}
