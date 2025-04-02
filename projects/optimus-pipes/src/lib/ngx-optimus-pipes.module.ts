import { NgModule } from "@angular/core";
import { SentenceCasePipe } from "./pipes/sentence-case.pipe";

@NgModule({
  imports: [SentenceCasePipe],
  exports: [SentenceCasePipe],
})
export class NgxOptimusPipesModule {}
