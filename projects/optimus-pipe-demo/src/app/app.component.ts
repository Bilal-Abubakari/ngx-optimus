import { Component } from "@angular/core";
import { SentenceCasePipe } from "optimus-pipes";

@Component({
  selector: "app-root",
  imports: [SentenceCasePipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "optimus-pipe-demo";
}
