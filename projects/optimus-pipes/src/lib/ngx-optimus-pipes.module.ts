import { NgModule } from "@angular/core";
import { SentenceCasePipe } from "./pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";
import { TimeAgoPipe } from "./pipes/time-ago/time-ago.pipe";

@NgModule({
  imports: [SentenceCasePipe, TruncatePipe, TimeAgoPipe],
  exports: [SentenceCasePipe, TruncatePipe, TimeAgoPipe],
})
export class NgxOptimusPipesModule {}
