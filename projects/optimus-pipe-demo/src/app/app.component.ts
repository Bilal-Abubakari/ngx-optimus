import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SentenceCasePipe } from "../../../optimus-pipes/src/lib/pipes/sentence-case.pipe";

interface PipeInfo {
  name: string;
  displayName: string;
  description: string;
  initialInput: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [FormsModule, SentenceCasePipe],
})
export class AppComponent {
  public userInput: string = "hello_world_example";

  public availablePipes: PipeInfo[] = [
    {
      name: "sentenceCase",
      displayName: "Sentence Case",
      description:
        "Converts a string into sentence case. Handles camelCase, PascalCase, snake_case, and kebab-case inputs.",
      initialInput: "hello_World-Example123",
    },
  ];
  public selectedPipeName = this.availablePipes[0].name;
  public currentSelectPipe = this.availablePipes[0];

  get currentInitialInput(): string {
    const selectedPipe = this.availablePipes.find(
      p => p.name === this.selectedPipeName
    );
    return selectedPipe ? selectedPipe.initialInput : "testInput";
  }

  public selectedPipeExists() {
    return this.availablePipes.find(
      ({ name }) => name === this.selectedPipeName
    );
  }
}
