import { Component, computed, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SentenceCasePipe } from "../../../optimus-pipes/src/lib/pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "../../../optimus-pipes/src/lib/pipes/truncate/truncate.pipe";
import { availablePipes } from "./pipes";
import { TimeAgoPipe } from "../../../optimus-pipes/src/lib/pipes/time-ago/time-ago.pipe";
import { CodeCasePipe } from "../../../optimus-pipes/src/lib/pipes/code-case/code-case.pipe";
import { InitialsPipe } from "../../../optimus-pipes/src/lib/pipes/initials/initials.pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    FormsModule,
    SentenceCasePipe,
    TruncatePipe,
    TimeAgoPipe,
    CodeCasePipe,
    InitialsPipe,
  ],
})
export class AppComponent {
  public userInput = signal("hello_world_example");
  public selectedPipeName = signal(availablePipes[0].name);
  public pipePropertyValues = signal<{ [key: string]: any }>({});
  public currentSelectPipe = computed(() => {
    return this.availablePipes.find(
      ({ name }) => name === this.selectedPipeName()
    );
  });

  public currentInitialInput = computed(() => {
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
      const pipe = this.currentSelectPipe();
      const newValues: { [key: string]: any } = {};
      if (pipe?.properties) {
        for (const prop of pipe.properties) {
          newValues[prop.name] = prop.defaultValue;
        }
      }
      this.pipePropertyValues.set(newValues);

      if (pipe) {
        this.userInput.set(pipe.initialInput);
      }
    });
  }

  public updatePipePropertyValue(
    propName: string,
    value: any,
    type?: "number" | "string" | "boolean"
  ) {
    let parsedValue = value;
    if (type === "number") {
      parsedValue = parseFloat(value);
      if (isNaN(parsedValue)) {
        const propDef = this.currentSelectPipe()?.properties?.find(
          p => p.name === propName
        );
        parsedValue = propDef ? propDef.defaultValue : 0;
      }
    }
    this.pipePropertyValues.update(currentValues => ({
      ...currentValues,
      [propName]: parsedValue,
    }));
  }

  public transformedOutput = computed(() => {
    const input = this.userInput();
    const pipeName = this.selectedPipeName();
    const props = this.pipePropertyValues();
    const pipeInfo = this.currentSelectPipe();

    if (!pipeInfo) return "Select a pipe.";

    switch (pipeName) {
      case "sentenceCase":
        const capitalizeEveryWord = props["capitalizeEveryWord"];
        const allLowercase = props["allLowercase"];
        const allUppercase = props["allUppercase"];
        const sentenceCasePipeInstance = new SentenceCasePipe();
        return sentenceCasePipeInstance.transform(
          input,
          capitalizeEveryWord,
          allLowercase,
          allUppercase
        );
      case "truncate":
        const limit = props["limit"];
        const ellipsis = props["ellipsis"];
        const truncatePipeInstance = new TruncatePipe();
        return truncatePipeInstance.transform(input, limit, ellipsis);
      case "timeAgo":
        const timeAgoPipeInstance = new TimeAgoPipe();
        return timeAgoPipeInstance.transform(input);
      case "codeCase":
        const caseType = props["caseType"] || "camel";
        const codeCasePipeInstance = new CodeCasePipe();
        return codeCasePipeInstance.transform(input, caseType);
      case "initials":
        const initialsPipeInstance = new InitialsPipe();
        const length = props["length"];
        return initialsPipeInstance.transform(input, length);
      default:
        return `Output for '${pipeName}' not configured in component.`;
    }
  });

  public exampleUsageString = computed(() => {
    const pipe = this.currentSelectPipe();
    if (!pipe) return "";
    let usage = `${pipe.exampleUsageText ? pipe.exampleUsageText : "someText"} | ${pipe.name}`;
    if (pipe.properties?.length) {
      const exampleArgs = pipe.properties
        .map(p => {
          const val =
            this.pipePropertyValues()[p.name] !== undefined
              ? this.pipePropertyValues()[p.name]
              : p.defaultValue;
          if (p.type === "string") return `'${val}'`;
          return val;
        })
        .join(":");
      if (exampleArgs) {
        usage += `:${exampleArgs}`;
      }
    }
    return usage;
  });
}
