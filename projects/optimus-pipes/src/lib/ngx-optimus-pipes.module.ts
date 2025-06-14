import { NgModule } from "@angular/core";
import { SentenceCasePipe } from "./pipes/sentence-case/sentence-case.pipe";
import { TruncatePipe } from "./pipes/truncate/truncate.pipe";
import { TimeAgoPipe } from "./pipes/time-ago/time-ago.pipe";
import { CodeCasePipe } from "./pipes/code-case/code-case.pipe";
import { InitialsPipe } from "./pipes/initials/initials.pipe";
import { StripHtmlPipe } from "./pipes/strip-html/strip-html.pipe";
import { DefaultPipe } from "./pipes/default/default.pipe";
import { FilterByPipe } from "./pipes/filter-by/filter-by.pipe";

@NgModule({
  imports: [
    SentenceCasePipe,
    TruncatePipe,
    TimeAgoPipe,
    CodeCasePipe,
    InitialsPipe,
    StripHtmlPipe,
    DefaultPipe,
    FilterByPipe,
  ],
  exports: [
    SentenceCasePipe,
    TruncatePipe,
    TimeAgoPipe,
    CodeCasePipe,
    InitialsPipe,
    StripHtmlPipe,
    DefaultPipe,
    FilterByPipe,
  ],
})
export class NgxOptimusPipesModule {}
