import { NgModule } from "@angular/core";
import { SentenceCasePipe } from "./pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";

@NgModule({
  imports: [SentenceCasePipe, TruncatePipe],
  exports: [SentenceCasePipe, TruncatePipe],
})
export class NgxOptimusPipesModule {}
