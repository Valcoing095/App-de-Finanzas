import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CreateClientComponent } from "./create-client.component";
import { createClientPageRoutingModule } from "./create-client.routing.module";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,createClientPageRoutingModule],
  declarations: [CreateClientComponent],
  exports: [CreateClientComponent]
})
export class CreateClientComponentModule {}
