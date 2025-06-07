import { NgModule } from "@angular/core";
import { SentenceCasePipe } from "./pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";
import { TimeAgoPipe } from "./pipes/time-ago/time-ago.pipe";
import { CodeCasePipe } from "./pipes/code-case/code-case.pipe";
import { InitialsPipe } from "./pipes/initials/initials.pipe";
import { StripHtmlPipe } from "./pipes/strip-html/strip-html.pipe";

@NgModule({
  imports: [
    SentenceCasePipe,
    TruncatePipe,
    TimeAgoPipe,
    CodeCasePipe,
    InitialsPipe,
    StripHtmlPipe,
  ],
  exports: [
    SentenceCasePipe,
    TruncatePipe,
    TimeAgoPipe,
    CodeCasePipe,
    InitialsPipe,
    StripHtmlPipe,
  ],
})
export class NgxOptimusPipesModule {}
